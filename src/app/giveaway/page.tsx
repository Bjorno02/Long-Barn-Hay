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
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-steel-900">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-600/20 to-amber-400/15" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Coming Soon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hay Giveaway
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We&apos;re planning something special for our community. Check back soon for details on our upcoming hay giveaway!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24" style={{ backgroundColor: '#FFDBBB' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-chrome">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl amber-accent flex items-center justify-center">
              <svg className="w-10 h-10 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-earth-700 mb-4">
              Stay Tuned
            </h2>
            <p className="text-earth-600 mb-8">
              Follow us on Facebook to be the first to know when our giveaway launches. 
              We&apos;ll be giving away quality hay to lucky winners in our delivery area!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copper-accent px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Follow on Facebook
              </a>
              <Link
                href="/contact"
                className="chrome-button px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-8 text-earth-600 text-sm">
            Giveaway available for local pickup from {siteConfig.address.city}, {siteConfig.address.state}.
          </p>
        </div>
      </section>
    </>
  );
}
