/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#9333EA",
        secondary: "#ff7e33",
        info: "#0C63E7",
        mainGreen: "#059B49",
        secondaryGreen: "#145A34",
        text: "#2F2F2F",
        body: "#9B9B9B",
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
          200: "#C6C8CD",
          300: "#ACAEB6",
          400: "#92959F",
          500: "#777C87",
          600: "#5D6370",
          700: "#434959",
          800: "#293041",
          900: "#0f172a",
        }
      }
    }
  },
  plugins: [],
}
