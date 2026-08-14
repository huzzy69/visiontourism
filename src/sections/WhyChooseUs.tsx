import React from 'react';
import { ShieldCheck, Sparkles, Map, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'Fully Licensed Operator',
      description: 'Fully accredited under London Private Hire regulations, guaranteeing compliance with UK safety standards.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: 'Executive Fleet Comfort',
      description: 'Ride in executive Mercedes-Benz Sprinter minibuses and coaches with reclining leather seats, climate control, and USB chargers.',
    },
    {
      icon: <Map className="w-6 h-6 text-white" />,
      title: 'Bespoke Private Routes',
      description: 'Tailor your road trip speeds, rest stops, and stops. Work with personal driver-guides to build your ideal itinerary.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
      title: 'Direct Operator Value',
      description: 'We own our vehicle fleet and manage local guides directly. No third-party agent commissions or hidden broker fees.',
    },
  ];

  return (
    <section className="bg-brand-neutral-100 py-20 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
            Vision Tourism Quality
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-blue-900 font-extrabold">
            Why Discerning Groups Choose Us
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Rebuilding UK travel standards. We combine professional minibus logistics with rich British storytelling for outstanding journeys.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-8 rounded shadow-sm hover:shadow-md hover:border-brand-red-600/40 transition-all duration-300 flex flex-col items-start text-left hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded bg-brand-blue-900 text-white mb-6">
                {h.icon}
              </div>
              <h3 className="font-serif text-lg text-brand-blue-900 font-bold mb-2.5">
                {h.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
