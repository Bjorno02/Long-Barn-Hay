import type { Metadata } from 'next';
import Image from 'next/image';
import { QuoteForm } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Quote',
};

export default function QuotePage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/2ndCut.jpg"
            alt="Quality Hay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-barn-900/80 via-barn-900/60 to-barn-900/90" />
        </div>

        {/* Chrome accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            Get Started
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Request a Quote</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative earth-surface py-16">
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-2xl mx-auto px-6">
          {/* Form with chrome frame */}
          <div className="relative -mt-24">
            <div className="absolute -inset-1 rounded-2xl bg-hay-400" />
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="hay-pill inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-hay-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              1-2 day response
            </div>
            <div className="sage-pill inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No obligation
            </div>
            <div className="earth-pill inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-earth-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Local to Chester, NH
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
