'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { keyframes } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GridLegacy as Grid } from '@mui/material';
import { ProductCard } from './components/productCard';
import { useAuth } from './components/AuthProvider';
import { supabase } from '@/lib/supabaseClient';
import type { Product } from '@/types';
import CategoryCards from './components/categoryCards';

// Define types for API responses
interface WishlistItem {
  product: Product;
}

interface CartItem {
  product: Product;
  quantity: number;
}

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [products, setProducts] = useState<Product[]>([]);
  const { user } = useAuth();
  const [wishedIds, setWishedIds] = useState<Set<number>>(new Set());
  const [cartMap, setCartMap] = useState<Map<number, number>>(new Map());

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

  useEffect(() => {
    if (!user) {
      setWishedIds(new Set());
      setCartMap(new Map());
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      const headers: Record<string, string> = {};
      if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
      fetch('/api/wishlist', { headers })
        .then(res => res.ok ? res.json() : [])
        .then((data: WishlistItem[]) => setWishedIds(new Set(data.map((w) => w.product.id))));
      fetch('/api/cart', { headers })
        .then(res => res.ok ? res.json() : [])
        .then((data: CartItem[]) => {
          const map = new Map<number, number>();
          data.forEach((c) => map.set(c.product.id, c.quantity));
          setCartMap(map);
        });
    });
  }, [user]);

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
            xs: 1,  // Reduced from 2vh/5vh to fixed pixels
            sm: 1  // Reduced from 5vh/10vh to fixed pixels
          },
          fontWeight: 600
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
          mb: { xs: 4, sm: 1 } // Add margin bottom to separate from next section
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: `${scroll} ${isMobile ? 20 : 30}s linear infinite`,
            gap: { xs: 1, sm: 1.5 }, // Minimal gap between images
          }}
        >
          {/* First set of images */}
          {marqueeImages.map((src, i) => (
            <Box
              key={`${src}-1-${i}`}
              sx={{
                position: 'relative',
                width: { xs: '70vw', sm: '28vw' },
                minWidth: { xs: 240, sm: 280 },
                maxWidth: { xs: 280, sm: 360 },
                height: { xs: '50vh', sm: '40vh' },
                minHeight: { xs: 300, sm: 320 },
                maxHeight: { xs: 360, sm: 400 },
                borderRadius: { xs: 2, sm: 3 },
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <Image
                src={src}
                alt={`Marquee ${i + 1}`}
                fill
                sizes="(max-width:600px) 70vw, 28vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeImages.map((src, i) => (
            <Box
              key={`${src}-2-${i}`}
              sx={{
                position: 'relative',
                width: { xs: '70vw', sm: '28vw' },
                minWidth: { xs: 240, sm: 280 },
                maxWidth: { xs: 280, sm: 360 },
                height: { xs: '50vh', sm: '40vh' },
                minHeight: { xs: 300, sm: 320 },
                maxHeight: { xs: 360, sm: 400 },
                borderRadius: { xs: 2, sm: 3 },
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <Image
                src={src}
                alt={`Marquee duplicate ${i + 1}`}
                fill
                sizes="(max-width:600px) 70vw, 28vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Typography variant="h4" 
          align="center" 
          sx={{ 
            mb: { 
              xs: 1,  // Reduced margin bottom
              sm: 1,
              md: 3,
              lg: 3
            },
            fontWeight: 600
          }}
          color="black">
          Trending Category
        </Typography>
          <CategoryCards/>
      {/* Product grid section with minimal spacing */}
      <Box sx={{ 
        padding: { 
          xs: '0 8px 0 0',    // Minimal padding on mobile
          sm: '0 16px 0 0',   // Small padding on tablets
          md: '0 24px 0 0'    // Moderate padding on desktop
        },
        mb: 6 
      }}>
        <Typography variant="h4" 
          align="center" 
          sx={{ 
            mb: { 
              xs: 1,  // Reduced margin bottom
              sm: 1 
            },
            fontWeight: 600
          }}
          color="black">
          New Arrivals
        </Typography>
        
        <Grid  container spacing={{ xs: 0.5, sm: 1, md: 1 }} justifyContent="center">
        {products.slice(0, 51).map((p) => (
            <Grid item xs={6} sm={4} md={1.5} key={p.id}>
                            <ProductCard
                product={p}
                initialIsWished={wishedIds.has(p.id)}
                initialCartQty={cartMap.get(p.id) ?? 0}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}