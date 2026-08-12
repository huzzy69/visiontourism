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
      <div className="bg-brand-green-900 border border-brand-gold-400/20 shadow-2xl p-6 sm:p-8 rounded-sm">
        <form onSubmit={handleSearch} className="flex flex-col gap-6">
          {/* Header tabs inside booking panel */}
          <div className="flex gap-4 border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => setType('tour')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'tour' ? 'text-brand-gold-400 border-b-2 border-brand-gold-400' : 'text-white/60 hover:text-white'
              }`}
            >
              UK Guided Tours
            </button>
            <button
              type="button"
              onClick={() => setType('minibus')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'minibus' ? 'text-brand-gold-400 border-b-2 border-brand-gold-400' : 'text-white/60 hover:text-white'
              }`}
            >
              Private Minibus Hire
            </button>
            <button
              type="button"
              onClick={() => setType('airport')}
              className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all ${
                type === 'airport' ? 'text-brand-gold-400 border-b-2 border-brand-gold-400' : 'text-white/60 hover:text-white'
              }`}
            >
              Airport Transfers
            </button>
          </div>

          {/* Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Input 1: Destination / Service indicator */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-brand-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Service Interest
              </span>
              <div className="bg-white/5 border border-white/15 p-3 rounded-sm text-sm text-white/95 font-medium select-none capitalize">
                {type === 'tour' ? 'All Guided Tours' : type === 'minibus' ? 'Fleet Minibus Charter' : 'Executive Transfer'}
              </div>
            </div>

            {/* Input 2: Date Selector */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bar-date" className="text-[10px] font-bold text-brand-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Travel Date
              </label>
              <input
                type="date"
                id="bar-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="bg-white/5 border border-white/15 focus:border-brand-gold-400 p-3 rounded-sm text-sm text-white outline-none w-full cursor-pointer transition-colors"
              />
            </div>

            {/* Input 3: Passenger count */}
            <div className="flex flex-col gap-2">
              <label htmlFor="bar-passengers" className="text-[10px] font-bold text-brand-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Passengers Size
              </label>
              <select
                id="bar-passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="bg-white/5 border border-white/15 focus:border-brand-gold-400 p-3 rounded-sm text-sm text-white outline-none w-full cursor-pointer transition-colors appearance-none"
              >
                <option value="1-8" className="bg-brand-green-900 text-white">1 - 8 Passengers</option>
                <option value="9-16" className="bg-brand-green-900 text-white">9 - 16 Passengers</option>
                <option value="17+" className="bg-brand-green-900 text-white">17+ Passengers</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-900 font-bold p-3.5 rounded-sm transition-all duration-300 text-xs uppercase tracking-wider w-full shadow-lg"
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
