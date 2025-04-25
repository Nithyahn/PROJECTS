/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    animation: {
      'spin-slow': 'spin 4s linear infinite',
    }
  },  
  theme: {
    extend: {},
  },
  plugins: [],
}