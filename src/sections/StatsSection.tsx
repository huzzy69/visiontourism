import React from 'react';
import { ShieldCheck, Compass, Users2, Milestone } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '150,000+',
      label: 'Miles Traveled',
      icon: <Milestone className="w-5 h-5 text-brand-red-500" />,
      detail: 'Across England, Scotland & Wales'
    },
    {
      value: '12,500+',
      label: 'Happy Passengers',
      icon: <Users2 className="w-5 h-5 text-brand-red-500" />,
      detail: 'Private groups and corporate clients'
    },
    {
      value: '15+',
      label: 'Executive Fleet Minibuses',
      icon: <Compass className="w-5 h-5 text-brand-red-500" />,
      detail: 'Custom layouts (8, 16, 49 seaters)'
    },
    {
      value: '100%',
      label: 'Safety Record & Licensed',
      icon: <ShieldCheck className="w-5 h-5 text-brand-red-500" />,
      detail: 'Accredited private hire operator'
    }
  ];

  return (
    <section className="bg-brand-blue-900 text-white py-16 border-t border-b border-blue-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-blue-950/60 border border-blue-800/80 rounded backdrop-blur-sm group hover:border-brand-red-500/40 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded bg-slate-900 border border-blue-800 mb-4 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide block mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-red-400 block mb-2">
                {stat.label}
              </span>
              <span className="text-[10px] text-slate-300 leading-tight">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
