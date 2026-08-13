import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImageUrl?: string;
  breadcrumbs?: { name: string; path?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  bgImageUrl = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
  breadcrumbs = [],
}) => {
  return (
    <section className="relative h-[38vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-blue-950">
      {/* Background Image with Dark & Navy Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105 opacity-30"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-950/80 via-brand-blue-950/70 to-slate-950" />
      
      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red-400 mb-3"
          >
            <Link to="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors duration-200">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mt-3 font-normal tracking-wide leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative Red Swoosh Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red-600 to-transparent" />
    </section>
  );
};
