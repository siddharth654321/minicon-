'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: "'Bagel Fat One', system-ui",
  },
  palette: {
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Bagel Fat One', system-ui",
        },
      },
    },
    
  },
});

export default function MuiTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}