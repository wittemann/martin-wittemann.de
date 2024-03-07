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
  },
  plugins: [],
};
export default config;
