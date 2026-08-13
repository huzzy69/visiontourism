import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Compass } from 'lucide-react';

export const BookingBar: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('tour');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1-8');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/book?type=${type}&date=${date}&passengers=${passengers}`);
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16">
      <div className="bg-brand-blue-900 text-white border border-brand-blue-800 shadow-2xl p-6 sm:p-8 rounded">
        <form onSubmit={handleSearch} className="flex flex-col gap-6">
          
          {/* Header tabs inside booking panel */}
          <div className="flex gap-6 border-b border-blue-800/60 pb-4">
            <button
              type="button"
              onClick={() => setType('tour')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'tour' ? 'text-brand-red-400 border-b-2 border-brand-red-500' : 'text-white/70 hover:text-white'
              }`}
            >
              UK Guided Tours
            </button>
            <button
              type="button"
              onClick={() => setType('minibus')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'minibus' ? 'text-brand-red-400 border-b-2 border-brand-red-500' : 'text-white/70 hover:text-white'
              }`}
            >
              Private Minibus Hire
            </button>
            <button
              type="button"
              onClick={() => setType('airport')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'airport' ? 'text-brand-red-400 border-b-2 border-brand-red-500' : 'text-white/70 hover:text-white'
              }`}
            >
              Airport Transfers
            </button>
          </div>

          {/* Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            
            {/* Service */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-brand-red-400" />
                Service Type
              </span>
              <div className="bg-blue-950/60 border border-blue-800/80 p-3 rounded text-xs font-bold text-white uppercase tracking-wider">
                {type === 'tour' ? 'All Guided Tours' : type === 'minibus' ? 'Minibus Charter' : 'Executive Transfer'}
              </div>
            </div>

            {/* Travel Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bar-date" className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-red-400" />
                Travel Date
              </label>
              <input
                type="date"
                id="bar-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="bg-blue-950/60 border border-blue-800/80 focus:border-brand-red-500 p-3 rounded text-xs text-white outline-none w-full cursor-pointer transition-colors"
              />
            </div>

            {/* Passengers */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bar-passengers" className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-red-400" />
                Group Size
              </label>
              <select
                id="bar-passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="bg-blue-950/60 border border-blue-800/80 focus:border-brand-red-500 p-3 rounded text-xs text-white outline-none w-full cursor-pointer transition-colors appearance-none"
              >
                <option value="1-8" className="bg-brand-blue-900 text-white">1 - 8 Passengers</option>
                <option value="9-16" className="bg-brand-blue-900 text-white">9 - 16 Passengers</option>
                <option value="17+" className="bg-brand-blue-900 text-white">17+ Passengers</option>
              </select>
            </div>

            {/* CTA Button: Red background */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold p-3.5 rounded transition-all duration-300 text-xs uppercase tracking-wider w-full shadow-md hover:-translate-y-0.5"
            >
              Check Availability
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
