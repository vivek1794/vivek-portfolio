import { createMuiTheme } from '@material-ui/core/styles';

const COLORS = {
  background: {
    main: '#2B2C2C',
    secondary: '#404242',
    light: '#2D2E2E',
    dark: '#292A2A',
    medium: '#3F4040',
    page: '#212121',
  },
  green: {
    main: '#3DDC84'
  },
  text: {
    main: '#A4A5A6',
    secondary: '#979899'
  }
};

export const theme = createMuiTheme({
  palette: COLORS,
  typography: {
    h1: {
      fontWeight: 300,
      width: '100%',
      color: COLORS.green.main,
      fontSize: '4rem'
    },
    h2: {
      fontWeight: 300,
      width: '100%',
      color: COLORS.text.main,
      fontSize: '3rem'
    },
    h3: {
      color: COLORS.text.main,
      fontWeight: 600,
      fontSize: '16px',
    },
    h5: {
      color: COLORS.text.main,
      fontWeight: 600,
      fontSize: '14px',
    },
    h6: {
      color: COLORS.text.secondary,
      fontSize: '12px',
      marginTop: '8px'
    },
    body1: {
      color: COLORS.text.secondary,
      fontSize: '14px'
    },
    subtitle1: {
      color: COLORS.text.secondary,
      fontSize: '24px',
      fontWeight: 'normal'
    },
    subtitle2: {
      color: COLORS.text.main,
      fontWeight: 'normal',
      fontSize: '12px',
      marginTop: '8px'
    },
    caption: {
      color: COLORS.text.secondary,
      fontSize: '10px',
      padding: '8px 0'
    }
  },
});