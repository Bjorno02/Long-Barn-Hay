import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  companyName: 'Long Barn Hay',
  tagline: 'Quality hay for your livestock',

  address: {
    street: '154 Towle Road',
    city: 'Chester',
    state: 'NH',
    country: 'United States',
    zipCode: '03036',
    fullAddress: '154 Towle Road, Chester, NH 03036, United States',
  },

  // TODO: Replace with actual coordinates
  coordinates: {
    lat: 42.9667,
    lng: -71.2500,
  },

  facebookUrl: 'https://www.facebook.com/profile.php?id=61574773954576',
  contactEmail: 'contact@longbarnhay.com',

  radiusMiles: 50,
  deliveryLeadTimeDays: '3–5',

  products: [
    {
      id: 'small-square',
      name: 'Small Square',
      description: 'Traditional rectangular bales. Easy to handle and store. Ideal for smaller operations and hobby farms.',
      features: [
        'Manual handling',
        'Easy stacking',
        '1st and 2nd cut',
      ],
    },
    {
      id: 'large-round',
      name: 'Large Round',
      description: 'Efficient round bales for larger operations. Weather-resistant outer layer.',
      features: [
        'Large-scale operations',
        'Weather resistant',
        '1st and 2nd cut',
      ],
    },
    {
      id: 'large-square',
      name: 'Large Square',
      description: 'High-density rectangular bales. Maximum storage efficiency for commercial operations.',
      features: [
        'High density',
        'Efficient transport',
        '1st and 2nd cut',
      ],
    },
  ],

  hayCuts: [
    {
      id: '1st',
      name: '1st Cut',
      description: 'Harvested late spring to early summer. First growth of the season.',
      characteristics: [
        'Coarser texture, more stem',
        'Higher fiber content',
        'Lower protein density',
        'Good for bulk and fiber needs',
      ],
    },
    {
      id: '2nd',
      name: '2nd Cut',
      description: 'Harvested 6-8 weeks after first cutting. Different nutritional profile.',
      characteristics: [
        'Softer, leafier texture',
        'Higher protein and energy',
        'Greener appearance',
        'For higher nutritional needs',
      ],
    },
  ],

  disclaimers: {
    pricing: 'Pricing varies by quantity and fulfillment method. Request a quote for current pricing.',
    delivery: 'Delivery within 50 miles. Lead time typically 3-5 days.',
  },

  navigation: [
    { label: 'Products', href: '/products' },
    { label: 'Delivery', href: '/delivery' },
    { label: 'Quote', href: '/quote' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function getFullAddress(): string {
  return siteConfig.address.fullAddress;
}

export function getProductById(id: string): typeof siteConfig.products[number] | undefined {
  return siteConfig.products.find((p) => p.id === id);
}

export function getHayCutById(id: string): typeof siteConfig.hayCuts[number] | undefined {
  return siteConfig.hayCuts.find((c) => c.id === id);
}
