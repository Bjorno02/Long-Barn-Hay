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
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-steel-900">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-600/20 to-amber-400/15" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Coming Soon
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Hay Giveaway</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/80">
            We're planning something special for our community. Check back soon for details on our
            upcoming hay giveaway!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24" style={{ backgroundColor: '#FFDBBB' }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-chrome">
            <div className="amber-accent mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
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

            <h2 className="mb-4 text-3xl font-bold text-earth-700">Stay Tuned</h2>
            <p className="mb-8 text-earth-600">
              Follow us on Facebook to be the first to know when our giveaway launches. We'll be
              giving away quality hay to lucky winners in our delivery area!
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copper-accent inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Follow on Facebook
              </a>
              <Link
                href="/contact"
                className="chrome-button inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm text-earth-600">
            Giveaway available for local pickup from {siteConfig.address.city},{' '}
            {siteConfig.address.state}.
          </p>
        </div>
      </section>
    </>
  );
}
