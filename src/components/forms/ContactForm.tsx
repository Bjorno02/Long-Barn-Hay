'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
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
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="chrome-card p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg">
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-steel-900">Message Sent</h3>
        <p className="text-steel-600">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="chrome-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="chrome-red flex h-10 w-10 items-center justify-center rounded-lg">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-steel-900">Send a Message</h3>
          <p className="text-sm text-steel-500">We will get back to you shortly</p>
        </div>
      </div>

      <div className="chrome-divider mb-6" />

      <form action={formAction} className="space-y-4">
        {!state.success && state.message && <Alert variant="error">{state.message}</Alert>}

        {/* Honeypot field - hidden from users, catches bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input name="name" label="Name" required error={state.errors?.name?.[0]} />
          <Input
            name="email"
            label="Email"
            type="email"
            required
            error={state.errors?.email?.[0]}
          />
        </div>
        <Input name="phone" label="Phone" type="tel" error={state.errors?.phone?.[0]} />
        <Textarea
          name="message"
          label="Message"
          required
          placeholder="How can we help?"
          error={state.errors?.message?.[0]}
        />

        <SubmitButton />
      </form>
    </div>
  );
}
