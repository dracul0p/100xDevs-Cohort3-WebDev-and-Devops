/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#7f95ac",
          500: "#19406a",
          700: "#002b5b",
        },
        green: {
          // correct spelling
          400: "#7f95ac",
        },
      },
    },
  },
  plugins: [],
};
