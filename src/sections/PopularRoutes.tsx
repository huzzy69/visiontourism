import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { Star, Clock, ArrowRight } from 'lucide-react';

export const PopularRoutes: React.FC = () => {
  // Show featured tours
  const featuredTours = tours.filter((t) => t.featured);

  return (
    <section className="bg-brand-cream-200 py-20 border-t border-b border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-brand-gold-500 font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
              Curated Road Trips
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-green-900 font-bold">
              Popular Road Trip Itineraries
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Explore our handpicked travel itineraries. Handled in executive comfort with professional tour driver-guides.
            </p>
          </div>
          <Link
            to="/1-day-trips"
            className="flex items-center gap-2 text-brand-green-900 hover:text-brand-gold-500 text-sm font-bold transition-colors uppercase tracking-wider whitespace-nowrap"
          >
            View All Trips
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white border border-brand-cream-300 rounded-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl hover:border-brand-gold-400/20 transition-all duration-500"
            >
              {/* Image panel */}
              <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/5" />
              </div>

              {/* Text panel */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold-400" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-brand-gold-400/20 text-brand-green-900 px-2 py-0.5 rounded-sm">
                      <Star className="w-3 h-3 fill-current" />
                      {tour.rating}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-brand-green-900 font-bold mb-3 group-hover:text-brand-gold-400 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {tour.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-brand-cream-200 pt-5">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Pricing from</span>
                    <span className="text-xl font-bold font-serif text-brand-green-900">£{tour.priceFrom}</span>
                  </div>
                  
                  <Link
                    to={tour.id === 'england-scotland-4-days' ? '/england-scotland-4-days' : `/book?tour=${tour.id}`}
                    className="flex items-center gap-1.5 bg-brand-green-900 hover:bg-brand-green-600 text-white font-bold px-4 py-2.5 rounded-sm text-[10px] uppercase tracking-wider transition-colors"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
