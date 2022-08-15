/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts}",
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {
      colors: {

          // Gradient factors
          border_l: "#FF68D5",
          border_via: "#527ED7",
          border_r: "#0BF0FF",

          // Gradient factors
          accent_l: "#459BFF",
          accent_r: "#68DFD8",
        },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
