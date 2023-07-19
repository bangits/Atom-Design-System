export default {
  preflight: false,
  include: ['./src/view/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          'scampi': { value: '#6667AB' },
          'black-color': { value: '#48485D' }
        }
      }
    }
  },
  outdir: './src/view/styles'
}