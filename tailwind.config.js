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
        electricblue: "#4726ff",
        barbie: "#ffa6d9",
        paleyellow: "#faed8f",
        banana: "#fffbd6",
        seagreen: "#2dbc94",
        orangina: "#ff8c00",
        lemon: "#f2ff26",
        neonpink: "#FE16B7",
        neonpurple: "#E500FF",
        blueviolet: "#4733ff",
        neonorange: "#ff5200",
        pansypurple: "#6f0043",
        lavender: "#b8b8ff",
        mint: "#bfffe6",
        slate: "#1b3644",
        violetblack: "#06004f",
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
