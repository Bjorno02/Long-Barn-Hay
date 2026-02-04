'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CarouselSlide {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export function ImageCarousel({ 
  slides, 
  autoPlayInterval = 5000,
  className 
}: ImageCarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentIndex, slides.length, goToSlide]);

  const goToPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentIndex, slides.length, goToSlide]);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval, slides.length]);

  if (slides.length === 0) return <div className={className} />;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
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

      {slides.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full chrome-surface-dark flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full chrome-surface-dark flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300',
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
