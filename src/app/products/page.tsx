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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/1stCut.jpg"
            alt="Quality Hay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-barn-900/80 via-barn-900/60 to-barn-900/90" />
        </div>

        {/* Chrome accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-chrome-gradient" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            What We Offer
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Quality 1st and 2nd cut hay available in multiple bale formats.
            {' '}{siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Hay Cuts Section */}
      <section className="earth-surface py-24">
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="cream-pill inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Hay Types
            </div>
            <h2 className="text-3xl font-bold text-earth-700">1st Cut vs 2nd Cut</h2>
          </div>

          {/* 1st Cut - Full Width Card */}
          <div className="mb-12">
            <div className="group relative rounded-3xl overflow-hidden shadow-deep">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                  <Image
                    src="/photos/1stCutFr.jpeg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-earth-600/90 text-white text-sm font-medium backdrop-blur-sm">
                      First Harvest
                    </span>
                  </div>
                </div>
                {/* Content Side */}
                <div className="bg-white p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-earth-700 mb-4">1st Cut Hay</h3>
                  <p className="text-earth-500 mb-8 leading-relaxed">{siteConfig.hayCuts[0]?.fullDescription}</p>
                  
                  <h4 className="font-semibold text-earth-700 mb-4">Best For</h4>
                  <ul className="space-y-3 mb-8">
                    {siteConfig.hayCuts[0]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-earth-500">
                        <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="copper-accent px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 w-fit hover:opacity-90 transition-opacity"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Cut - Full Width Card (reversed) */}
          <div>
            <div className="group relative rounded-3xl overflow-hidden shadow-deep">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="bg-barn-600 p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <h3 className="text-3xl font-bold text-white mb-4">2nd Cut Hay</h3>
                  <p className="text-barn-100 mb-8 leading-relaxed">{siteConfig.hayCuts[1]?.fullDescription}</p>
                  
                  <h4 className="font-semibold text-white mb-4">Best For</h4>
                  <ul className="space-y-3 mb-8">
                    {siteConfig.hayCuts[1]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-barn-100">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="bg-white text-barn-700 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 w-fit hover:bg-barn-50 transition-colors"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                {/* Image Side */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] order-1 lg:order-2">
                  <Image
                    src="/photos/2ndCutFr.jpeg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 rounded-full bg-barn-700/90 text-white text-sm font-medium backdrop-blur-sm">
                      Second Harvest
                    </span>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-chrome-400" />
              Bale Options
            </div>
            <h2 className="text-3xl font-bold text-white">Available Formats</h2>
            <p className="text-steel-400 mt-3">All formats available in 1st and 2nd cut</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  index === 0 
                    ? 'bg-earth-300' 
                    : index === 1 
                      ? 'bg-white/20' 
                      : 'bg-white/15'
                }`}>
                  {index === 0 && (
                    <svg className="w-10 h-10 text-earth-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  index === 0 ? 'text-earth-700' : 'text-white'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-sm mb-6 ${
                  index === 0 ? 'text-earth-600' : 'text-white/80'
                }`}>
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
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        index === 0 ? 'bg-copper-500' : 'bg-white/50'
                      }`} />
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
        <div className="absolute top-0 left-0 right-0 earth-divider" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-earth-900 mb-4">Pricing Information</h2>
          <p className="text-earth-700 mb-8">
            {siteConfig.disclaimers.pricing}
          </p>
          <Link
            href="/contact"
            className="chrome-red px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-red-glow transition-all"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
