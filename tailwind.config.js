const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md}",
    "./functions/**/*.ts"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['PingFang TC', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
