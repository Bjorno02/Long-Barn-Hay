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
  const [isScrolled, setIsScrolled] = useState(false);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
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

  const isHome = pathname === '/';

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-barn-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHome
            ? 'bg-steel-900/95 backdrop-blur-md shadow-deep'
            : 'bg-transparent'
        )}
      >
        <nav 
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className={cn(
              'relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300',
              isScrolled || !isHome ? 'bg-white shadow-chrome' : 'bg-white/90 shadow-lg'
            )}>
              <Image
                src="/photos/LongBarnLogo.jpg"
                alt=""
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className={cn(
              'text-lg font-semibold transition-colors duration-300',
              isScrolled || !isHome 
                ? 'text-white group-hover:text-barn-400' 
                : 'text-white group-hover:text-barn-200'
            )}>
              {siteConfig.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-barn-600 text-white'
                        : isScrolled || !isHome
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2">
              <Link
                href="/quote"
                className="chrome-red px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:shadow-red-glow transition-all"
              >
                Get Quote
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              'md:hidden p-3 rounded-full transition-all',
              isScrolled || !isHome ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10 hover:bg-white/20'
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Chrome accent line */}
        <div className={cn(
          'h-[1px] transition-opacity duration-300',
          isScrolled || !isHome 
            ? 'bg-gradient-to-r from-transparent via-barn-500/50 to-transparent opacity-100' 
            : 'opacity-0'
        )} />
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed top-0 right-0 h-full w-80 bg-steel-900 shadow-deep z-50 transform transition-transform duration-300 ease-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
                <Image
                  src="/photos/LongBarnLogo.jpg"
                  alt=""
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-white font-semibold">Menu</span>
            </div>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1" role="list">
              <li>
                <Link
                  href="/"
                  className={cn(
                    'block px-4 py-4 rounded-xl font-medium transition-all',
                    pathname === '/' ? 'bg-barn-600 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                  )}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-4 rounded-xl font-medium transition-all',
                        isActive ? 'bg-barn-600 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
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

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href="/quote"
              className="chrome-red block text-center px-6 py-4 rounded-xl font-medium"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-white/50 text-sm">
            <p>{siteConfig.address.city}, {siteConfig.address.state}</p>
            <a 
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-20" />}
    </>
  );
}
