/* eslint-env node */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        countdown: 'url(\'https://user-images.githubusercontent.com/5566310/103051331-942dae80-4564-11eb-8d6e-7b757d03e8c8.png\')',
        todo: 'url(\'https://user-images.githubusercontent.com/5566310/102437990-7c48ae80-3fe9-11eb-8bf1-ef0ae5b72767.png\')',
      },
      colors: {
        theme_indigo: '#4d49f3',
        theme_yellow: '#fed230',
        theme_pink: '#febebe',
        theme_lilac: '#afb2f1',
        theme_periwinkle: '#a9cafd'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
