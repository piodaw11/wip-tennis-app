import { darken, lighten } from '@mui/system'

const colors = {
  green: {
    light: lighten('#cbf078', 0.3),
    standard: '#cbf078',
    dark: darken('#cbf078', 0.2)
  },
  yellow: {
    light: lighten('#f8f398', 0.3),
    standard: '#f8f398',
    dark: darken('#f8f398', 0.2)
  },
  orange: {
    light: lighten('#f1b963', 0.3),
    standard: '#f1b963',
    dark: darken('#f1b963', 0.2)
  },
  red: {
    light: lighten('#e46161', 0.3),
    standard: '#e46161',
    dark: darken('#e46161', 0.2)
  },
  black: {
    light: lighten('#333', 0.3),
    standard: '#333',
    dark: darken('#333', 0.2)
  },
  white: {
    light: lighten('#ccc', 0.3),
    standard: '#ccc',
    dark: darken('#ccc', 0.2)
  }
}

export default colors
