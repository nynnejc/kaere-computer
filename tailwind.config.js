module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {},
        },
      }),
      colors: {
        lilac: "#e5d5e2",
        neon: "#74ff58",
        barbie: "#ffa6d9",
        "pale-yellow": "#faed8f",
        banana: "#fffbd6",
        "sea-green": "#2dbc94",
        orangina: "#ff8c00",
        lemon: "#f2ff26",
        "neon-pink": "#FE16B7",
        "neon-purple": "#E500FF",
        "blue-violet": "#4733ff",
        "neon-orange": "#ff5200",
        "pansy-purple": "#6f0043",
        lavender: "#b8b8ff",
        mint: "#bfffe6",
        slate: "#1b3644",
        "violet-black": "#06004f",
        mineral: "#b5d1cc",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
