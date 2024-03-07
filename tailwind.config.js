/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neuemontreal: ["neuemontreal", "sans-serif"],
        foundersgrotesk: ["foundersgrotesk", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
