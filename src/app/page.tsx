'use client';

import Image from 'next/image';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { ProductCard } from './components/productCard';
import { useEffect, useState } from 'react';
import { GridLegacy as Grid } from '@mui/material';  
import { Product } from './dummyData';

const marqueeImages = [
  '/images/mockup 3.png',
  '/images/mockup 6.png',
  '/images/M-10.png',
  '/images/M-11.png',
  '/images/M-8.png',
] as const;

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        console.log('Products from Supabase:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: {
            xs: '100vh',
            sm: 'auto'
          }
        }}
      >
        <video
          src={isMobile ? "/gifs/BannerMobile.mp4" : "/gifs/Banner.mp4"}
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%',
            height: isMobile ? '100%' : 'auto',
            objectFit: 'cover'
          }}
        />
      </Box>

      <Typography variant="h4"
        align="center"
        sx={{
          margin: {
            xs: '2vh 0 5vh 0',  // smaller margins for mobile
            sm: '5vh 0 10vh 0'  // original margins for larger screens
          }
        }}
        color="black">
        Top picks for the week
      </Typography>

      {/* Horizontally scrolling marquee with border radius */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            xs: '50vh',
            sm: '40vh'
          },
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
            width: 'max-content',
            animation: `${scroll} ${isMobile ? '20s' : '30s'} linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            userSelect: 'none',
            touchAction: 'pan-x',
            '-webkit-overflow-scrolling': 'touch',
            '-ms-overflow-style': 'none',
          }}
        >
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                width: {
                  xs: '80vw',
                  sm: '280px',
                  md: '100'
                },
                height: {
                  xs: '45vh',
                  sm: '220px',
                  md: '320px'
                },
                marginRight: {
                  xs: '4vw',
                  sm: '5vw'
                },
                borderRadius: '20px',
                overflow: 'hidden',
                flex: '0 0 auto',
                boxShadow: 2,
                background: '#f5f5f5',
                pointerEvents: 'auto',
                touchAction: 'pan-x',
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
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 280px, 400px"
                priority={i < 2}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h4"
        align="center"
        sx={{
          margin: {
            xs: '10vh 0 5vh 0',  // smaller margins for mobile
            sm: '20vh 0 10vh 0'  // original margins for larger screens
          }
        }}
        color="black">
        New Arrivals
      </Typography>

      <Box component="section" sx={{ px: { xs: 1, sm: 2 }, py: 4 }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((p) => (
            <Grid item xs={6} sm={4} md={3} key={p.id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
