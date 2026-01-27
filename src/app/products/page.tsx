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
      <section className="bg-steel-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-barn-600/10 text-barn-600 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-barn-500" />
              Hay Types
            </div>
            <h2 className="text-3xl font-bold text-steel-900">1st Cut vs 2nd Cut</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1st Cut */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-chrome-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-chrome">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/photos/1stCut.jpg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-steel-900/80 text-white text-sm font-medium backdrop-blur-sm">
                      First Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-steel-900 mb-3">1st Cut Hay</h3>
                  <p className="text-steel-600 mb-6">{siteConfig.hayCuts[0]?.description}</p>
                  
                  <h4 className="font-semibold text-steel-900 mb-3">Characteristics</h4>
                  <ul className="space-y-2 mb-8">
                    {siteConfig.hayCuts[0]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-steel-600">
                        <span className="w-5 h-5 rounded-full chrome-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-steel-400" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className="chrome-button px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                  >
                    Request Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2nd Cut */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-barn-400 to-barn-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-barn-600 rounded-2xl overflow-hidden shadow-deep">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/photos/2ndCut.jpg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barn-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-barn-900/80 text-white text-sm font-medium backdrop-blur-sm">
                      Second Harvest
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">2nd Cut Hay</h3>
                  <p className="text-barn-100 mb-6">{siteConfig.hayCuts[1]?.description}</p>
                  
                  <h4 className="font-semibold text-white mb-3">Characteristics</h4>
                  <ul className="space-y-2 mb-8">
                    {siteConfig.hayCuts[1]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-barn-100">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className="chrome-button px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                  >
                    Request Quote
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
                    ? 'chrome-surface' 
                    : index === 1 
                      ? 'chrome-red' 
                      : 'chrome-surface-dark'
                }`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  index === 0 
                    ? 'bg-steel-200' 
                    : index === 1 
                      ? 'bg-white/20' 
                      : 'bg-white/10'
                }`}>
                  {index === 0 && (
                    <svg className="w-10 h-10 text-barn-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  index === 0 ? 'text-steel-900' : 'text-white'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-sm mb-6 ${
                  index === 0 ? 'text-steel-600' : index === 1 ? 'text-white/80' : 'text-steel-400'
                }`}>
                  {product.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {product.features.map((feature, i) => (
                    <li 
                      key={i}
                      className={`flex items-center justify-center gap-2 ${
                        index === 0 ? 'text-steel-600' : index === 1 ? 'text-white/80' : 'text-steel-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        index === 0 ? 'bg-barn-500' : 'bg-white/50'
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
      <section className="chrome-surface py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Pricing Information</h2>
          <p className="text-steel-600 mb-8">
            {siteConfig.disclaimers.pricing}
          </p>
          <Link
            href="/quote"
            className="chrome-red px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-red-glow transition-all"
          >
            Request a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
