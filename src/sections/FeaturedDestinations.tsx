import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { ArrowRight, Compass } from 'lucide-react';

export const FeaturedDestinations: React.FC = () => {
  const featuredDestinations = destinations.filter((d) => d.featured);

  return (
    <section className="bg-brand-neutral-100 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-brand-red-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
              Famous Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-blue-900 font-extrabold">
              Featured UK Travel Sights
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              From Royal London to ancient Oxford colleges, Manchester heritage, Lake District valleys, and Edinburgh Castle.
            </p>
          </div>
          
          <Link
            to="/famous-sights"
            className="flex items-center gap-2 text-brand-blue-900 hover:text-brand-red-600 text-xs font-bold transition-colors uppercase tracking-wider whitespace-nowrap"
          >
            Explore All Sights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative h-84 rounded overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${dest.imageUrl}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Content Panel */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end h-full">
                <span className="text-[10px] font-bold text-white bg-brand-red-600 w-fit px-2 py-0.5 rounded uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-white" />
                  {dest.region}
                </span>
                
                <h3 className="font-serif text-xl text-white font-bold mb-2">
                  {dest.name}
                </h3>
                
                <p className="text-xs text-slate-200 leading-relaxed opacity-95 mb-3 line-clamp-2">
                  {dest.shortDescription}
                </p>

                <div className="border-t border-white/20 pt-3 flex justify-between items-center text-[10px] uppercase font-bold text-white tracking-wider group-hover:text-brand-red-400 transition-colors">
                  <span>Explore Location</span>
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
