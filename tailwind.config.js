/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 0px 90px -10px #BF40BF",
        l: "0 0px 20px 0px #BF40BF",
      },
    },
  },
  plugins: [],
};
