/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // include root HTML file
    "./src/**/*.{js,ts,jsx,tsx}" // include all source files
  ],
   theme: {
    extend: {
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(var(--rise-distance, 1rem))' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rise': 'rise 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
