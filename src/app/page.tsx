'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const heroSlides = [
  { src: '/photos/1stCut.jpg', alt: '1st Cut Hay Field' },
  { src: '/photos/2ndCut.jpg', alt: '2nd Cut Hay' },
  { src: '/photos/RoundBales.jpg', alt: 'Round Hay Bales' },
];

const galleryImages = [
  { src: '/photos/1stCut.jpg', alt: '1st Cut Hay' },
  { src: '/photos/2ndCut.jpg', alt: '2nd Cut Hay' },
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
            />
          </div>
        ))}

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/70 via-steel-900/40 to-steel-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-barn-900/30 to-transparent" />

        {/* Chrome accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 pb-16">
          {/* Logo */}
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute -inset-1 rounded-full bg-chrome-gradient animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-white shadow-deep overflow-hidden">
              <Image
                src="/photos/LongBarnLogo.jpg"
                alt="Long Barn Hay"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Long Barn Hay
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl">
            Premium 1st and 2nd cut hay from Chester, NH
          </p>

          {/* Sub info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chrome-400" />
              {siteConfig.deliveryLeadTimeDays} Day Lead Time
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-steel-400" />
              Pickup Available
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="chrome-red px-10 py-4 rounded-full text-lg font-semibold hover:shadow-red-glow transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
        className="relative bg-steel-900 py-20 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome-400/30 to-transparent" />
        
        {/* Gallery Controls */}
        <button
          onClick={() => scrollGallery('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full chrome-surface flex items-center justify-center hover:scale-110 transition-transform shadow-deep"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-steel-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scrollGallery('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full chrome-surface flex items-center justify-center hover:scale-110 transition-transform shadow-deep"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-steel-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="flex-shrink-0 w-[400px] aspect-[3/2] relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="relative py-24" style={{ backgroundColor: '#fff6ef' }}>
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 cream-pill mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                About Our Hay
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-earth-700 mb-6 leading-tight">
                Quality Hay for<br />
                <span className="text-barn-600">Every Need</span>
              </h2>
              
              <p className="text-lg text-earth-600 mb-8 leading-relaxed">
                From small hobby farms to large-scale operations, we provide premium 1st and 2nd cut hay 
                in a variety of bale formats. Our hay is harvested from local fields in Chester, NH.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg earth-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-700">Small Squares, Large Rounds, Large Squares</h3>
                    <p className="text-earth-500 text-sm">Multiple bale formats to suit your operation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg copper-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-700">1st and 2nd Cut Available</h3>
                    <p className="text-earth-500 text-sm">Choose based on your animals' nutritional needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg amber-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-700">Flexible Quantities</h3>
                    <p className="text-earth-600 text-sm">From small orders to large loads</p>
                  </div>
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-barn-600 font-semibold hover:text-barn-700 transition-colors"
              >
                View Our Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-copper-500 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 bg-cream-300 rounded-2xl rotate-2" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-deep">
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-chrome-gradient" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-barn-500" />
              Our Products
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">1st Cut vs 2nd Cut</h2>
            <p className="text-steel-400 max-w-2xl mx-auto">
              Understanding the difference helps you choose the right hay for your animals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1st Cut Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-chrome-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-steel-800 rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/photos/1stCutFr.jpeg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-steel-900/80 text-white text-sm font-medium backdrop-blur-sm">
                      First Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">1st Cut Hay</h3>
                  <p className="text-steel-400 mb-6">{siteConfig.hayCuts[0]?.description}</p>
                  <ul className="space-y-2 mb-6">
                    {siteConfig.hayCuts[0]?.characteristics.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-steel-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-chrome-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 chrome-button px-5 py-2.5 rounded-lg text-sm font-medium"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd Cut Card */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-barn-400 to-barn-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-barn-600 rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/photos/2ndCutFr.jpeg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-barn-900/80 text-white text-sm font-medium backdrop-blur-sm">
                      Second Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">2nd Cut Hay</h3>
                  <p className="text-barn-100 mb-6">{siteConfig.hayCuts[1]?.description}</p>
                  <ul className="space-y-2 mb-6">
                    {siteConfig.hayCuts[1]?.characteristics.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-barn-100 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 chrome-button px-5 py-2.5 rounded-lg text-sm font-medium"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative earth-surface-warm py-24">
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-700 mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-earth-500 mb-10 max-w-2xl mx-auto">
            {siteConfig.disclaimers.pricing} Get in touch for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="chrome-red px-10 py-4 rounded-full text-lg font-semibold hover:shadow-red-glow transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="chrome-button px-10 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center"
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
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/15 flex items-center justify-center">
              <svg className="w-7 h-7 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-cream-100 text-lg mb-1">{siteConfig.deliveryLeadTimeDays} Day Lead Time</h3>
            <p className="text-cream-200/80 text-sm">Typical delivery turnaround</p>
          </div>
          <div className="copper-accent p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-1">Pickup Available</h3>
            <p className="text-white/80 text-sm">At our Chester, NH location</p>
          </div>
        </div>
      </section>

    </>
  );
}
