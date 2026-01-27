import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  variant: AlertVariant;
  children: ReactNode;
}

const variants: Record<AlertVariant, string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-barn-50 border-barn-200 text-barn-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

export function Alert({ variant, children }: AlertProps): JSX.Element {
  return (
    <div className={cn('rounded border p-4 text-sm', variants[variant])}>
      {children}
    </div>
  );
}
