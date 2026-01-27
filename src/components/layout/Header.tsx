'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import { cn } from '@/lib/utils';

export function Header(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-barn-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50">
        <div className="h-1 bg-chrome-gradient" />
        
        <div className="chrome-surface border-b border-steel-200/50">
          <nav 
            className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
            aria-label="Main navigation"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-chrome">
                <Image
                  src="/photos/LongBarnLogo.jpg"
                  alt=""
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-lg font-semibold text-steel-900 group-hover:text-barn-600 transition-colors">
                {siteConfig.companyName}
              </span>
            </Link>

            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        isActive
                          ? 'chrome-red'
                          : 'text-steel-600 hover:text-steel-900 hover:bg-steel-100'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="md:hidden chrome-button p-2 rounded-lg"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5 text-steel-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
        
        <div className="h-[1px] bg-gradient-to-r from-transparent via-chrome-300 to-transparent" />

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <div
          id="mobile-menu"
          className={cn(
            'fixed top-0 right-0 h-full w-72 bg-white shadow-deep z-50 transform transition-transform duration-300 ease-in-out md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold text-steel-900">Menu</span>
              <button
                type="button"
                className="chrome-button p-2 rounded-lg"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-steel-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="space-y-2" role="list">
                {siteConfig.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg font-medium transition-all',
                          isActive
                            ? 'chrome-red'
                            : 'text-steel-700 hover:bg-steel-100'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="chrome-divider my-6" />

            <Link
              href="/quote"
              className="chrome-red block text-center px-4 py-3 rounded-lg font-medium"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
