import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      {/* Header: Split design with chrome */}
      <section className="relative min-h-[40vh] overflow-hidden">
        {/* Grey base */}
        <div className="absolute inset-0 bg-steel-800" />
        {/* Red accent with chrome edge */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-barn-600"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
        {/* Chrome diagonal line */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{ 
            background: 'linear-gradient(to bottom right, transparent 49%, rgba(212,212,216,0.3) 49.5%, rgba(212,212,216,0.3) 50.5%, transparent 51%)',
            clipPath: 'polygon(30% 0, 31% 0, 1% 100%, 0 100%)'
          }}
        />
        
        {/* Chrome accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-chrome-gradient opacity-30" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
          <div className="chrome-pill inline-block mb-4">Get in Touch</div>
          <h1 className="text-5xl font-bold text-white mb-3">Contact</h1>
          <p className="text-steel-300 max-w-xl text-lg">
            Questions or ready to order? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-steel-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Info column with chrome cards */}
            <div className="lg:col-span-4 space-y-6">
              {/* Location card - Chrome */}
              <div className="chrome-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg chrome-surface flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">Location</h3>
                    <address className="not-italic text-steel-600 text-sm">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zipCode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Facebook card - Red chrome */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 chrome-red" />
                <div className="absolute inset-0 bg-chrome-shine opacity-20" />
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Follow Us</h3>
                      <a
                        href={siteConfig.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-barn-100 text-sm hover:text-white transition-colors"
                      >
                        Facebook →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery info - Dark chrome */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 chrome-surface-dark" />
                <div className="absolute inset-0 bg-chrome-shine opacity-10" />
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Delivery</h3>
                      <p className="text-steel-400 text-sm">
                        {siteConfig.radiusMiles} mile radius<br />
                        {siteConfig.deliveryLeadTimeDays} day lead time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column with chrome frame */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute -inset-[3px] rounded-2xl bg-chrome-gradient opacity-60" />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
