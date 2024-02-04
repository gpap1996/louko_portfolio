/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  content: [],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#1A1A1A',
        orange: '#d97706'
      }
    }
  },
  plugins: []
}
