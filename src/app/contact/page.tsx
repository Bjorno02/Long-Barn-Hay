import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/RoundBales.jpg"
            alt="Long Barn Hay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-steel-900/80 via-steel-900/60 to-steel-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-barn-900/20 to-transparent" />
        </div>

        {/* Chrome accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-barn-500" />
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Questions or ready to order? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-steel-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Info Column */}
            <div className="lg:col-span-4 space-y-6 lg:-mt-24">
              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 shadow-chrome">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl chrome-surface flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">Location</h3>
                    <address className="not-italic text-steel-600 text-sm leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zipCode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Facebook Card */}
              <div className="chrome-red rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
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
                      className="text-white/80 text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      Facebook
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Delivery Info Card */}
              <div className="chrome-surface-dark rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Delivery</h3>
                    <p className="text-steel-400 text-sm leading-relaxed">
                      {siteConfig.radiusMiles} mile radius<br />
                      {siteConfig.deliveryLeadTimeDays} day lead time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8 lg:-mt-24">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-chrome-gradient" />
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
