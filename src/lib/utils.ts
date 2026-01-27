import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
}

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

export function formatProductType(type: string): string {
  const names: Record<string, string> = {
    'small-square': 'Small Square Bales',
    'large-round': 'Large Round Bales',
    'large-square': 'Large Square Bales',
  };
  
  return names[type] ?? type;
}

export function formatHayCut(cut: string): string {
  const names: Record<string, string> = {
    '1st': '1st Cut',
    '2nd': '2nd Cut',
  };
  
  return names[cut] ?? cut;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function parseFormNumber(value: FormDataEntryValue | null): number | undefined {
  if (value === null || value === '') {
    return undefined;
  }
  
  const parsed = Number(value);
  
  if (Number.isNaN(parsed)) {
    return undefined;
  }
  
  return parsed;
}
