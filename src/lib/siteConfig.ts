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
  contactEmail: 'Longbarnhay@gmail.com',

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
      description: 'First harvest of the season. Coarser and higher in fiber, ideal for maintenance feeding.',
      fullDescription: 'The first harvest taken in late spring or early summer. It\'s usually coarser, thicker-stemmed, and higher in fiber, with lower protein and energy than later cuttings. Great for maintenance feeding but less ideal for high-performance or growing animals.',
      characteristics: [
        'Coarser, thicker-stemmed texture',
        'Higher fiber content',
        'Lower protein and energy',
        'Great for easy keepers and beef cattle',
        'Ideal for animals needing roughage over calories',
      ],
    },
    {
      id: '2nd',
      name: '2nd Cut',
      description: 'Later summer harvest. Softer and leafier with higher protein and energy.',
      fullDescription: 'Harvested later in the summer after the field regrows. Typically softer, leafier, and finer-stemmed with higher protein, energy, and better digestibility. Often preferred for horses in work, growing animals, and dairy cows.',
      characteristics: [
        'Softer, leafier, finer-stemmed',
        'Higher protein and energy',
        'Better digestibility',
        'Preferred for horses in work',
        'Great for growing animals and dairy cows',
      ],
    },
  ],

  disclaimers: {
    pricing: 'Pricing varies by quantity and fulfillment method. Contact us for current pricing.',
    delivery: 'Lead time typically 3-5 days. Contact us for delivery availability.',
  },

  navigation: [
    { label: 'Products', href: '/products' },
    { label: 'Giveaway', href: '/giveaway' },
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
