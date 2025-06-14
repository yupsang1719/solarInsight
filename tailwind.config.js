/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#59D9F6',
        accent: '#34B6D2',
        dark: '#1B2D4D',
        background: '#F5FAFC',
        text: '#333B42',
      },

      animation:{
         'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
