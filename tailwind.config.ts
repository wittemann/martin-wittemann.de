import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      foreground: 'rgba(var(--text-color), <alpha-value>)',
    },
    extend: {
      animation: {
        wave: 'wave 2.5s 0.6s infinite',
      },
      keyframes: {
        wave: {
          from: {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(16deg)',
          },
          '20%': {
            transform: 'rotate(-6deg)',
          },
          '30%': {
            transform: 'rotate(16deg)',
          },
          '40%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(16deg)',
          },
          '60%': {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
