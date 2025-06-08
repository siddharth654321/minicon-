import Header from './components/header';
import Footer from './components/footer';  
import MuiTheme from './components/ThemeProvider';
import { Box } from '@mui/material';
import { Bagel_Fat_One } from 'next/font/google';

const bagelFatOne = Bagel_Fat_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bagelFatOne.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          overflowX: 'hidden',
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <MuiTheme>
            <Box sx={{ 
              margin: { xs: '8vh 0 6vh 0', sm: '10vh 0 8vh 0' },
            }}>
              {children}
            </Box>
          </MuiTheme>
        </main>
        <Footer />                         
      </body>
    </html>
  );
}
