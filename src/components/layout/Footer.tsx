import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export function Footer(): JSX.Element {
  return (
    <footer className="relative">
      {/* Earth tone top accent */}
      <div className="earth-divider" />

      <div className="bg-steel-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="mb-4 inline-flex items-center gap-3 sm:mb-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-chrome sm:h-14 sm:w-14">
                  <Image
                    src="/photos/LongBarnLogo.jpg"
                    alt="Long Barn Hay"
                    fill
                    sizes="56px"
                    quality={80}
                    loading="lazy"
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-lg font-bold text-white sm:text-xl">
                  {siteConfig.companyName}
                </span>
              </Link>
              <p className="mb-4 max-w-sm text-sm text-steel-400 sm:mb-6 sm:text-base">
                Quality 1st and 2nd cut hay from Chester, NH. Delivery and pickup available.
              </p>
              <address className="mb-3 text-xs not-italic text-steel-500 sm:mb-4 sm:text-sm">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zipCode}
              </address>
              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href="tel:603-556-8676"
                  className="flex items-center gap-2 text-steel-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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
                  (603) 556-8676
                </a>
                <a
                  href="mailto:Longbarnhay@gmail.com"
                  className="flex items-center gap-2 text-steel-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Longbarnhay@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-xs text-steel-400 transition-colors hover:text-white sm:text-sm"
                  >
                    Home
                  </Link>
                </li>
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-steel-400 transition-colors hover:text-white sm:text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base">
                Connect
              </h3>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-surface-dark inline-flex items-center gap-2 rounded-lg px-4 py-2.5 transition-colors hover:bg-steel-700 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3"
              >
                <svg
                  className="h-4 w-4 text-steel-300 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-xs text-steel-300 sm:text-sm">Facebook</span>
              </a>

              <div className="mt-4 sm:mt-6">
                <Link
                  href="/contact"
                  className="chrome-red inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Us
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
              <p className="text-xs text-steel-500 sm:text-sm">
                &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-steel-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Chester, NH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
