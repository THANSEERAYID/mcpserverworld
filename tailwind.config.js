/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2998ff",
        orange: "#ff7730",
        lightGreen: "#55bd86",
        purple: "#2a0073",
      },
      fontFamily: {
        mavenPro: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

