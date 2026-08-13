import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: '1-Day Trips', path: '/1-day-trips' },
    { name: 'England to Scotland Tour', path: '/england-scotland-4-days' },
    { name: 'Famous Sights', path: '/famous-sights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-sm py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Prominent Official Brand Logo */}
            <Link to="/" className="flex items-center group">
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 relative py-1.5 uppercase ${
                      isActive
                        ? 'text-brand-red-600'
                        : 'text-brand-blue-900 hover:text-brand-red-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Active Red Underline */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-red-600 rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+442012345678"
                className="flex items-center gap-2 text-brand-blue-900 hover:text-brand-red-600 text-xs font-bold transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-brand-red-600" />
                <span>+44 (0) 20 1234 5678</span>
              </a>

              {/* Primary CTA: Navy background, turns Red on hover */}
              <Link
                to="/book"
                className="flex items-center gap-2 bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold px-5 py-2.5 rounded shadow-sm transition-all duration-300 text-xs tracking-wider uppercase hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book Now
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                to="/book"
                className="bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold p-2.5 rounded shadow-sm transition-colors"
                aria-label="Book Now"
              >
                <Calendar className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-blue-900 hover:text-brand-red-600 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 pt-20 pb-8 z-30 bg-white border-b border-slate-200 shadow-2xl lg:hidden flex flex-col px-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-bold tracking-wide py-2 border-b border-slate-100 uppercase transition-colors ${
                      isActive ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="tel:+442012345678"
                className="flex items-center gap-3 text-brand-blue-900 font-bold py-3 mt-2 text-sm"
              >
                <Phone className="w-5 h-5 text-brand-red-600" />
                <span>+44 (0) 20 1234 5678</span>
              </a>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-blue-900 hover:bg-brand-red-600 text-white font-bold py-3.5 rounded transition-all text-sm uppercase tracking-wider mt-2 shadow"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
