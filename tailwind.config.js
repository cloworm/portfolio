/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
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
        shortly: 'url(\'https://user-images.githubusercontent.com/5566310/102733370-25a1e400-430b-11eb-9bb4-852053c4fb4c.png\')',
        deco: 'url(\'https://user-images.githubusercontent.com/5566310/103108017-cd702800-4611-11eb-8da0-bf617623839b.png\')',
        regex: 'url(\'https://user-images.githubusercontent.com/5566310/103107945-17a4d980-4611-11eb-9fba-d70261ed555a.png\')',
      },
      colors: {
        theme_indigo: '#4d49f3',
        theme_yellow: '#fed230',
        theme_pink: '#febebe',
        theme_lilac: '#afb2f1',
        theme_periwinkle: '#a9cafd'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.filter-grayscale': {
          filter: 'grayscale(1)'
        },
        '.filter-color': {
          filter: 'grayscale(0)'
        }
      }

      addUtilities(newUtilities, {
        variants: ['hover', 'group-hover']
      })
    })
  ],
}
