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
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
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

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-barn-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white" />
            What We Offer
          </div>
          <h1 className="mb-4 text-5xl font-bold text-barn-700 md:text-6xl">Our Products</h1>
          <p className="mx-auto max-w-2xl text-xl text-barn-600">
            Quality 1st and 2nd cut hay available in multiple bale formats.{' '}
            {siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Hay Cuts Section */}
      <section className="relative overflow-hidden bg-earth-300 py-24">
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="cream-pill mb-4 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Hay Types
            </div>
            <h2 className="text-3xl font-bold text-espresso-900">1st Cut vs 2nd Cut</h2>
          </div>

          {/* Cards Container */}
          <div className="rounded-3xl bg-cream-100/70 p-8 shadow-lg backdrop-blur-sm lg:p-12">
            {/* 1st Cut - Full Width Card */}
            <div className="mb-12">
              <div className="group relative overflow-hidden rounded-3xl shadow-deep">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
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
                  <div className="flex flex-col justify-center bg-white p-10 lg:p-12">
                    <h3 className="mb-4 text-3xl font-bold text-espresso-900">1st Cut Hay</h3>
                    <p className="mb-8 leading-relaxed text-espresso-800">
                      {siteConfig.hayCuts[0]?.fullDescription}
                    </p>

                    <h4 className="mb-4 font-semibold text-espresso-800">Best For</h4>
                    <ul className="mb-8 space-y-3">
                      {siteConfig.hayCuts[0]?.characteristics.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-espresso-700">
                          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
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
                      className="copper-accent inline-flex w-fit items-center gap-2 rounded-full px-8 py-4 font-semibold transition-opacity hover:opacity-90"
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
              <div className="group relative overflow-hidden rounded-3xl shadow-deep">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="order-2 flex flex-col justify-center bg-barn-600 p-10 lg:order-1 lg:p-12">
                    <h3 className="mb-4 text-3xl font-bold text-white">2nd Cut Hay</h3>
                    <p className="mb-8 leading-relaxed text-barn-100">
                      {siteConfig.hayCuts[1]?.fullDescription}
                    </p>

                    <h4 className="mb-4 font-semibold text-white">Best For</h4>
                    <ul className="mb-8 space-y-3">
                      {siteConfig.hayCuts[1]?.characteristics.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-barn-100">
                          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
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
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-barn-700 transition-colors hover:bg-barn-50"
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
                  <div className="relative order-1 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[500px]">
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
      <section className="bg-steel-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-chrome-400" />
              Bale Options
            </div>
            <h2 className="text-3xl font-bold text-white">Available Formats</h2>
            <p className="mt-3 text-steel-400">All formats available in 1st and 2nd cut</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteConfig.products.map((product, index) => (
              <div
                key={product.id}
                className={`rounded-2xl p-8 text-center ${
                  index === 0
                    ? 'earth-surface-warm'
                    : index === 1
                      ? 'amber-accent'
                      : 'copper-accent'
                }`}
              >
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${
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
                  className={`mb-2 text-xl font-bold ${
                    index === 0 ? 'text-earth-700' : 'text-white'
                  }`}
                >
                  {product.name}
                </h3>

                <p className={`mb-6 text-sm ${index === 0 ? 'text-earth-600' : 'text-white/80'}`}>
                  {product.description}
                </p>

                <ul className="space-y-2 text-sm">
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
      <section className="earth-surface-warm py-16">
        <div className="earth-divider absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-earth-900">Pricing Information</h2>
          <p className="mb-8 text-earth-700">{siteConfig.disclaimers.pricing}</p>
          <Link
            href="/contact"
            className="chrome-red inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition-all hover:shadow-red-glow"
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
