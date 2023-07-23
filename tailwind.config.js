/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfcff",
          "200": "#838383",
          "300": "#141736",
        },
        "primary-color": "#304858",
        darkblue: "#3629b7",
        lightseagreen: "#27c1b3",
        salmon: "#fa6c6a",
        royalblue: "#3f7ef8",
        whitesmoke: "#f2f2f2",
        white: "#fff",
        silver: "#bcbdc2",
        "cards-bg": "#fefeff",
        black: "#000",
        "color-2": "#9ba6b2",
        "color-3": "#1d2c3c",
        blueviolet: "#7947f7",
        crimson: "#ff2f5e",
        lavender: "#f5f0ff",
        slategray: "#797c8c",
        limegreen: "#13cd3c",
        gainsboro: "#dcdcdc",
      },
      fontFamily: {
        "google-sans": "'Google Sans'",
        poppins: "Poppins",
        tomorrow: "Tomorrow",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      xs: "12px",
      "29xl": "48px",
      base: "16px",
      "3xl-7": "22.7px",
      mid: "17px",
      "3xs": "10px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
