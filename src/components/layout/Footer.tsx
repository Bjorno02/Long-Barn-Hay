import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export function Footer(): JSX.Element {
  return (
    <footer className="relative">
      {/* Chrome top accent */}
      <div className="h-[2px] bg-chrome-gradient" />
      
      <div className="bg-steel-900">
        {/* Chrome shine line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand with logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-chrome">
                  <Image
                    src="/photos/LongBarnLogo.jpg"
                    alt="Long Barn Hay"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-lg font-semibold text-white">{siteConfig.companyName}</span>
              </div>
              <address className="not-italic text-steel-400 text-sm">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zipCode}
              </address>
            </div>

            {/* Quick Links with chrome bullets */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-steel-400 text-sm hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-chrome-400" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social with chrome card */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 chrome-surface-dark px-4 py-3 rounded-lg hover:shadow-chrome-glow transition-shadow"
              >
                <svg className="w-5 h-5 text-steel-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-steel-300 text-sm">Follow on Facebook</span>
              </a>
            </div>
          </div>

          {/* Chrome divider */}
          <div className="chrome-divider my-8 opacity-30" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-steel-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}</p>
            <Link href="/quote" className="chrome-pill text-xs">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
