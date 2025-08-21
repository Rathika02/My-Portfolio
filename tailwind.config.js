/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Poppins','ui-sans-serif','system-ui'] },
      boxShadow: { card: '0 10px 25px rgba(0,0,0,0.08)' },
      backgroundImage: { 'hero-gradient': 'linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(236,72,153,1) 50%, rgba(129,140,248,1) 100%)' }
    },
  },
  plugins: [],
};
