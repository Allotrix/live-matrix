/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "allotrix-bg": "#242529",
      "allotrix-text": "#ffffff",
      "allotrix-std": "#EF4036",
      "allotrix-setup": "#313236"
    },

    fontFamily: {
      "allotrix-font": ['Poppins', 'sans-serif'],
      "allotrix-font-secondary": ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

