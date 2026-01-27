import type { Metadata } from 'next';
import Image from 'next/image';
import { RadiusChecker } from '@/components/forms';
import { Accordion } from '@/components/ui';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Delivery',
};

const faqItems = [
  {
    id: 'radius',
    question: 'What is your delivery radius?',
    answer: `We deliver within ${siteConfig.radiusMiles} miles of ${siteConfig.address.city}, ${siteConfig.address.state}. Distance is calculated as straight-line miles from our location. Use the checker above to see if your address is within range.`,
  },
  {
    id: 'lead-time',
    question: 'How long does delivery take?',
    answer: `Our typical lead time is ${siteConfig.deliveryLeadTimeDays} days. This may vary based on current demand and your location. We'll confirm timing when you request a quote.`,
  },
  {
    id: 'pickup',
    question: 'Can I pick up hay at your location?',
    answer: `Yes, pickup is available at our location: ${siteConfig.address.fullAddress}. Please contact us to arrange a pickup time.`,
  },
  {
    id: 'out-of-range',
    question: 'What if I am outside the delivery radius?',
    answer: 'If your location is outside our standard delivery radius, please contact us to discuss options. We may be able to accommodate special arrangements depending on the order size and location.',
  },
  {
    id: 'quantity',
    question: 'Is there a minimum order for delivery?',
    answer: 'We handle orders of all sizes, from small to large loads. Delivery pricing varies based on quantity and distance. Request a quote for specific pricing.',
  },
  {
    id: 'unloading',
    question: 'Do you help with unloading?',
    answer: 'Please discuss unloading arrangements when requesting your quote. Requirements vary based on bale type and quantity.',
  },
];

export default function DeliveryPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/RoundBales.jpg"
            alt="Hay delivery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-steel-900/80 via-steel-900/60 to-steel-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-barn-900/30 to-transparent" />
        </div>

        {/* Chrome accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-barn-500" />
            Service Area
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Delivery</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We deliver within {siteConfig.radiusMiles} miles of {siteConfig.address.city}, {siteConfig.address.state}.
            Enter your address below to check availability.
          </p>
        </div>
      </section>

      {/* Checker Section */}
      <section className="relative earth-surface py-16">
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Radius Checker */}
            <div className="relative -mt-24">
              <div className="absolute -inset-1 rounded-2xl bg-hay-400" />
              <div className="relative">
                <RadiusChecker />
              </div>
            </div>

            {/* How It Works */}
            <div className="lg:pt-8">
              <h2 className="text-2xl font-bold text-earth-900 mb-8">How It Works</h2>
              
              <div className="space-y-8">
                <Step 
                  number={1} 
                  title="Enter Your Address" 
                  description="Type your full address into the checker to verify you're within our delivery radius."
                />
                <Step 
                  number={2} 
                  title="See Your Results" 
                  description="We calculate the straight-line distance from our Chester, NH location to your address."
                />
                <Step 
                  number={3} 
                  title="Request a Quote" 
                  description="If you're in range, request a quote. Outside range? Contact us to discuss options."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="earth-surface-warm p-10 text-center border-r border-earth-200">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-earth-300 flex items-center justify-center">
              <svg className="w-7 h-7 text-earth-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-earth-900 text-xl mb-1">{siteConfig.deliveryLeadTimeDays} Days</h3>
            <p className="text-earth-700">Typical lead time</p>
          </div>
          <div className="hay-accent p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-earth-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-earth-900 text-xl mb-1">{siteConfig.radiusMiles} Miles</h3>
            <p className="text-earth-800/80">Delivery radius</p>
          </div>
          <div className="sage-accent p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/15 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-xl mb-1">Pickup</h3>
            <p className="text-sage-100">Available at our location</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="earth-surface py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="sage-pill inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-sage-600" />
              Common Questions
            </div>
            <h2 className="text-3xl font-bold text-earth-900">Delivery FAQ</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-chrome">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Pickup Info */}
      <section className="bg-steel-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Prefer to Pick Up?</h2>
          <p className="text-steel-400 mb-2">
            Pickup is available at our location:
          </p>
          <address className="not-italic text-white font-medium text-lg mb-6">
            {siteConfig.address.fullAddress}
          </address>
          <a
            href="/contact"
            className="chrome-button px-8 py-3 rounded-full font-medium inline-flex items-center gap-2"
          >
            Contact to Arrange Pickup
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }): JSX.Element {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-full hay-accent flex items-center justify-center font-bold text-lg flex-shrink-0">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="font-semibold text-earth-900 text-lg">{title}</h3>
        <p className="text-earth-700 mt-1">{description}</p>
      </div>
    </div>
  );
}
