'use client';

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
      <div style={{ margin: '30vh 0 30vh 0' }}>
        <Typography
          sx={{ margin: '0 0 2vh 0' }}
          variant="h1"
          align="center"
          color="black">
          Bold Streetwear
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="black">
          For men who don&#39;t follow trends, they set them.
        </Typography>
      </div>

      <Typography variant="h4"
        align="center"
        style={{ margin: '5vh 0 10vh 0' }}
        color="black">
        Top picks for the week
      </Typography>

      <Box
        component="section"
        sx={{ flex: '0 0 40vh', overflow: 'hidden' }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            animation: `${scroll} 30s linear infinite`,
          }}
        >
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                flex: '0 0 33.33%',
                padding: '1rem'
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                style={{
                  objectFit: 'contain',
                  borderRadius: '20px' // 👈 Added curved border here
                }}
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
