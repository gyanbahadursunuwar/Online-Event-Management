module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'maven-pro': ['Maven Pro', 'sans-serif'],
      },
      backgroundImage: {
        'svg-background': "url('./common/assets/background.svg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}