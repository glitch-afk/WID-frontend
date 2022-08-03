/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wid-dark": "#000000",
        "wid-indigo": "#4B74FF",
        "wid-purple": "#9281FF",
      },
    },
  },
  plugins: [],
};
