/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFD700", // Light yellow
          DEFAULT: "#FFC107", // Brand yellow
          dark: "#FFA000", // Dark yellow
        },
        secondary: {
          light: "#64B5F6", // Light blue
          DEFAULT: "#2196F3", // Brand blue
          dark: "#1976D2", // Dark blue
        },
      },
    },
  },
  plugins: [],
}