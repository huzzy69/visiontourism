import React from 'react';
import { ShieldCheck, Sparkles, Map, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold-400" />,
      title: 'Fully Licensed Operator',
      description: 'Acclaimed and fully certified under private hire operator licenses, guaranteeing adherence to strict safety standards.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold-400" />,
      title: 'Executive Fleet Comfort',
      description: 'Ride in premium Mercedes-Benz executive minibuses and midi-coaches equipped with leather seats, climate control, and USB ports.',
    },
    {
      icon: <Map className="w-6 h-6 text-brand-gold-400" />,
      title: 'Bespoke Private Routes',
      description: 'Completely customizable road trip speeds, rest stops, and destinations. Work with guides to build your dream schedule.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold-400" />,
      title: 'Direct Operator Value',
      description: 'We own the vehicles and manage the guides directly. No third-party commissions or hidden broker fees.',
    },
  ];

  return (
    <section className="bg-brand-cream-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase">
            Maps Tours Quality
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold mt-2">
            Why Discerning Groups Choose Us
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Rebuilding travel standards across the United Kingdom. We combine transport logistics with historical storytelling to deliver outstanding journeys.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, index) => (
            <div
              key={index}
              className="bg-white border border-brand-cream-300 p-8 rounded-sm hover:shadow-xl hover:border-brand-gold-400/30 transition-all duration-300 flex flex-col items-start text-left hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-green-900 text-brand-gold-400 mb-6">
                {h.icon}
              </div>
              <h3 className="font-serif text-lg text-brand-green-900 font-bold mb-3">
                {h.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
