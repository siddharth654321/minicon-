'use client';

import Image from 'next/image';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { PRODUCTS } from './dummyData';
import styles from './page.module.css';
import { ProductCard } from './components/productCard';



const heroImages = [
  '/images/mockup4.png',
  '/images/M-9.png',
  '/images/mockup4.png',
] as const;

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
const MOCK_PRODUCTS = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: ['TSS Originals: Street Graffiti', 'Textured T‑Shirt: Kung Fu Panda Peace', 'Star Wars: Darth Vader Pattern', 'TSS Originals: Vintage Pane'][i % 4],
  subtitle: ['Oversized T‑Shirts', 'T‑Shirts', 'Holiday Shirts'][i % 3],
  price: [1499, 899, 1299, 1399][i % 4],
  img: `/images/mock/product${(i % 4) + 1}.jpg`, // place holder images
}));


export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        backgroundColor: '#111'
      }}
    >
      <Typography
        sx={{ margin: '3vh 0 5vh 0' }}
        variant="h1"
        align="center"
        color="white">
        Welcome to MINICON
      </Typography>
      <Box
        component="section"
        sx={{
          flex: '0 0 60vh',
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >

        {heroImages.map((src) => (
          <Box
            key={src}
            sx={{
              position: 'relative',
              flex: '0 0 100%',
              scrollSnapAlign: 'start',
            }}
          >
            <Image src={src} alt="" fill priority style={{ objectFit: 'contain' }} />
          </Box>
        ))}
      </Box>
      <Typography variant="h4"
        align="center"
        style={{ margin: '5vh 0 5vh 0' }}
        color="white">
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
              sx={{ position: 'relative', flex: '0 0 33.33%' }}
            >
              <Image src={src} alt="" fill style={{ objectFit: 'contain' }} />
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h4"
        align="center"
        style={{ margin: '5vh 0 5vh 0' }}
        color="white">
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
