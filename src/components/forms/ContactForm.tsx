'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { Input, Textarea, Button, Alert } from '@/components/ui';
import type { FormState } from '@/types';

const initialState: FormState = { success: false, message: '' };

function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" isLoading={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm(): JSX.Element {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="chrome-card p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-steel-900 mb-3">Message Sent</h3>
        <p className="text-steel-600">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="chrome-card p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 chrome-red rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-steel-900">Send a Message</h3>
          <p className="text-steel-500 text-sm">We will get back to you shortly</p>
        </div>
      </div>

      <div className="chrome-divider mb-6" />

      <form action={formAction} className="space-y-4">
        {!state.success && state.message && (
          <Alert variant="error">{state.message}</Alert>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input name="name" label="Name" required error={state.errors?.name?.[0]} />
          <Input name="email" label="Email" type="email" required error={state.errors?.email?.[0]} />
        </div>
        <Input name="phone" label="Phone" type="tel" error={state.errors?.phone?.[0]} />
        <Textarea name="message" label="Message" required placeholder="How can we help?" error={state.errors?.message?.[0]} />
        
        <SubmitButton />
      </form>
    </div>
  );
}
