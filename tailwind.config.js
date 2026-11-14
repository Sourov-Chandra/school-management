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
        // This links to the CSS variable we will define next
        sans: ["var(--font-bengali)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
