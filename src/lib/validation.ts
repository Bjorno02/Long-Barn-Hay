import { z } from 'zod';

const phoneRegex = /^[\d\s\-\+\(\)]+$/;

const optionalPhoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => !val || (val.length >= 10 && phoneRegex.test(val)),
    'Please enter a valid phone number'
  );

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z.string().email('Please enter a valid email address'),

  phone: optionalPhoneSchema,

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const giveawayFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z.string().email('Please enter a valid email address'),

  phone: optionalPhoneSchema,
});

export type GiveawayFormSchema = z.infer<typeof giveawayFormSchema>;

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string[]> };

export function validateFormData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string[]> = {};

  for (const issue of result.error.issues) {
    const path = issue.path.join('.');
    if (!errors[path]) {
      errors[path] = [];
    }
    errors[path].push(issue.message);
  }

  return { success: false, errors };
}
