import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export function Footer(): JSX.Element {
  return (
    <footer className="relative">
      {/* Earth tone top accent */}
      <div className="earth-divider" />
      
      <div className="bg-steel-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white shadow-chrome">
                  <Image
                    src="/photos/LongBarnLogo.jpg"
                    alt="Long Barn Hay"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-xl font-bold text-white">{siteConfig.companyName}</span>
              </Link>
              <p className="text-steel-400 mb-6 max-w-sm">
                Quality 1st and 2nd cut hay from Chester, NH. 
                Delivery and pickup available.
              </p>
              <address className="not-italic text-steel-500 text-sm">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zipCode}
              </address>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-steel-400 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-steel-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 chrome-surface-dark px-5 py-3 rounded-xl hover:bg-steel-700 transition-colors"
              >
                <svg className="w-5 h-5 text-steel-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-steel-300 text-sm">Facebook</span>
              </a>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="chrome-red px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-steel-500 text-sm">
                &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-steel-600 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Chester, NH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
