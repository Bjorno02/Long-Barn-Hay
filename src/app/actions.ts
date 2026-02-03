'use server';

import type { FormState } from '@/types';
import {
  contactFormSchema,
  giveawayFormSchema,
  validateFormData,
} from '@/lib/validation';
import { siteConfig } from '@/lib/siteConfig';

/**
 * Sends email notification (placeholder for real email service)
 * TODO: Replace with Resend, SendGrid, or similar
 */
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
