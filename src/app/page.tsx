import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[95vh] overflow-hidden bg-steel-100">
        <div className="absolute top-0 left-0 w-[70%] h-[85%] bg-barn-600">
          <div className="absolute top-0 right-0 bottom-0 w-[6px] bg-chrome-gradient" />
        </div>
        
        <div className="absolute bottom-0 right-0 w-[55%] h-[60%] bg-steel-800">
          <div className="absolute top-0 left-0 right-0 h-[6px] bg-chrome-gradient" />
          <div className="absolute top-0 left-0 bottom-0 w-[6px] bg-chrome-gradient" />
        </div>
        
        <div className="absolute top-[15%] right-[8%] w-32 h-32 chrome-surface shadow-deep" />

        <div className="relative max-w-7xl mx-auto px-6 min-h-[95vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full py-16">
            <div className="lg:col-span-5 z-10">
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute -inset-[4px] rounded-full bg-chrome-gradient" />
                <div className="absolute inset-0 rounded-full bg-white shadow-deep overflow-hidden">
                  <Image
                    src="/photos/LongBarnLogo.jpg"
                    alt="Long Barn Hay"
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
                Long Barn<br />Hay
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-md">
                Premium 1st and 2nd cut hay from Chester, NH.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="group relative">
                  <div className="absolute -inset-[2px] rounded-lg bg-chrome-gradient" />
                  <span className="relative bg-white text-barn-600 px-7 py-3.5 rounded-lg font-semibold inline-block hover:bg-steel-50 transition-colors">
                    Get a Quote
                  </span>
                </Link>
                <Link
                  href="/delivery"
                  className="chrome-surface-dark px-7 py-3.5 rounded-lg font-semibold text-white"
                >
                  Check Delivery
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex items-end lg:items-center justify-end z-10">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-[4px] rounded-2xl bg-chrome-gradient" />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-deep">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-barn-500" />
                    <div className="w-3 h-3 rounded-full bg-steel-400" />
                    <div className="w-3 h-3 rounded-full chrome-surface" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-steel-900 mb-5">Quick Info</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-steel-50">
                      <div className="w-11 h-11 rounded-lg chrome-red flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-steel-900">50 Mile Delivery</p>
                        <p className="text-sm text-steel-500">From Chester, NH</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-steel-50">
                      <div className="w-11 h-11 rounded-lg chrome-surface-dark flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-steel-900">{siteConfig.deliveryLeadTimeDays} Day Lead Time</p>
                        <p className="text-sm text-steel-500">Typical turnaround</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-steel-50">
                      <div className="w-11 h-11 rounded-lg chrome-surface flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-steel-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-steel-900">Pickup Available</p>
                        <p className="text-sm text-steel-500">At our location</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chrome-divider my-5" />
                  
                  <Link 
                    href="/delivery" 
                    className="text-barn-600 font-medium hover:text-barn-700 inline-flex items-center gap-2 text-sm"
                  >
                    Check your delivery range
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

      <div className="h-2 chrome-surface" />

      {/* Products */}
      <section className="relative bg-steel-900 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="chrome-pill inline-block mb-4">Our Products</div>
            <h2 className="text-4xl font-bold text-white mb-3">Quality Hay</h2>
            <p className="text-steel-400">Available in 1st and 2nd cut</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute -inset-[3px] rounded-2xl bg-chrome-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-steel-800 rounded-2xl overflow-hidden transition-transform group-hover:-translate-y-1">
                <div className="aspect-[21/9] relative">
                  <Image
                    src="/photos/1stCut.jpg"
                    alt="1st Cut Hay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="chrome-pill text-xs">First Harvest</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">1st Cut Hay</h3>
                  <p className="text-steel-400 mb-4">
                    {siteConfig.hayCuts[0]?.description}
                  </p>
                  
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 text-sm font-medium chrome-button px-4 py-2 rounded-lg"
                  >
                    Get quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-barn-400 via-barn-500 to-barn-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-barn-600 rounded-2xl overflow-hidden transition-transform group-hover:-translate-y-1">
                <div className="aspect-[21/9] relative">
                  <Image
                    src="/photos/2ndCut.jpg"
                    alt="2nd Cut Hay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="chrome-pill text-xs">Second Harvest</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2nd Cut Hay</h3>
                  <p className="text-barn-100 mb-4">
                    {siteConfig.hayCuts[1]?.description}
                  </p>
                  
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 text-sm font-medium chrome-button px-4 py-2 rounded-lg"
                  >
                    Get quote
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

      <div className="h-1 bg-chrome-horizontal" />

      {/* Features */}
      <section className="relative bg-steel-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-[4px] rounded-2xl bg-chrome-gradient" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/photos/RoundBales.jpg"
                  alt="Round hay bales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="chrome-pill inline-block mb-4">Why Choose Us</div>
              <h2 className="text-4xl font-bold text-steel-900 mb-6">
                Local Quality Hay
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded chrome-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-700">Small squares, large rounds, and large squares available</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded chrome-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-700">Delivery within {siteConfig.radiusMiles} miles of Chester, NH</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded chrome-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-700">Pickup option available at our location</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded chrome-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-steel-700">Flexible quantities from small to large orders</span>
                </li>
              </ul>
              <Link
                href="/quote"
                className="chrome-red px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:shadow-red-glow transition-shadow"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-steel-900">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="chrome-pill inline-block mb-6">Get Started</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to order?
              </h2>
              <p className="text-steel-400 text-lg mb-8 max-w-md">
                {siteConfig.disclaimers.pricing} We respond within 1-2 business days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="chrome-red px-8 py-4 rounded-lg font-medium hover:shadow-red-glow transition-shadow"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="chrome-button px-8 py-4 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-barn-600" />
                <div className="absolute inset-4 rounded-full chrome-surface" />
                <div className="absolute inset-8 rounded-full bg-steel-800" />
                <div className="absolute inset-12 rounded-full chrome-surface-dark flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">50</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 chrome-pill text-xs">
                  mile radius
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BeSide */}
      <section className="relative h-16 chrome-surface-dark">
        <div className="absolute inset-x-0 top-0 chrome-line" />
        <div className="absolute inset-x-0 bottom-0 chrome-line" />
        <div className="relative h-full flex items-center justify-center">
          <span className="text-steel-500 text-xs tracking-widest uppercase">BeSide — internal process tool</span>
        </div>
      </section>
    </>
  );
}
