import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    grey: {
      main: '#2B2C2C',
      secondary: '#404242',
      light: '#2D2E2E',
      dark: '#292A2A',
      medium: '#3F4040'
    },
    yellow: {
      main: '#E0A80D'
    }
  },
  typography: {
    h1: {
      fontWeight: 300,
      width: '100%',
      color: '#E0A80D',
      fontSize: '4rem'
    },
    h2: {
      fontWeight: 300,
      width: '100%',
      color: '#A4A5A6',
      fontSize: '3rem'
    },
    h3: {
      color: '#A4A5A6',
      fontWeight: 600,
      fontSize: '16px',
    },
    h5: {
      color: '#A4A5A6',
      fontWeight: 600,
      fontSize: '14px',
    },
    h6: {
      color: '#979899',
      fontSize: '12px',
      marginTop: '8px'
    },
    body1: {
      color: '#979899',
      fontSize: '14px'
    },
    subtitle1: {
      color: '#979899',
      fontSize: '24px',
      fontWeight: 'normal'
    },
    subtitle2: {
      color: '#A4A5A6',
      fontWeight: 'normal',
      fontSize: '12px',
      marginTop: '8px'
    },
    caption: {
      color: '#979899',
      fontSize: '10px',
      padding: '8px 0'
    }
  },
});