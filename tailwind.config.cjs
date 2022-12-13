/** @type {Partial<ThemeConfig & {extend: Partial<ThemeConfig>}>} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xxs': '350px',
      'xs': '465px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  daisyui: {
    themes: [{
      lofi: {
        ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
        "base-100": "#0A0A0A",
        '.card.image-full:before': {
          'background-color': '#ffffff36',
        },
      },
    }],
  },
  plugins: [require("daisyui")],
};
