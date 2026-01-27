import type { Metadata } from 'next';
import { QuoteForm } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Quote',
};

export default function QuotePage(): JSX.Element {
  return (
    <>
      {/* Header: Red with chrome accents */}
      <section className="relative bg-barn-600 text-white pt-16 pb-40 overflow-hidden">
        {/* Chrome geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/3">
          <div className="absolute inset-0 rounded-full bg-chrome-gradient opacity-10" />
          <div className="absolute inset-4 rounded-full bg-chrome-gradient opacity-5" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-chrome-dark opacity-10 rotate-45" />
        
        {/* Chrome accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="chrome-pill-dark inline-block mb-4">Get Started</div>
          <h1 className="text-5xl font-bold mb-3">Request a Quote</h1>
          <p className="text-barn-100 max-w-xl text-lg">
            {siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Form: Overlapping with chrome frame */}
      <section className="relative -mt-24 pb-24 bg-steel-100">
        <div className="max-w-2xl mx-auto px-6">
          {/* Chrome connecting line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-white/40 to-transparent" />
          
          {/* Chrome outer frame */}
          <div className="relative">
            <div className="absolute -inset-[3px] rounded-2xl bg-chrome-gradient opacity-60" />
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
          
          {/* Trust indicators with chrome pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="chrome-pill flex items-center gap-2">
              <svg className="w-4 h-4 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              1-2 day response
            </div>
            <div className="chrome-pill flex items-center gap-2">
              <svg className="w-4 h-4 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No obligation
            </div>
            <div className="chrome-pill flex items-center gap-2">
              <svg className="w-4 h-4 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
