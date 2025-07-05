'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GridLegacy as Grid } from '@mui/material';


interface CategoryCardProps {
  image: string;
  title: string;
}

const categories: CategoryCardProps[] = [
  { image: '/images/under999.png', title: 'Under 999' },
  { image: '/images/tshirts.png', title: 'T-shirts' },
  { image: '/images/oversized.png', title: 'Oversized' },
  { image: '/images/relaxed.png', title: 'Relaxed' },
  { image: '/images/polo.png', title: 'Polo' },
  { image: '/images/sweatshirts.png', title: 'Sweatshirts' },
];

export default function CategoryCards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
              height: { xs: '30vh', sm: '40vh', md: '45vh' },
              position: 'relative',
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
                bgcolor: 'rgba(0,0,0,0.5)',
                px: 1.5,
                py: 0.5,
                borderTopRightRadius: 8,
              }}
            >
              <Typography variant="subtitle1" color="#fff" fontWeight={600}>
                {category.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
