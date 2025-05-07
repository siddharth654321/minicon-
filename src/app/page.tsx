'use client';

import Image from 'next/image';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';



const heroImages = [
  '/images/test1.png',
  '/images/test2.png',
  '/images/test3.png',
] as const;

const marqueeImages = [
  '/images/cloth1.png',
  '/images/cloth2.png',
  '/images/cloth3.svg',
  '/images/cloth4.png',
  '/images/cloth5.png',
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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Typography variant="h1"
        align="center"
        color="black">
        Welcome to MINIcon
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
            <Image src={src} alt="" fill priority />
          </Box>
        ))}
      </Box>
      <Typography variant="h4"
        align="center"
        style={{margin:'5vh 0 2vh 0'}}
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
              sx={{ position: 'relative', flex: '0 0 33.33%' }}
            >
              <Image src={src} alt="" fill />
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h4"
        align="center"
        style={{margin:'5vh 0 2vh 0'}}
        color="black">
        New Arrivals
      </Typography>

      <Grid  justifyContent="center"  container spacing={3}>
                {MOCK_PRODUCTS.map((p) => (
                  <Grid item key={p.id}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardActionArea sx={{ height: '100%' }}>
                        <CardMedia sx={{ position: 'relative', height: 260 }}>
                          <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                        </CardMedia>
                        <CardContent>
                          <Typography variant="subtitle2" fontWeight={600} gutterBottom noWrap>
                            {p.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.subtitle}
                          </Typography>
                          <Typography variant="subtitle2" fontWeight={700} mt={1}>
                            ₹ {p.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
    </Box>
  );
}
