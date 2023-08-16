/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#064acb",
        secondary: "#366ed8",
        accent: "#f3a953",
        background: "#f2f3f3",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#064acb",
          secondary: "#366ed8",
          accent: "#f3a953",
          background: "#f2f3f3",
        },
      },
    ],
  }
}

