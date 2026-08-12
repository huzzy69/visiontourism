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
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-green-900">
      {/* Background Image with Dark & Green Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105 hover:scale-100"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-900/60 via-brand-dark-900/70 to-brand-dark-900" />
      
      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold-400 mb-4"
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
                  <span className="text-white/60">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Cinematic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-4 font-light tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative Golden Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent opacity-60" />
    </section>
  );
};
