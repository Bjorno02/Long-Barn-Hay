'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { checkDeliveryAction } from '@/app/actions';
import { Input, Button } from '@/components/ui';
import type { FormState } from '@/types';

type RadiusCheckState = FormState & { 
  isInRange?: boolean; 
  distanceMiles?: number;
};

const initialState: RadiusCheckState = {
  success: false,
  message: '',
};

function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending} className="w-full">
      {pending ? 'Checking...' : 'Check Range'}
    </Button>
  );
}

export function RadiusChecker(): JSX.Element {
  const [state, formAction] = useFormState(checkDeliveryAction, initialState);

  const hasResult = state.success && state.isInRange !== undefined;

  return (
    <div className="chrome-card p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 chrome-red rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-steel-900">Check Delivery Range</h3>
          <p className="text-steel-500 text-sm">Enter your address below</p>
        </div>
      </div>

      <div className="chrome-divider mb-6" />

      <form action={formAction} className="space-y-4">
        <Input
          name="address"
          label="Full Address"
          placeholder="123 Main St, City, State ZIP"
          required
          error={state.errors?.address?.[0]}
        />
        <SubmitButton />
      </form>

      {hasResult && (
        <div className="mt-6">
          <div className="chrome-divider mb-6" />
          
          {state.isInRange ? (
            <div className="relative overflow-hidden rounded-lg p-4">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10" />
              <div className="absolute inset-0 bg-chrome-shine opacity-10" />
              
              <div className="relative flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-700">In Range</p>
                  <p className="text-green-600 text-sm">{state.message}</p>
                  {state.distanceMiles !== undefined && (
                    <div className="chrome-pill mt-2 inline-block text-xs">
                      {state.distanceMiles.toFixed(1)} miles away
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-lg p-4">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-600/10" />
              <div className="absolute inset-0 bg-chrome-shine opacity-10" />
              
              <div className="relative flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg chrome-surface-dark flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-amber-700">Out of Range</p>
                  <p className="text-amber-600 text-sm">{state.message}</p>
                  {state.distanceMiles !== undefined && (
                    <div className="chrome-pill-dark mt-2 inline-block text-xs">
                      {state.distanceMiles.toFixed(1)} miles away
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
