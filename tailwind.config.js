/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#F8F4FF',
          100: '#F0E6FF',
          200: '#E0CCFF',
          300: '#C7A3FF',
          400: '#A970FF',
          500: '#8B3DFF',
          600: '#7C2D12',
          700: '#5B1A8B',
          800: '#4C1D95',
          900: '#3B0764',
          950: '#1E0A3C',
        },
        gold: {
          500: '#F59E0B',
          600: '#D97706',
          50: '#FFFBEB',
          100: '#FEF3C7',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};