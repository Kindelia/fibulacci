/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Creatures
        "blob-right": "url('../public/images/blob-right.png')",
        "blob-left": "url('../public/images/blob-left.png')",
        "blob-blue-left": "url('../public/images/blob-blue-left.png')",
        "blob-blue-right": "url('../public/images/blob-blue-right.png')",
        // Hub
        "window": "url('../public/images/window.png')",
        "hp-bar": "url('../public/images/hp-bar.png')",
        // Stages
        map: "url('../public/images/maps/map.png')",
      },
      keyframes: {
        blob: {
          "0%": {
            "background-position-x": 0,
          },
          "100%": {
            "background-position-x": 256,
          },
        },
      },
      animation: {
        blob: "blob 1.2s steps(8) infinite",
        "blob-blue": "blob 1.2s steps(8) infinite",
      },
    },
  },
  plugins: [],
};
