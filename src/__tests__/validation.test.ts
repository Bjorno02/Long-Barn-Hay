import { describe, it, expect } from 'vitest';
import { contactFormSchema, giveawayFormSchema, validateFormData } from '@/lib/validation';

describe('contactFormSchema', () => {
  it('validates a complete valid form', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '603-555-1234',
      message: 'I would like to order some hay for my horses.',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('validates without optional phone', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'I would like to order some hay for my horses.',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('rejects short name', () => {
    const data = {
      name: 'J',
      email: 'john@example.com',
      message: 'I would like to order some hay.',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const data = {
      name: 'John Doe',
      email: 'not-an-email',
      message: 'I would like to order some hay.',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hi',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('rejects invalid phone format', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: 'abc',
      message: 'I would like to order some hay.',
    };

    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});

describe('giveawayFormSchema', () => {
  it('validates a complete valid form', () => {
    const data = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '603-555-9876',
    };

    const result = giveawayFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it('validates without optional phone', () => {
    const data = {
      name: 'Jane Smith',
      email: 'jane@example.com',
    };

    const result = giveawayFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});

describe('validateFormData', () => {
  it('returns success with data for valid input', () => {
    const data = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message.',
    };

    const result = validateFormData(contactFormSchema, data);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe('John Doe');
    }
  });

  it('returns errors for invalid input', () => {
    const data = {
      name: 'J',
      email: 'bad',
      message: 'Hi',
    };

    const result = validateFormData(contactFormSchema, data);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toHaveProperty('name');
      expect(result.errors).toHaveProperty('email');
      expect(result.errors).toHaveProperty('message');
    }
  });
});
