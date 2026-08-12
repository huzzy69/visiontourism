import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: '#f2f8f5',
            100: '#e1ede6',
            200: '#c5dbce',
            300: '#9cbdac',
            400: '#6d9982',
            500: '#092E20', // Classic British Racing Green Medium
            600: '#004225', // Deep British Racing Green
            700: '#06261b', // Ultra Deep Forest
            800: '#041d14',
            900: '#02120d',
          },
          gold: {
            50: '#faf8f5',
            100: '#f4ede1',
            200: '#e5d7be',
            300: '#d1b993',
            400: '#C5A880', // Premium Accent Gold
            500: '#a7855b',
            600: '#8f6e47',
            700: '#755737',
            800: '#5e432a',
            900: '#4c3522',
          },
          cream: {
            50: '#ffffff',
            100: '#FAF9F6', // Off-white cream background
            200: '#F5F2EB', // Warm sand cream
            300: '#EAE5D9',
          },
          dark: {
            900: '#0B0F19', // Deep dark overlay background
            950: '#05070B', // Rich pitch black
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        }
      },
      backgroundImage: {
        'cinematic-gradient': 'linear-gradient(to bottom, rgba(11, 15, 25, 0.3), rgba(5, 7, 11, 0.95))',
        'gold-gradient': 'linear-gradient(135deg, #C5A880 0%, #a7855b 100%)',
        'green-gradient': 'linear-gradient(135deg, #092E20 0%, #004225 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
