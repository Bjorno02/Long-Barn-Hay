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
      <div className="chrome-card p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg sm:mb-6 sm:h-16 sm:w-16">
          <svg
            className="h-7 w-7 text-white sm:h-8 sm:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-steel-900 sm:mb-3 sm:text-2xl">
          Message Sent
        </h3>
        <p className="text-sm text-steel-600 sm:text-base">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="chrome-card p-5 sm:p-6 lg:p-8">
      <div className="mb-4 flex items-center gap-3 sm:mb-6">
        <div className="chrome-red flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10">
          <svg
            className="h-4 w-4 text-white sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold text-steel-900 sm:text-lg">Send a Message</h3>
          <p className="text-xs text-steel-500 sm:text-sm">We will get back to you shortly</p>
        </div>
      </div>

      <div className="chrome-divider mb-4 sm:mb-6" />

      <form action={formAction} className="space-y-3 sm:space-y-4">
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
