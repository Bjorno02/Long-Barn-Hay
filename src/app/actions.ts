'use server';

import type { FormState } from '@/types';
import {
  quoteFormSchema,
  contactFormSchema,
  giveawayFormSchema,
  deliveryCheckSchema,
  validateFormData,
} from '@/lib/validation';
import { checkDeliveryRadius } from '@/lib/geocoding';
import { siteConfig } from '@/lib/siteConfig';
import { parseFormNumber } from '@/lib/utils';

// TODO: Replace with real email service (Resend, SendGrid, etc.)
async function sendEmailNotification(
  to: string,
  subject: string,
  body: string
): Promise<{ success: boolean; error?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (process.env.NODE_ENV === 'development') {
    console.warn('=== EMAIL NOTIFICATION (PLACEHOLDER) ===');
    console.warn(`To: ${to}`);
    console.warn(`Subject: ${subject}`);
    console.warn(`Body:\n${body}`);
    console.warn('========================================');
  }

  return { success: true };
}

export async function submitQuoteForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    preferredContact: formData.get('preferredContact'),
    address: formData.get('address'),
    fulfillmentMethod: formData.get('fulfillmentMethod'),
    productType: formData.get('productType'),
    hayCut: formData.get('hayCut'),
    quantity: parseFormNumber(formData.get('quantity')),
    timeframe: formData.get('timeframe') || undefined,
    notes: formData.get('notes') || undefined,
  };

  const validation = validateFormData(quoteFormSchema, rawData);

  if (!validation.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: validation.errors,
    };
  }

  const data = validation.data;

  const emailSubject = `Quote Request from ${data.name}`;
  const emailBody = `
New Quote Request
=================

Contact Information:
- Name: ${data.name}
- Phone: ${data.phone}
- Email: ${data.email}
- Preferred Contact: ${data.preferredContact}

Order Details:
- Address: ${data.address}
- Fulfillment: ${data.fulfillmentMethod}
- Product: ${data.productType}
- Cut: ${data.hayCut}
- Quantity: ${data.quantity}
${data.timeframe ? `- Timeframe: ${data.timeframe}` : ''}
${data.notes ? `\nAdditional Notes:\n${data.notes}` : ''}
  `.trim();

  const emailResult = await sendEmailNotification(
    siteConfig.contactEmail,
    emailSubject,
    emailBody
  );

  if (!emailResult.success) {
    return {
      success: false,
      message: 'There was an issue submitting your request. Please try again or contact us directly.',
    };
  }

  return {
    success: true,
    message: 'Thank you for your quote request. We will review your information and contact you within 1-2 business days.',
  };
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    message: formData.get('message'),
  };

  const validation = validateFormData(contactFormSchema, rawData);

  if (!validation.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: validation.errors,
    };
  }

  const data = validation.data;

  const emailSubject = `Contact Form Message from ${data.name}`;
  const emailBody = `
New Contact Form Submission
===========================

From: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}
  `.trim();

  const emailResult = await sendEmailNotification(
    siteConfig.contactEmail,
    emailSubject,
    emailBody
  );

  if (!emailResult.success) {
    return {
      success: false,
      message: 'There was an issue sending your message. Please try again or contact us directly.',
    };
  }

  return {
    success: true,
    message: 'Thank you for your message. We will get back to you as soon as possible.',
  };
}

export async function submitGiveawayForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
  };

  const validation = validateFormData(giveawayFormSchema, rawData);

  if (!validation.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: validation.errors,
    };
  }

  const data = validation.data;

  const emailSubject = `Giveaway Signup: ${data.name}`;
  const emailBody = `
New Giveaway Signup
===================

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
  `.trim();

  const emailResult = await sendEmailNotification(
    siteConfig.contactEmail,
    emailSubject,
    emailBody
  );

  if (!emailResult.success) {
    return {
      success: false,
      message: 'There was an issue with your signup. Please try again.',
    };
  }

  return {
    success: true,
    message: 'You have been signed up for giveaway notifications. Thank you for your interest.',
  };
}

export async function checkDeliveryAction(
  _prevState: FormState & { isInRange?: boolean; distanceMiles?: number },
  formData: FormData
): Promise<FormState & { isInRange?: boolean; distanceMiles?: number }> {
  const rawData = {
    address: formData.get('address'),
  };

  const validation = validateFormData(deliveryCheckSchema, rawData);

  if (!validation.success) {
    return {
      success: false,
      message: 'Please enter a valid address.',
      errors: validation.errors,
    };
  }

  const result = await checkDeliveryRadius(validation.data.address);

  return {
    success: true,
    message: result.message,
    isInRange: result.isInRange,
    distanceMiles: result.distanceMiles,
  };
}
