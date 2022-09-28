import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
  palette: palette('light'),
  shape: {
      borderRadius: 12
  }
});

export { theme, palette };
