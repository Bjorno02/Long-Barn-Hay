'use server';

import { Resend } from 'resend';
import type { FormState } from '@/types';
import { contactFormSchema, giveawayFormSchema, validateFormData } from '@/lib/validation';
import { siteConfig } from '@/lib/siteConfig';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use override for testing (when domain isn't verified yet), otherwise use config
const getRecipientEmail = () => process.env.CONTACT_EMAIL_OVERRIDE || siteConfig.contactEmail;

async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured - email not sent');
    console.warn(`Would have sent to: ${to}`);
    console.warn(`Subject: ${subject}`);
    console.warn(`Body:\n${body}`);
    return { success: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Long Barn Hay <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      text: body,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Email send error:', err);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot check - if filled, it's a bot
  const honeypot = formData.get('website');
  if (honeypot) {
    // Silently reject but return success to not tip off bots
    return {
      success: true,
      message: 'Thank you for your message.',
    };
  }

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

  const emailSubject = `New Contact Form Message from ${data.name}`;
  const emailBody = `
New Contact Form Submission
===========================

From: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

---
Sent from Long Barn Hay website
  `.trim();

  const emailResult = await sendEmail(getRecipientEmail(), emailSubject, emailBody);

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
  // Honeypot check - if filled, it's a bot
  const honeypot = formData.get('website');
  if (honeypot) {
    return {
      success: true,
      message: 'Thank you for signing up.',
    };
  }

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

---
Sent from Long Barn Hay website
  `.trim();

  const emailResult = await sendEmail(getRecipientEmail(), emailSubject, emailBody);

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
