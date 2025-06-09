
import Image from 'next/image';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { PRODUCTS } from './dummyData';
import { ProductCard } from './components/productCard';
import { GridLegacy as Grid } from '@mui/material';  

const marqueeImages = [
  '/images/mockup 3.png',
  '/images/mockup 6.png',
  '/images/M-10.png',
  '/images/M-11.png',
  '/images/M-8.png',
] as const;

const scroll = keyframes`
  0%   { transform: translateX(0);   }
  100% { transform: translateX(-50%); }
`;

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        backgroundColor: '#fff'
      }}
    >
      {/* Hero section replaced with looping video */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <video
          src="/gifs/Banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', }}
        />
      </div>

      <Typography variant="h4"
        align="center"
        style={{ margin: '5vh 0 10vh 0' }}
        color="black">
        Top picks for the week
      </Typography>

      {/* Horizontally scrolling marquee with border radius */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          height: '40vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            animation: `${scroll} 30s linear infinite`,
            width: 'max-content',
          }}
        >
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                width: { xs: '150px', sm: '220px', md: '300px' },
                height: { xs: '120px', sm: '180px', md: '240px' },
                marginRight: '10vw',
                borderRadius: '20px',
                overflow: 'hidden',
                flex: '0 0 auto',
                boxShadow: 2,
                background: '#f5f5f5',
              }}
            >
              <Image
                src={src}
                alt="marquee image"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
                sizes="(max-width: 600px) 150px, (max-width: 900px) 220px, 300px"
                priority={i < 2}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h4"
        align="center"
        style={{ margin: '20vh 0 10vh 0' }}
        color="black">
        New Arrivals
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {PRODUCTS.map((p) => (
          <Grid item key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
