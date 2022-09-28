/*const PRIMARY = {
  lighter: '#b8f9dd',
  light: '#5af2b1',
  main: '#11d481',
  dark: '#0da564',
  darker: '#0a7648'
};*/
/*const PRIMARY = {
  white: '#e9fcf7',
  lighter: '#bcf6e6',
  light: '#36e3b4',
  main: '#1cc99b',
  dark: '#169d78',
  darker: '#107056',
  black: '#094334'
};*/
const PRIMARY = {
  white: '#d4c5ec',
  lighter: '#b79fe0',
  light: '#9a78d3',
  main: '#7d52c7',
  dark: '#6438ad',
  darker: '#4e2c87',
  black: '#371f60'
};
const SECONDARY = {
  lighter: '#fff8d9',
  light: '#ffea8c',
  main: '#ffd826',
  dark: '#ffd30d',
  darker: '#f2c600'
};
const BACKGROUND = {
  lightSurface: '#f2f3f2',
  darkSurface: '#3d4340',
  lightBackground: '#FFF',
  darkBackground: '#242826'
};
const TEXT = {
  primary: PRIMARY.main,
  secondary: SECONDARY.main,
  lighter: BACKGROUND.lightBackground,
  light: BACKGROUND.lightSurface,
  dark: BACKGROUND.darkSurface,
  darker: BACKGROUND.darkBackground
}



const palette = (mode) => ({
  primary: PRIMARY,
  secondary: SECONDARY,
  background: {
    paper: mode === 'dark' ? BACKGROUND.darkSurface : BACKGROUND.lightSurface,
    default: mode === 'dark' ? BACKGROUND.darkBackground : BACKGROUND.lightBackground
  },
  text: TEXT
});

export default palette;
