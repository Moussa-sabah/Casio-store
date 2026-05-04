/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#137FEC",
      },
      fontFamily: {
        inter: "Inter",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
