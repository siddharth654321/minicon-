'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();               
  const [isWished, setIsWished] = useState(false); 

  const handleWishlistToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setIsWished((prev) => !prev);
  };
  return (
    <Box
      onClick={() => router.push(`/preCheckout?id=${encodeURIComponent(product.id)}`)}
      sx={{
        height: '50vh',
        width: '20vw',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#1a1a1a',
        cursor: 'pointer',
      }}
    >
      {/* ───────── Grid layout inside the card ───────── */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width:768px) 100vw, 20vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.titleContainer}>
          <Typography color="white" sx={{ fontSize: '0.8rem', fontWeight: 200 }}>
            {product.title}
          </Typography>
        </div>

        <div className={styles.subtitleContainer}>
           <IconButton
            aria-label="add to wishlist"
            onClick={handleWishlistToggle}
            sx={{
              color: isWished ? 'red' : 'white',
              p: 0.5,
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </div>

        <div className={styles.priceContainer}>
          <Typography color="white" sx={{ fontSize: '0.6rem', fontWeight: 100 }}>
            ₹{product.price}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
