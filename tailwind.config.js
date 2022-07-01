/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        // => @media (min-width: 380px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
