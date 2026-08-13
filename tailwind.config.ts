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
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a', // Official Deep Royal/Navy Blue
            950: '#0f172a', // Dark Navy Charcoal
          },
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626', // Official Maps Tours Red
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          neutral: {
            50: '#ffffff',
            100: '#f8fafc', // Light neutral background
            200: '#f1f5f9', // Very light neutral
            300: '#e2e8f0',
            400: '#94a3b8',
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Inter', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)',
        'red-gradient': 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
