import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Giveaway',
  description: 'Enter our hay giveaway for a chance to win free hay from Long Barn Hay.',
};

export default function GiveawayPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-steel-900 sm:min-h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-600/20 to-amber-400/15" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Coming Soon
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-5xl md:text-6xl">
            Hay Giveaway
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-xl">
            We're planning something special for our community. Check back soon for details on our
            upcoming hay giveaway!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#FFDBBB' }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="rounded-xl bg-white p-6 shadow-chrome sm:rounded-2xl sm:p-10">
            <div className="amber-accent mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl sm:mb-6 sm:h-20 sm:w-20 sm:rounded-2xl">
              <svg
                className="h-10 w-10 text-amber-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-earth-700 sm:mb-4 sm:text-3xl">
              Stay Tuned
            </h2>
            <p className="mb-6 text-sm text-earth-600 sm:mb-8 sm:text-base">
              Follow us on Facebook to be the first to know when our giveaway launches. We'll be
              giving away quality hay to lucky winners in our delivery area!
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copper-accent inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Follow on Facebook
              </a>
              <Link
                href="/contact"
                className="chrome-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-6 text-xs text-earth-600 sm:mt-8 sm:text-sm">
            Giveaway available for local pickup from {siteConfig.address.city},{' '}
            {siteConfig.address.state}.
          </p>
        </div>
      </section>
    </>
  );
}
