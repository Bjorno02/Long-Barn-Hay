import type { Metadata } from 'next';
import { RadiusChecker } from '@/components/forms';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Delivery',
};

export default function DeliveryPage(): JSX.Element {
  return (
    <>
      {/* Header: Grey with chrome */}
      <section className="relative bg-steel-800 text-white pt-16 pb-32 overflow-hidden">
        {/* Chrome accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-32"
          style={{ 
            background: 'linear-gradient(135deg, rgba(212,212,216,0.1) 0%, transparent 100%)',
            clipPath: 'polygon(0 100%, 80% 0, 100% 100%, 0 100%)' 
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="chrome-pill inline-block mb-4">Service Area</div>
          <h1 className="text-5xl font-bold mb-3">Delivery</h1>
          <p className="text-steel-300 max-w-xl text-lg">
            We deliver within {siteConfig.radiusMiles} miles of {siteConfig.address.city}, {siteConfig.address.state}.
          </p>
        </div>
      </section>

      {/* Radius Checker: Chrome framed */}
      <section className="relative -mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checker with chrome frame */}
            <div className="relative">
              {/* Chrome frame */}
              <div className="absolute -inset-[4px] rounded-2xl bg-chrome-gradient" />
              <div className="absolute -inset-[3px] rounded-2xl bg-barn-600" />
              <div className="relative">
                <RadiusChecker />
              </div>
            </div>

            {/* Info with chrome card */}
            <div className="chrome-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-steel-900 mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <Step number={1} title="Enter Address" description="Enter your full address to check if you are within our delivery radius." />
                <div className="chrome-divider" />
                <Step number={2} title="Get Results" description="We calculate straight-line distance from our location in Chester, NH." />
                <div className="chrome-divider" />
                <Step number={3} title="Request Quote" description="If in range, request a quote. Out of range? Contact us to discuss options." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards: Chrome styled */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Chrome frame around all cards */}
          <div className="relative">
            <div className="absolute -inset-[3px] rounded-2xl bg-chrome-gradient" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden">
              <InfoCard
                icon={<ClockIcon />}
                title="Lead Time"
                description={`${siteConfig.deliveryLeadTimeDays} days typical`}
                detail="May vary by location and demand"
                variant="chrome"
              />
              <InfoCard
                icon={<LocationIcon />}
                title="Pickup"
                description={siteConfig.address.street}
                detail={`${siteConfig.address.city}, ${siteConfig.address.state}`}
                variant="red"
              />
              <InfoCard
                icon={<MapIcon />}
                title="Radius"
                description={`${siteConfig.radiusMiles} miles`}
                detail="Straight-line distance"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }): JSX.Element {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full chrome-red flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-steel-900">{title}</h3>
        <p className="text-steel-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description, detail, variant }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  variant: 'chrome' | 'red' | 'dark';
}): JSX.Element {
  const styles = {
    chrome: {
      bg: 'chrome-surface',
      text: 'text-steel-900',
      subtext: 'text-steel-500',
      iconBg: 'bg-steel-200 text-barn-600',
    },
    red: {
      bg: 'chrome-red',
      text: 'text-white',
      subtext: 'text-barn-100',
      iconBg: 'bg-white/20 text-white',
    },
    dark: {
      bg: 'chrome-surface-dark',
      text: 'text-white',
      subtext: 'text-steel-400',
      iconBg: 'bg-white/10 text-white',
    },
  };
  
  const s = styles[variant];
  
  return (
    <div className={`${s.bg} ${s.text} p-8`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${s.iconBg}`}>
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-2xl font-bold mb-1">{description}</p>
      <p className={`text-sm ${s.subtext}`}>{detail}</p>
    </div>
  );
}

function ClockIcon(): JSX.Element {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationIcon(): JSX.Element {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MapIcon(): JSX.Element {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}
