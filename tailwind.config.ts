import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY: Red spectrum
        barn: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        // PRIMARY: Grey spectrum  
        steel: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // ACCENT: Chrome metallic
        chrome: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
        },
        // EARTH TONES: Forest green (dark olive - #404E3B)
        forest: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#cdd7c9',
          300: '#a8b9a1',
          400: '#7f9575',
          500: '#5f7855',
          600: '#4a6043',
          700: '#404E3B',
          800: '#343f30',
          900: '#2b3428',
        },
        // EARTH TONES: Taupe/brown (#997E67)
        earth: {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#e8ddd3',
          300: '#d4c4b4',
          400: '#bda692',
          500: '#997E67',
          600: '#8a7059',
          700: '#735c49',
          800: '#5f4c3d',
          900: '#4e3f33',
        },
        // EARTH TONES: Cream/peach (#FFDBBB)
        cream: {
          50: '#fffdfb',
          100: '#fff8f2',
          200: '#FFDBBB',
          300: '#ffc999',
          400: '#ffb577',
          500: '#f59e5c',
          600: '#e08543',
          700: '#c06c32',
          800: '#9d562a',
          900: '#804726',
        },
        // EARTH TONES: Sage green (#7B9669)
        sage: {
          50: '#f5f7f3',
          100: '#e8ece4',
          200: '#d1d9c9',
          300: '#b2c0a4',
          400: '#7B9669',
          500: '#6a8458',
          600: '#536a45',
          700: '#435538',
          800: '#38452f',
          900: '#2f3a28',
        },
      },
      backgroundImage: {
        'chrome-gradient': 'linear-gradient(135deg, #e4e4e7 0%, #fafafa 25%, #d4d4d8 50%, #fafafa 75%, #e4e4e7 100%)',
        'chrome-vertical': 'linear-gradient(180deg, #fafafa 0%, #d4d4d8 50%, #fafafa 100%)',
        'chrome-horizontal': 'linear-gradient(90deg, #d4d4d8 0%, #fafafa 50%, #d4d4d8 100%)',
        'chrome-dark': 'linear-gradient(135deg, #404040 0%, #525252 25%, #404040 50%, #525252 75%, #404040 100%)',
        'chrome-dark-vertical': 'linear-gradient(180deg, #525252 0%, #262626 50%, #525252 100%)',
        'chrome-shine': 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        'chrome-red': 'linear-gradient(135deg, #991b1b 0%, #dc2626 25%, #b91c1c 50%, #dc2626 75%, #991b1b 100%)',
        'red-gradient': 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #b91c1c 100%)',
        'diagonal-split': 'linear-gradient(135deg, #dc2626 50%, #f5f5f5 50%)',
        'forest-gradient': 'linear-gradient(135deg, #343f30 0%, #404E3B 50%, #343f30 100%)',
        'earth-gradient': 'linear-gradient(135deg, #8a7059 0%, #997E67 50%, #8a7059 100%)',
        'sage-gradient': 'linear-gradient(135deg, #6a8458 0%, #7B9669 50%, #6a8458 100%)',
        'cream-warm': 'linear-gradient(180deg, #fffdfb 0%, #fff8f2 50%, #FFDBBB 100%)',
      },
      boxShadow: {
        'chrome': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.5)',
        'chrome-lg': '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
        'chrome-inset': 'inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(255,255,255,0.5)',
        'chrome-button': '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.1)',
        'deep': '0 10px 40px -10px rgba(0,0,0,0.3)',
        'red-glow': '0 0 30px rgba(220, 38, 38, 0.3)',
        'chrome-glow': '0 0 20px rgba(212, 212, 216, 0.5)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
