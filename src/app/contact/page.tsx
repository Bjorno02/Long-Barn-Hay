import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-earth-300 py-16">
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
        `,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-copper-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="cream-pill mb-4 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-barn-500" />
            Get in Touch
          </div>
          <h1 className="mb-4 text-4xl font-bold text-espresso-800 md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-xl text-lg text-espresso-600">
            Questions or ready to order? We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="rounded-3xl bg-cream-100/80 p-8 shadow-xl backdrop-blur-sm lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Info Column */}
            <div className="space-y-6 lg:col-span-4">
              {/* Phone Card */}
              <div className="rounded-2xl border border-earth-200/50 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-barn-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-espresso-800">Call or Text</h3>
                    <a
                      href="tel:603-556-8676"
                      className="font-medium text-barn-600 transition-colors hover:text-barn-700"
                    >
                      (603) 556-8676
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="rounded-2xl border border-earth-200/50 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="earth-accent flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-espresso-800">Location</h3>
                    <address className="text-sm not-italic leading-relaxed text-espresso-600">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{' '}
                      {siteConfig.address.zipCode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Facebook Card */}
              <div className="rounded-2xl border border-earth-200/50 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="amber-accent flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <svg
                      className="h-6 w-6 text-espresso-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-espresso-800">Follow Us</h3>
                    <a
                      href={siteConfig.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-espresso-600 transition-colors hover:text-barn-600"
                    >
                      Facebook
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Delivery Info Card */}
              <div className="copper-accent rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Delivery</h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      {siteConfig.deliveryLeadTimeDays} day lead time
                      <br />
                      Contact for availability
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="rounded-2xl bg-espresso-800 p-6 shadow-lg">
                <h3 className="mb-3 font-semibold text-cream-100">What We Offer</h3>
                <ul className="space-y-2 text-sm text-cream-200">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    1st &amp; 2nd Cut Hay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    Small Squares
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    Large Rounds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    Large Squares
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-copper-400 via-amber-400 to-copper-500" />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
