import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Products',
};

export default function ProductsPage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden sm:min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/Carousel3.WEBP"
            alt="Quality Hay"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Copper accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper-gradient" />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/70 via-cream-100/50 to-cream-100/70 sm:from-transparent sm:via-transparent sm:to-transparent" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-32">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-barn-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-white" />
            What We Offer
          </div>
          <h1 className="mb-3 text-4xl font-bold text-barn-700 drop-shadow-sm sm:mb-4 sm:text-5xl sm:drop-shadow-none md:text-6xl">
            Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-base text-barn-700 sm:text-xl sm:text-barn-600">
            Quality 1st and 2nd cut hay available in multiple bale formats.{' '}
            {siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Hay Cuts Section */}
      <section className="relative overflow-hidden bg-earth-300 py-16 sm:py-24">
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-16">
            <div className="cream-pill mb-3 inline-flex items-center gap-2 sm:mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Hay Types
            </div>
            <h2 className="text-2xl font-bold text-espresso-900 sm:text-3xl">1st Cut vs 2nd Cut</h2>
          </div>

          {/* Cards Container */}
          <div className="rounded-2xl bg-cream-100/70 p-4 shadow-lg backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-12">
            {/* 1st Cut - Full Width Card */}
            <div className="mb-8 sm:mb-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-deep sm:rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                    <Image
                      src="/photos/1stCutFr.jpeg"
                      alt="1st Cut Hay"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full bg-earth-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        First Harvest
                      </span>
                    </div>
                  </div>
                  {/* Content Side */}
                  <div className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:p-12">
                    <h3 className="mb-3 text-2xl font-bold text-espresso-900 sm:mb-4 sm:text-3xl">
                      1st Cut Hay
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-espresso-800 sm:mb-8 sm:text-base">
                      {siteConfig.hayCuts[0]?.fullDescription}
                    </p>

                    <h4 className="mb-3 text-sm font-semibold text-espresso-800 sm:mb-4 sm:text-base">
                      Best For
                    </h4>
                    <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
                      {siteConfig.hayCuts[0]?.characteristics.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-espresso-700 sm:gap-3 sm:text-base"
                        >
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:h-6 sm:w-6">
                            <svg
                              className="h-3.5 w-3.5 text-amber-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="copper-accent inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
                    >
                      Contact Us
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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

            {/* 2nd Cut - Full Width Card (reversed) */}
            <div>
              <div className="group relative overflow-hidden rounded-2xl shadow-deep sm:rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="order-2 flex flex-col justify-center bg-barn-600 p-6 sm:p-10 lg:order-1 lg:p-12">
                    <h3 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                      2nd Cut Hay
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-barn-100 sm:mb-8 sm:text-base">
                      {siteConfig.hayCuts[1]?.fullDescription}
                    </p>

                    <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base">
                      Best For
                    </h4>
                    <ul className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
                      {siteConfig.hayCuts[1]?.characteristics.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-barn-100 sm:gap-3 sm:text-base"
                        >
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-6 sm:w-6">
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-barn-700 transition-colors hover:bg-barn-50 sm:px-8 sm:py-4 sm:text-base"
                    >
                      Contact Us
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                  {/* Image Side */}
                  <div className="relative order-1 aspect-[16/10] sm:aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[500px]">
                    <Image
                      src="/photos/2ndCutFr.jpeg"
                      alt="2nd Cut Hay"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-6 top-6">
                      <span className="rounded-full bg-barn-700/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        Second Harvest
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome Divider */}
      <div className="h-1 bg-chrome-gradient" />

      {/* Bale Types Section */}
      <section className="bg-steel-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-16">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 sm:mb-4">
              <span className="h-2 w-2 rounded-full bg-chrome-400" />
              Bale Options
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Available Formats</h2>
            <p className="mt-2 text-sm text-steel-400 sm:mt-3 sm:text-base">
              All formats available in 1st and 2nd cut
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {siteConfig.products.map((product, index) => (
              <div
                key={product.id}
                className={`rounded-xl p-6 text-center sm:rounded-2xl sm:p-8 ${
                  index === 0
                    ? 'earth-surface-warm'
                    : index === 1
                      ? 'amber-accent'
                      : 'copper-accent'
                }`}
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl sm:mb-6 sm:h-20 sm:w-20 sm:rounded-2xl ${
                    index === 0 ? 'bg-earth-300' : index === 1 ? 'bg-white/20' : 'bg-white/15'
                  }`}
                >
                  {index === 0 && (
                    <svg
                      className="h-10 w-10 text-earth-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </div>

                <h3
                  className={`mb-2 text-lg font-bold sm:text-xl ${
                    index === 0 ? 'text-earth-700' : 'text-white'
                  }`}
                >
                  {product.name}
                </h3>

                <p
                  className={`mb-4 text-sm sm:mb-6 ${index === 0 ? 'text-earth-600' : 'text-white/80'}`}
                >
                  {product.description}
                </p>

                <ul className="space-y-1.5 text-sm sm:space-y-2">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center gap-2 ${
                        index === 0 ? 'text-earth-600' : 'text-white/80'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index === 0 ? 'bg-copper-500' : 'bg-white/50'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="earth-surface-warm py-12 sm:py-16">
        <div className="earth-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-xl font-bold text-earth-900 sm:mb-4 sm:text-2xl">
            Pricing Information
          </h2>
          <p className="mb-6 text-sm text-earth-700 sm:mb-8 sm:text-base">
            {siteConfig.disclaimers.pricing}
          </p>
          <Link
            href="/contact"
            className="chrome-red inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:shadow-red-glow sm:px-8 sm:py-4 sm:text-base"
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
        </div>
      </section>
    </>
  );
}
