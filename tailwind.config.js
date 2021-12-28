module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
          },
        },
      }),
      colors: {
        'lilac':'#e5d5e2',
        'neon':'#74ff58',
        'barbie':'#ffa6d9',
        'pale-yellow':'#faed8f',
        'banana':'#fffbd6',
        'seagreen':'#2dbc94',
        'orangina':'#ff8c00',
        'lemon':'#f2ff26',
        'neon-pink':'#FE16B7',

      }
    },

  },
  variants: {
    extend: {
      textColor: ['visited'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
