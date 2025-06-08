import Header from './components/header';
import Footer from './components/footer';  
import MuiTheme from './components/ThemeProvider';
import { Box } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap"
          rel="stylesheet"
        />
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
              px: { xs: 1, sm: 2, md: 3 }
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
