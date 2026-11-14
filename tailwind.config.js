/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter first for English, Hind Siliguri second for Bengali
        sans: ["var(--font-inter)", "var(--font-bengali)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
