'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const heroSlides = [
  { src: '/photos/Hero1LBH.jpg', alt: '1st Cut Hay Field' },
  { src: '/photos/Hero2LBH.jpeg', alt: '2nd Cut Hay' },
  { src: '/photos/Hero3LBH.jpeg', alt: 'Round Hay Bales' },
];

const galleryImages = [
  { src: '/photos/Carousel1.jpeg', alt: '1st Cut Hay' },
  { src: '/photos/Carousel2.jpeg', alt: '2nd Cut Hay' },
  { src: '/photos/RoundBales.jpg', alt: 'Round Bales' },
  { src: '/photos/LongBarnWorker.jpg', alt: 'Long Barn Worker' },
  { src: '/photos/LongBarnDeer.jpg', alt: 'Long Barn Deer' },
];

export default function HomePage(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryOffset, setGalleryOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setGalleryOffset((prev) => prev + 0.5);
    }, 30);

    return () => clearInterval(timer);
  }, [isHovered]);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setGalleryOffset((prev) => prev - 200);
    } else {
      setGalleryOffset((prev) => prev + 200);
    }
  };

  return (
    <>
      {/* Hero Section - Full Screen with Carousel */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/70 via-steel-900/40 to-steel-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-barn-900/30 to-transparent" />

        {/* Copper accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper-gradient" />

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 pb-16 text-center">
          {/* Logo */}
          <div className="relative mb-8 h-24 w-24">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-chrome-gradient" />
            <div className="absolute inset-0 overflow-hidden rounded-full bg-white shadow-deep">
              <Image
                src="/photos/LongBarnLogo.jpg"
                alt="Long Barn Hay"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Long Barn Hay
          </h1>

          {/* Tagline */}
          <p className="mb-4 max-w-2xl text-xl text-white/90 md:text-2xl">
            Premium 1st and 2nd cut hay from Chester, NH
          </p>

          {/* Sub info */}
          <div className="mb-10 flex flex-wrap justify-center gap-4 text-white/70">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-chrome-400" />
              {siteConfig.deliveryLeadTimeDays} Day Lead Time
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-steel-400" />
              Pickup Available
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="chrome-red rounded-full px-10 py-4 text-lg font-semibold transition-all hover:shadow-red-glow"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Gallery Strip - Infinite Scroll */}
      <section
        className="relative overflow-hidden bg-steel-900 py-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gallery Controls */}
        <button
          onClick={() => scrollGallery('left')}
          className="chrome-surface absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full shadow-deep transition-transform hover:scale-110"
          aria-label="Scroll left"
        >
          <svg
            className="h-6 w-6 text-steel-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => scrollGallery('right')}
          className="chrome-surface absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full shadow-deep transition-transform hover:scale-110"
          aria-label="Scroll right"
        >
          <svg
            className="h-6 w-6 text-steel-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{ transform: `translateX(-${galleryOffset % (galleryImages.length * 420)}px)` }}
          >
            {[...galleryImages, ...galleryImages, ...galleryImages].map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[3/2] w-[400px] flex-shrink-0 overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#fff6ef' }}>
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Text Content */}
            <div>
              <div className="cream-pill mb-6 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Full-Service Hay
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-espresso-800 lg:text-5xl">
                Your First
                <br />
                <span className="text-barn-600">Full-Service Hay Specialists</span>
              </h2>

              <p className="mb-4 text-lg leading-relaxed text-earth-600">
                Come pick up on site or enjoy our special hands-free services. Place your order and
                that's it! We deliver, unload, and stack the hay for you.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-earth-600">
                Whether it's ground level or in a loft, we've got you covered.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="earth-accent flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso-800">On-Site Pickup</h3>
                    <p className="text-sm text-espresso-600">
                      Come grab your hay directly from our Chester, NH location
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="copper-accent flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="h-5 w-5 text-white"
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
                    <h3 className="font-semibold text-espresso-800">Delivery, Unload & Stack</h3>
                    <p className="text-sm text-espresso-600">
                      Our hands-free service does all the heavy lifting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="amber-accent flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="h-5 w-5 text-amber-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso-800">Ground Level or Loft</h3>
                    <p className="text-sm text-espresso-600">
                      We stack wherever you need it — no extra hassle
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-semibold text-barn-600 transition-colors hover:text-barn-700"
              >
                View Our Products
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 -rotate-3 rounded-2xl bg-copper-500" />
              <div className="absolute -inset-4 rotate-2 rounded-2xl bg-cream-300" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-deep">
                <Image
                  src="/photos/RoundBales.jpg"
                  alt="Hay bales at Long Barn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Hay Cuts */}
      <section className="relative bg-steel-900 py-24">
        <div className="absolute left-0 right-0 top-0 h-1 bg-chrome-gradient" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-barn-500" />
              Our Products
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">1st Cut vs 2nd Cut</h2>
            <p className="mx-auto max-w-2xl text-steel-400">
              Understanding the difference helps you choose the right hay for your animals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* 1st Cut Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-chrome-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl bg-steel-800">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/photos/1stCutFr.jpeg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-steel-900/80 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                      First Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white">1st Cut Hay</h3>
                  <p className="mb-6 text-steel-400">{siteConfig.hayCuts[0]?.description}</p>
                  <ul className="mb-6 space-y-2">
                    {siteConfig.hayCuts[0]?.characteristics.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-steel-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-chrome-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="chrome-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
                  >
                    Learn More
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

            {/* 2nd Cut Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-barn-400 to-barn-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl bg-barn-600">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/photos/2ndCutFr.jpeg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-barn-900/80 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                      Second Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white">2nd Cut Hay</h3>
                  <p className="mb-6 text-barn-100">{siteConfig.hayCuts[1]?.description}</p>
                  <ul className="mb-6 space-y-2">
                    {siteConfig.hayCuts[1]?.characteristics.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-barn-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="chrome-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
                  >
                    Learn More
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="earth-surface-warm relative py-24">
        <div className="earth-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-espresso-800 lg:text-5xl">Ready to Order?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-espresso-600">
            {siteConfig.disclaimers.pricing} Get in touch for a personalized quote.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="chrome-red inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold transition-all hover:shadow-red-glow"
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/products"
              className="chrome-button inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Service Info Strip */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 text-center" style={{ backgroundColor: '#664930' }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <svg
                className="h-7 w-7 text-cream-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-cream-100">
              {siteConfig.deliveryLeadTimeDays} Day Lead Time
            </h3>
            <p className="text-sm text-cream-200/80">Typical delivery turnaround</p>
          </div>
          <div className="copper-accent p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-lg font-bold text-white">Pickup Available</h3>
            <p className="text-sm text-white/80">At our Chester, NH location</p>
          </div>
        </div>
      </section>
    </>
  );
}
