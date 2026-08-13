import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { Star, Clock, ArrowRight } from 'lucide-react';

export const PopularRoutes: React.FC = () => {
  const featuredTours = tours.filter((t) => t.featured);

  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-brand-red-600 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
              Curated Road Trips
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-blue-900 font-extrabold">
              Popular Road Trip Itineraries
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Explore handpicked private road trips across England and Scotland, piloted by professional driver-guides.
            </p>
          </div>
          
          <Link
            to="/1-day-trips"
            className="flex items-center gap-2 text-brand-blue-900 hover:text-brand-red-600 text-xs font-bold transition-colors uppercase tracking-wider whitespace-nowrap"
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
              className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl hover:border-brand-red-600/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-brand-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  Featured
                </div>
              </div>

              {/* Text */}
              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-red-600" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-brand-blue-50 text-brand-blue-900 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 text-brand-red-600 fill-current" />
                      {tour.rating}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-brand-blue-900 font-bold mb-3 group-hover:text-brand-red-600 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {tour.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">From</span>
                    <span className="text-xl font-bold font-serif text-brand-blue-900">£{tour.priceFrom}</span>
                  </div>
                  
                  <Link
                    to={tour.id === 'england-scotland-4-days' ? '/england-scotland-4-days' : `/book?tour=${tour.id}`}
                    className="flex items-center gap-1.5 bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold px-4 py-2.5 rounded text-[10px] uppercase tracking-wider transition-colors"
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
