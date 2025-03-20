module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {},
        },
      }),
      colors: {
        lilac_kc: "#F2EAFF",
        pink_kc: "#FFB2D9",
        powder_kc: "#FCE3E3",
        yellow_kc: "#F7F4C6",
        red_kc: "#FF1A66",
        pistacio_kc: "#F2FFEA",
        black: "#000000",
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
      cursor: {
        default: 'url(/posts/cursorregnbue.png), default',
        pointer: 'url(/posts/cursorhjerte.png), pointer',
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
