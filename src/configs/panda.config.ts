export const pandaCssConfig = {
  preflight: false,
  include: ['./src/view/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: 'red' },
          secondary: { value: 'blue' }
        }
      }
    }
  },
  outdir: './src/view/styles'
};
