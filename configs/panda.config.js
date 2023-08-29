export default {
  preflight: false,
  include: ['./src/view/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          'alabaster': {value: '#fbfafd'},
          'scampi': { value: '#6667AB' },
          'black-color': { value: '#48485D' },
          'nepal': {value: '#8ea6c1'},
          'whisper': {value: '#f0f0f7'},
          'lime-c': {value: '#00b21e'}
        }
      }
    }
  },
  outdir: 'styled-system'
}