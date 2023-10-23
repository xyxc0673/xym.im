import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
