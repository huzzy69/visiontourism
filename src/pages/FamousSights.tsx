import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { destinations } from '../data/destinations';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FamousSights: React.FC = () => {
  const [filterRegion, setFilterRegion] = useState<'All' | 'England' | 'Scotland'>('All');

  const filteredDestinations = destinations.filter((dest) => {
    if (filterRegion === 'All') return true;
    return dest.region === filterRegion;
  });

  return (
    <div className="pt-20 pb-16">
      <PageHeader
        title="Famous UK Destinations"
        subtitle="Journey through iconic British landscapes, medieval monuments, historic capitals, and tranquil rolling valleys."
        bgImageUrl="https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1600&auto=format&fit=crop"
        breadcrumbs={[{ name: 'Famous Sights' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Region Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {(['All', 'England', 'Scotland'] as const).map((region) => (
            <button
              key={region}
              onClick={() => setFilterRegion(region)}
              className={`px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filterRegion === region
                  ? 'bg-brand-green-900 text-white shadow-md'
                  : 'bg-brand-cream-200 text-brand-green-900/80 hover:bg-brand-cream-300'
              }`}
            >
              {region} {region !== 'All' ? 'Destinations' : ''}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-brand-cream-300 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Aspect */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-green-900/90 text-brand-gold-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm backdrop-blur-sm border border-brand-gold-400/20">
                  {dest.region}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl text-brand-green-900 font-bold mb-3">
                  {dest.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {dest.description}
                </p>

                {/* Highlights List */}
                <div className="border-t border-brand-cream-200 pt-5 mt-auto">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-brand-gold-400" />
                    Must-See Landmarks
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {dest.highlights.map((h, index) => (
                      <span
                        key={index}
                        className="bg-brand-cream-200 text-brand-green-900/90 text-[10px] font-semibold px-2.5 py-1 rounded-sm border border-brand-cream-300"
                      >
                        {h}
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Custom CTA Bar */}
        <div className="mt-16 bg-brand-green-900 text-white rounded-sm p-8 sm:p-12 relative overflow-hidden border border-brand-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-400 mb-3">
              Want a Fully Customized Journey?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We can craft a bespoke multi-day UK road trip visiting all these iconic sights and more. Rent a private luxury minibus with your own personal local guide.
            </p>
          </div>
          <Link
            to="/book?type=custom"
            className="relative z-10 bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-900 font-bold px-8 py-3.5 rounded-sm uppercase tracking-wider text-xs shadow-lg transition-all duration-300 flex-shrink-0"
          >
            Design Custom Road Trip
          </Link>
        </div>
      </div>
    </div>
  );
};
