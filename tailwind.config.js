/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
        'bg-black-900': '#f2f2fc',
        'bg-black-100': '#fdf9ff',
        'bg-black-50': '#e8dfec',
        'text-black-900': '#302e4d',
        'text-black-700': '#504e70',
        'skin-color': '#1854b4',
      }
    },
  },
  plugins: [],
}