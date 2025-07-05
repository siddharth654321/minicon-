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
  { image: '/images/mockup 6.png', title: 'Sweatshirts' },
];

export default function CategoryCards() {

  return (
    <Box sx={{ padding: { xs: 1, sm: 2, md: 3 }, mb: 4 }}>
      <Grid container spacing={2}>
        {categories.map((category, idx) => (
          <Grid
            item
            xs={6}
            sm={4}
            key={idx}
            sx={{
              position: 'relative',
              aspectRatio: '16/9',
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
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0,0,0,0.4)',
                px: 1,
                py: 0.5,
              }}
            >
              <Typography
                variant="subtitle1"
                color="#fff"
                fontWeight={500}
                sx={{ fontFamily: 'sans-serif' }}
              >
                {category.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
