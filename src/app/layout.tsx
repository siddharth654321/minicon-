import Header from './components/header';
import Footer from './components/footer';   // ← import here

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1, paddingTop: '8vh' }}>{children}</main>
        <Footer />                         
      </body>
    </html>
  );
}
