'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const STORAGE_KEY = 'lbh-relocation-announcement-v1';

export function RelocationAnnouncement(): JSX.Element | null {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen = true;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      // localStorage unavailable (private mode) — show once per visit
      seen = false;
    }
    if (seen) return;

    const showTimer = window.setTimeout(() => {
      setOpen(true);
      window.requestAnimationFrame(() => setVisible(true));
    }, 700);
    return () => window.clearTimeout(showTimer);
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // ignore — popup simply reappears next visit
    }
    setVisible(false);
    window.setTimeout(() => setOpen(false), 300);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, dismiss]);

  if (!open) return null;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address.fullAddress
  )}`;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="relocation-announcement-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close announcement"
        onClick={dismiss}
        className="absolute inset-0 cursor-default bg-espresso-900/70 backdrop-blur-sm"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl shadow-deep transition-transform duration-300 ${
          visible ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Header */}
        <div className="copper-accent relative px-6 pb-5 pt-6 text-center sm:px-8">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close announcement"
            className="absolute right-3 top-3 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="amber-accent mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2
            id="relocation-announcement-title"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            We&apos;ve Moved!
          </h2>
        </div>

        <div className="earth-divider" />

        {/* Body */}
        <div className="earth-surface-warm px-6 py-6 text-center sm:px-8">
          <p className="mb-5 text-sm text-espresso-700 sm:text-base">
            We&apos;ve moved to a new spot in Raymond. Same hay, same delivery and pickup services,
            same friendly faces. Come see us at the new place!
          </p>

          <div className="mb-6">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-espresso-400">
              Formerly
            </p>
            <p className="mb-3 text-sm text-espresso-500 line-through decoration-espresso-300">
              {siteConfig.previousAddress}
            </p>
            <svg
              className="mx-auto mb-3 h-5 w-5 text-copper-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <div className="mx-auto w-fit rounded-xl bg-white px-5 py-3 shadow-chrome">
              <p className="flex items-center gap-2 text-base font-bold text-espresso-900">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-barn-600"
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
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.zipCode}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="chrome-red inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-shadow hover:shadow-red-glow"
            >
              Get Directions
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex items-center justify-center rounded-full border border-earth-300 bg-white/60 px-6 py-2.5 text-sm font-medium text-espresso-700 transition-colors hover:bg-white"
            >
              Got it, thanks!
            </button>
          </div>
        </div>

        {/* Alfalfa note */}
        <div className="earth-surface-dark px-6 py-3.5 text-center sm:px-8">
          <p className="text-sm text-cream-200">
            (we also sell{' '}
            <Link
              href="/products#alfalfa"
              onClick={dismiss}
              className="font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-2 transition-colors hover:text-amber-200"
            >
              Alfalfa
            </Link>{' '}
            now)
          </p>
        </div>
      </div>
    </div>
  );
}
