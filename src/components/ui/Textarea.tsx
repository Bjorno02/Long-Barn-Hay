import { forwardRef, type TextareaHTMLAttributes, useId } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, hint, className, id: providedId, ...props }, ref) {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

    const hasError = Boolean(error);
    const hasHint = Boolean(hint);

    const describedBy = [
      hasError && errorId,
      hasHint && hintId,
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-steel-700">
          {label}
          {props.required && <span className="text-barn-500 ml-1" aria-hidden="true">*</span>}
        </label>
        
        <textarea
          ref={ref}
          id={id}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          aria-required={props.required || undefined}
          className={cn(
            'w-full px-4 py-3 rounded bg-white border text-steel-900 placeholder:text-steel-400',
            'transition-colors resize-y min-h-[100px]',
            'focus:outline-none focus:ring-2 focus:ring-barn-500/30 focus:border-barn-500',
            hasError ? 'border-barn-500' : 'border-steel-300',
            className
          )}
          {...props}
        />
        
        {hint && !error && (
          <p id={hintId} className="text-sm text-steel-500">
            {hint}
          </p>
        )}
        
        {error && (
          <p id={errorId} className="text-sm text-barn-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
