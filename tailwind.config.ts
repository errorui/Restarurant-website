import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ED7D27',
        secondary: '#D9641E',
        'back-main': '#F7F7F7',
        'back-second': '#ECE2D2',
        'text-main': '#141414',
        'text-secondary': '#41423A',
      },
      fontFamily: {
        vanity: ['Vanity', 'sans-serif'],
        
        cant: ['cantata', 'sans-serif'],
        voni: ['Vonique', 'sans-serif'],
        vonif: ['Vonique 43_D', 'sans-serif'],
        hindeng: ['hindeng', 'sans-serif'],
        antipasto: ['antipasti', 'sans-serif'],
        cocogothic: ['cocogothic', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
