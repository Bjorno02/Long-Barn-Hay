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
      {/* Header: Red with chrome accents */}
      <section className="relative bg-barn-600 text-white pt-16 pb-32 overflow-hidden">
        {/* Chrome diagonal accent */}
        <div className="absolute bottom-0 right-0 w-2/3 h-32"
          style={{ 
            background: 'linear-gradient(135deg, transparent 0%, rgba(212,212,216,0.1) 50%, transparent 100%)',
            clipPath: 'polygon(20% 100%, 100% 0, 100% 100%, 0 100%)' 
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="chrome-pill-dark inline-block mb-4">What We Offer</div>
          <h1 className="text-5xl font-bold mb-3">Products</h1>
          <p className="text-barn-100 max-w-xl text-lg">
            Quality hay available in 1st and 2nd cut. {siteConfig.disclaimers.pricing}
          </p>
        </div>
      </section>

      {/* Hay Cuts: Full-bleed split */}
      <section className="relative -mt-16">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1st Cut */}
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-2xl bg-chrome-gradient" />
              <div className="relative bg-steel-800 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/photos/1stCut.jpg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="chrome-pill text-xs mb-2">First Harvest</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-3">1st Cut Hay</h2>
                  <p className="text-steel-300 mb-4">{siteConfig.hayCuts[0]?.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {siteConfig.hayCuts[0]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-steel-300">
                        <span className="w-1.5 h-1.5 bg-chrome-400 rounded-full mt-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className="chrome-button px-5 py-2.5 rounded-lg text-sm inline-flex items-center gap-2"
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
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-barn-400 via-barn-600 to-barn-400" />
              <div className="relative bg-barn-600 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/photos/2ndCut.jpg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barn-700/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="chrome-pill text-xs mb-2">Second Harvest</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-3">2nd Cut Hay</h2>
                  <p className="text-barn-100 mb-4">{siteConfig.hayCuts[1]?.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {siteConfig.hayCuts[1]?.characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-barn-100">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className="chrome-button px-5 py-2.5 rounded-lg text-sm inline-flex items-center gap-2"
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

      {/* Chrome divider */}
      <div className="h-2 chrome-surface" />

      {/* Bale Types Info */}
      <section className="bg-steel-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="chrome-pill inline-block mb-4">Bale Options</div>
            <h2 className="text-3xl font-bold text-steel-900">Available Formats</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="chrome-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 chrome-surface rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-steel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-steel-900 mb-2">Small Squares</h3>
              <p className="text-steel-600 text-sm">Traditional rectangular bales, easy to handle</p>
            </div>
            
            <div className="chrome-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 chrome-red rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-steel-900 mb-2">Large Rounds</h3>
              <p className="text-steel-600 text-sm">Efficient for larger operations</p>
            </div>
            
            <div className="chrome-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 chrome-surface-dark rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="font-semibold text-steel-900 mb-2">Large Squares</h3>
              <p className="text-steel-600 text-sm">High-density, stackable bales</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
