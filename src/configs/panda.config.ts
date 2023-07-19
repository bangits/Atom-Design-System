export const pandaCssConfig = {
  preflight: false,
  include: ['./src/view/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#6667AB' },
          secondary: { value: '#48485D' }
        }
      }
    }
  },
  outdir: './src/view/styles'
};
