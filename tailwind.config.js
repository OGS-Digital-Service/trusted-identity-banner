module.exports = {
  prefix: 'unav-',
  content: [
     '_site/*.html',
    '_site/**/*.html'  
  ],
  theme: {
    fontFamily: {
      sans: ['sans-serif']
     },
    extend: {
      colors: {
        'ny-accent-first': '#f4a71c',
        'ny-accent-second': '#f3dd6d',
        'ny-links': '#007ac2',
        'ny-dark': '#62666a',
        'ny-mid': '#d0d0ce',
        'ny-light': '#ededed',
        'ny-gold': '#face00',
        'ny-blue': '#154973',
        'ny-blue-second': '#457AA5'
      }
    }
  },
  plugins: [],
}
