import { createTheme } from '@mui/material/styles';

export const smarthubColors = {
  blue: '#0096D1',
  green: '#8CC63F',
  white: '#FFFFFF',
  orange: '#F5A623',
  ink: '#10202A',
  muted: '#5C6B73',
  line: '#D9E5EA',
  softBlue: '#EAF7FC',
  softGreen: '#F1FAE8',
  softOrange: '#FFF4DE',
  surface: '#F7FBFD',
};

export const smarthubTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: smarthubColors.blue,
      dark: '#0079AA',
      light: smarthubColors.softBlue,
      contrastText: smarthubColors.white,
    },
    secondary: {
      main: smarthubColors.green,
      dark: '#679C25',
      light: smarthubColors.softGreen,
      contrastText: smarthubColors.ink,
    },
    warning: {
      main: smarthubColors.orange,
      light: smarthubColors.softOrange,
      contrastText: smarthubColors.ink,
    },
    background: {
      default: smarthubColors.white,
      paper: smarthubColors.surface,
    },
    text: {
      primary: smarthubColors.ink,
      secondary: smarthubColors.muted,
    },
    divider: smarthubColors.line,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: [
      'Pretendard',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.12,
    },
    h3: {
      fontWeight: 750,
      letterSpacing: 0,
      lineHeight: 1.18,
    },
    h4: {
      fontWeight: 750,
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.72,
    },
    body2: {
      lineHeight: 1.65,
    },
    button: {
      textTransform: 'none',
      fontWeight: 750,
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 46,
          borderRadius: 999,
          paddingInline: 22,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});
