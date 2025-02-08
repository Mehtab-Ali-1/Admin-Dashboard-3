/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {

    // Enable the `@apply` directive

    applyComplexClasses: true,

  },
  content: [
    // If you have Next.js app directory:
    "./app/**/*.{js,ts,jsx,tsx}",
    // If you store pages/components in `src`:
    "./src/**/*.{js,ts,jsx,tsx}",
    // If you have a `/pages` directory or anywhere else:
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
