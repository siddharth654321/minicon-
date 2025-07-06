'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { GridLegacy as Grid } from '@mui/material';

interface CategoryCardProps {
  image: string;
  title: string;
}

const categories: CategoryCardProps[] = [
  { image: '/images/M-13.png', title: 'Under 999' },
  { image: '/images/M-14.png', title: 'T-shirts' },
  { image: '/images/M-15.png', title: 'Oversized' },
  { image: '/images/mockup 3.png', title: 'Relaxed' },
  { image: '/images/mockup 5.png', title: 'Polo' },
  { image: '/images/mockup 6.png', title: 'Gym vest' },
  { image: '/images/M-13.png', title: 'Sweatshirts' },
  { image: '/images/M-15.png', title: 'Puff' },
  { image: '/images/M-14.png', title: 'Supima' },
];

export default function CategoryCards() {
  return (
    <Box sx={{ mb: 4, px: { xs: 1, sm: 2 } }}> {/* Added horizontal padding */}
      <Grid container spacing={{ xs: 1, sm: 2 }}> {/* Added spacing */}
        {categories.map((category, idx) => (
          <Grid
            item
            xs={4} // Changed from 6 to 4 for 3 columns on mobile
            sm={4}
            key={idx}
          >
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '9/16',
                width: '100%',
                overflow: 'hidden',
                borderRadius: 2,
              }}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* Dark to transparent vignette overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 10%, transparent 20%)',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  px: 1,
                  py: 0.5,
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  fontWeight={500}
                  sx={{ 
                    fontFamily: 'sans-serif',
                    fontSize: { xs: '0.875rem', sm: '1rem' } // Smaller font on mobile
                  }}
                >
                  {category.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}