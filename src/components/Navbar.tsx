import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Determine if navbar should have solid background
  const isScrolled = scrollY > 50 || !isHome;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: '1-Day Trips', path: '/1-day-trips' },
    { name: 'England to Scotland Tour', path: '/england-scotland-4-days' },
    { name: 'Famous Sights', path: '/famous-sights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-green-900/95 shadow-lg backdrop-blur-md py-4 border-b border-brand-green-800/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <Link to="/" className="flex items-center gap-3 group">
              <svg className="w-10 h-10 text-brand-gold-400 group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                <polygon points="50,15 56,44 50,50" fill="currentColor" />
                <polygon points="50,15 44,44 50,50" fill="rgba(197,168,128,0.7)" />
                <polygon points="50,85 44,56 50,50" fill="currentColor" opacity="0.8" />
                <polygon points="50,85 56,56 50,50" fill="rgba(197,168,128,0.7)" opacity="0.8" />
                <circle cx="50" cy="50" r="5" fill="#092E20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-white leading-none uppercase">
                  Maps Tours
                </span>
                <span className="text-[9px] tracking-[0.25em] text-brand-gold-400 uppercase font-medium leading-none mt-1">
                  & Rental
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${
                      isActive
                        ? 'text-brand-gold-400 font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+442012345678"
                className="flex items-center gap-2 text-white/95 hover:text-brand-gold-400 text-sm font-medium transition-colors duration-300 px-3 py-2"
              >
                <Phone className="w-4 h-4 text-brand-gold-400" />
                <span>+44 (0) 20 1234 5678</span>
              </a>
              <Link
                to="/book"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-green-900 font-bold px-6 py-2.5 rounded-sm shadow-md transition-all duration-300 hover:shadow-brand-gold-400/20 text-sm tracking-wider uppercase hover:-translate-y-[1px]"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                to="/book"
                className="bg-brand-gold-400 text-brand-green-900 font-bold p-2.5 rounded-sm hover:bg-brand-gold-500 transition-colors shadow-md"
                aria-label="Book Now"
              >
                <Calendar className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-brand-gold-400 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 z-30 bg-brand-green-900 border-b border-brand-green-800 shadow-2xl lg:hidden flex flex-col px-6"
          >
            <div className="flex flex-col gap-5 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium tracking-wide py-2 border-b border-white/5 transition-colors ${
                      isActive ? 'text-brand-gold-400 font-bold' : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="tel:+442012345678"
                className="flex items-center gap-3 text-white/90 py-3 mt-4 text-base"
              >
                <Phone className="w-5 h-5 text-brand-gold-400" />
                <span>+44 (0) 20 1234 5678</span>
              </a>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-900 font-bold py-3.5 rounded-sm transition-all duration-300 text-base uppercase tracking-wider mt-2 shadow-lg"
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
