/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "var-black-primary": "#171a20cc",
        "var-transparent-primary": "#00000014",
        "var-gray-primary": "#393c41",
        "var-white-primary": "#f4f4f4a6",
      },
    },
  },
  plugins: [],
};
