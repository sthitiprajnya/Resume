import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New V2 Tokens
        base:          '#0B0E14',
        surface:       '#12161F',
        overlay:       '#1A202C',
        'border-subtle':'#2D3748',

        'accent-cyan': '#00F0FF',
        'accent-indigo':'#5C6BC0',

        // Old V1 Tokens (kept for backward compatibility with un-refactored sections)
        void:          '#000000',
        deep:          '#020408',
        border:        '#0D2137',
        'border-glow': '#4A5568',

        cyan:          '#00F5FF',
        'cyan-dim':    '#00B4CC',
        'cyan-ghost':  '#00F5FF15',
        green:         '#39FF14',
        'green-dim':   '#2ACC0F',
        'green-ghost': '#39FF1410',
        violet:        '#BF00FF',
        'violet-dim':  '#8B00BB',
        amber:         '#FFB300',
        red:           '#FF0055',

        'text-primary':   '#F7FAFC',
        'text-secondary': '#A0AEC0',
        'text-muted':     '#718096',
        'text-accent':    '#00F5FF',
      },
      fontFamily: {
        primary: ['var(--font-geist-sans)', 'sans-serif'],
        mono:    ['var(--font-geist-mono)', 'monospace'],
        display: ['Orbitron', 'monospace'],
        heading: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display': ['clamp(2rem, 4.5vw, 4rem)',   { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'card':    ['clamp(1.1rem, 2vw, 1.4rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body':    ['1rem',                       { lineHeight: '1.6', fontWeight: '400' }],
        'small':   ['0.875rem',                   { lineHeight: '1.5', fontWeight: '400' }],
        'label':   ['0.7rem',                     { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '600' }],
        'mono-sm': ['0.8rem',                     { lineHeight: '1.5' }],
      },
      screens: {
        'xs':  '375px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};

export default config;
