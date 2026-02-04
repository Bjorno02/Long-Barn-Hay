'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitQuoteForm } from '@/app/actions';
import { Input, Select, Textarea, RadioGroup, Button, Alert } from '@/components/ui';
import { siteConfig } from '@/lib/siteConfig';
import type { FormState } from '@/types';

const initialState: FormState = { success: false, message: '' };

const productOptions = siteConfig.products.map((p) => ({ value: p.id, label: p.name }));
const cutOptions = siteConfig.hayCuts.map((c) => ({ value: c.id, label: c.name }));
const contactOptions = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text' },
];
const fulfillmentOptions = [
  { value: 'delivery', label: 'Delivery' },
  { value: 'pickup', label: 'Pickup' },
];

function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" isLoading={pending} className="w-full">
      {pending ? 'Submitting...' : 'Submit Quote Request'}
    </Button>
  );
}

export function QuoteForm(): JSX.Element {
  const [state, formAction] = useFormState(submitQuoteForm, initialState);

  if (state.success) {
    return (
      <div className="chrome-card p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-steel-900 mb-3">Request Submitted</h3>
        <p className="text-steel-600">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="chrome-card p-6 lg:p-8">
      <form action={formAction} className="space-y-6">
        {!state.success && state.message && (
          <Alert variant="error">{state.message}</Alert>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 chrome-red rounded-lg flex items-center justify-center text-white text-sm font-bold">1</div>
            <h4 className="font-semibold text-steel-900">Contact Information</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input name="name" label="Name" required error={state.errors?.name?.[0]} />
            <Input name="phone" label="Phone" type="tel" required error={state.errors?.phone?.[0]} />
          </div>
          <Input name="email" label="Email" type="email" required error={state.errors?.email?.[0]} />
          <RadioGroup name="preferredContact" label="Preferred Contact Method" options={contactOptions} required error={state.errors?.preferredContact?.[0]} />
        </div>

        <div className="chrome-divider" />

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 chrome-surface-dark rounded-lg flex items-center justify-center text-steel-300 text-sm font-bold">2</div>
            <h4 className="font-semibold text-steel-900">Fulfillment</h4>
          </div>
          <Input name="address" label="Address" required error={state.errors?.address?.[0]} />
          <RadioGroup name="fulfillmentMethod" label="Delivery or Pickup" options={fulfillmentOptions} required error={state.errors?.fulfillmentMethod?.[0]} />
        </div>

        <div className="chrome-divider" />

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 chrome-surface rounded-lg flex items-center justify-center text-steel-600 text-sm font-bold">3</div>
            <h4 className="font-semibold text-steel-900">Order Details</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select name="productType" label="Product Type" options={productOptions} placeholder="Select product" required error={state.errors?.productType?.[0]} />
            <Select name="hayCut" label="Hay Cut" options={cutOptions} placeholder="Select cut" required error={state.errors?.hayCut?.[0]} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input name="quantity" label="Quantity" type="number" min={1} required error={state.errors?.quantity?.[0]} />
            <Input name="timeframe" label="Timeframe" placeholder="Optional" error={state.errors?.timeframe?.[0]} />
          </div>
          <Textarea name="notes" label="Additional Notes" placeholder="Any special requests or information" error={state.errors?.notes?.[0]} />
        </div>

        <div className="chrome-divider" />

        <div>
          <div className="chrome-pill inline-block text-xs mb-4">{siteConfig.disclaimers.pricing}</div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
