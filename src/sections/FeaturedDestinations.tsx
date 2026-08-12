import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { ArrowRight, Compass } from 'lucide-react';

export const FeaturedDestinations: React.FC = () => {
  // Show featured destinations
  const featuredDestinations = destinations.filter((d) => d.featured);

  return (
    <section className="bg-brand-cream-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-brand-gold-400 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
              Top Sightseeing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold">
              Featured UK Destinations
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Explore historic royal capitals, dramatic volcanic highlands, and gorgeous rolling countrysides in the comfort of a private tour.
            </p>
          </div>
          
          <Link
            to="/famous-sights"
            className="flex items-center gap-2 text-brand-green-900 hover:text-brand-gold-500 text-sm font-bold transition-colors uppercase tracking-wider whitespace-nowrap"
          >
            Explore All Sights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.slice(0, 4).map((dest) => (
            <div
              key={dest.id}
              className="group relative h-80 rounded-sm overflow-hidden border border-brand-cream-300 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${dest.imageUrl}')` }}
              />
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-900 via-brand-dark-900/30 to-transparent" />
              
              {/* Content Panel */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end h-full">
                <span className="text-[9px] font-bold text-brand-gold-400 uppercase tracking-widest block mb-1 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-brand-gold-400" />
                  {dest.region}
                </span>
                
                <h3 className="font-serif text-lg text-white font-bold mb-2">
                  {dest.name}
                </h3>
                
                <p className="text-[11px] text-white/70 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  {dest.description}
                </p>

                <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center text-[10px] uppercase font-bold text-brand-gold-400 tracking-wider">
                  <span>Explore Route</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
