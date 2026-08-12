import React from 'react';
import { ShieldCheck, Compass, Users2, Milestone } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '150,000+',
      label: 'Miles Traveled',
      icon: <Milestone className="w-5 h-5 text-brand-gold-400" />,
      detail: 'Across England, Scotland & Wales'
    },
    {
      value: '12,500+',
      label: 'Happy Passengers',
      icon: <Users2 className="w-5 h-5 text-brand-gold-400" />,
      detail: 'Private groups and corporate clients'
    },
    {
      value: '15+',
      label: 'Executive Fleet Van & Coaches',
      icon: <Compass className="w-5 h-5 text-brand-gold-400" />,
      detail: 'Custom layouts (8, 16, 49 seaters)'
    },
    {
      value: '100%',
      label: 'Safety Record & Licensed',
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold-400" />,
      detail: 'Accredited private hire operator'
    }
  ];

  return (
    <section className="bg-brand-green-900 text-white py-16 border-t border-b border-brand-gold-400/10 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm group hover:border-brand-gold-400/20 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-950 border border-brand-gold-400/25 mb-4 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold-400 tracking-wide block mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90 block mb-2">
                {stat.label}
              </span>
              <span className="text-[10px] text-white/50 leading-tight">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
