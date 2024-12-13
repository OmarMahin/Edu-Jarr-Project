/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      primary: "#1B2336",
      secondary: "#2AAA94",
      button_blue: "#083F9B",
      button_purple: "#7F56D9"
     }
    },
  },
  plugins: [],
}
