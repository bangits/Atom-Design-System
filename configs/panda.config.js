export default {
  preflight: false,
  include: ['./src/view/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: 'violet' },
          secondary: { value: 'blue' }
        }
      }
    }
  },
  outdir: './src/view/styles'
}