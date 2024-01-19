/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        leftBanner: "url('/images/bg-main-desktop.png')",
        leftMbBanner: "url('/images/bg-main-mobile.png')"
      },
      backgroundColor: {
        violet: "hsl(278, 68%, 11%)"
      },
      colors: {
        violet: "hsl(278, 68%, 11%)",
        white: "hsl(0, 0%, 100%)",
        error: "hsl(0, 100%, 66%)"

      },
      borderColor: {
        error: "hsl(0, 100%, 66%)"
      }
    },
  },
  plugins: [],
}