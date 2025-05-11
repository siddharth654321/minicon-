'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();                 // ✅ hook inside the component

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
          <Typography color="white" sx={{ fontSize: '0.6rem', fontWeight: 200 }}>
            {product.subtitle}
          </Typography>
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
