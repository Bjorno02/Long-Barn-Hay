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
        // WARM EARTH: Copper/Terracotta (complements barn red)
        copper: {
          50: '#fdf8f6',
          100: '#fcf0ea',
          200: '#f8ddd1',
          300: '#f0c4ad',
          400: '#e4a07a',
          500: '#d4845a',
          600: '#c17048',
          700: '#a25a3a',
          800: '#864a32',
          900: '#6d3d2b',
        },
        // WARM EARTH: Amber/Honey/Golden (warm gold, evokes hay)
        amber: {
          50: '#fefcf3',
          100: '#fdf8e3',
          200: '#faefc1',
          300: '#f5e08f',
          400: '#edc85a',
          500: '#e4b035',
          600: '#cc9422',
          700: '#a9731d',
          800: '#8a5c1f',
          900: '#724c1e',
        },
        // WARM EARTH: Caramel/Tan (warm brown)
        earth: {
          50: '#faf8f5',
          100: '#f5efe7',
          200: '#ebdece',
          300: '#dcc7a9',
          400: '#c9a87d',
          500: '#b8905d',
          600: '#a77a4c',
          700: '#8b6340',
          800: '#725139',
          900: '#5e4331',
        },
        // WARM EARTH: Cream/Peach (warm light base)
        cream: {
          50: '#fffdfb',
          100: '#fff9f3',
          200: '#ffeed9',
          300: '#ffe0bc',
          400: '#ffcf99',
          500: '#f5b876',
          600: '#e09a52',
          700: '#c47d3a',
          800: '#a26430',
          900: '#855229',
        },
        // WARM EARTH: Espresso (deep warm brown for contrast)
        espresso: {
          50: '#faf7f5',
          100: '#f3ebe5',
          200: '#e5d5c8',
          300: '#d2b8a3',
          400: '#b99377',
          500: '#a57858',
          600: '#8f6347',
          700: '#76503c',
          800: '#5d4037',
          900: '#4a342d',
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
        'copper-gradient': 'linear-gradient(135deg, #a25a3a 0%, #c17048 50%, #a25a3a 100%)',
        'amber-gradient': 'linear-gradient(135deg, #cc9422 0%, #e4b035 50%, #cc9422 100%)',
        'earth-gradient': 'linear-gradient(135deg, #8b6340 0%, #b8905d 50%, #8b6340 100%)',
        'cream-warm': 'linear-gradient(180deg, #fffdfb 0%, #fff9f3 50%, #ffeed9 100%)',
        'espresso-gradient': 'linear-gradient(135deg, #5d4037 0%, #76503c 50%, #5d4037 100%)',
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
