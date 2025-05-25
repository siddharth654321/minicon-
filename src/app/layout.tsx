import Header from './components/header';
import Footer from './components/footer';  
import MuiTheme from './components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <MuiTheme>
            <div style={{marginTop: '16vh'}}>
            {children}
            </div>
         
          </MuiTheme>
       
          </main>
        <Footer />                         
      </body>
    </html>
  );
}
