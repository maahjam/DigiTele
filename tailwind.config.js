module.exports = {
  purge: [
    './public/*.html ',
    './src/**/*.vue',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    transparent: 'transparent',
    current: 'currentColor',
    blue: {
      light: '#6490b1',
      DEFAULT: '#1fb6ff',
      dark: '#3a6d99',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
