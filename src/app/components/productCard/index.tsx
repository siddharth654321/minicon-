'use client';

import Image from 'next/image';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
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
  const [addCart, setAddCart] = useState(false);

  // Handlers
  const handleWishlistToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsWished((prev) => !prev);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
   setAddCart((prev) => !prev);
  };

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Go to checkout/buy page
    router.push(`/checkout?product=${encodeURIComponent(JSON.stringify(product))}`);
  };

  return (
    <Box
      onClick={() => router.push(`/preCheckout?id=${encodeURIComponent(product.id)}`)}
      sx={{
        width: '20vw',
        minWidth: 220,
        maxWidth: 300,
        height: '50vh',
        minHeight: 340,
        maxHeight: 400,
        border: '1px solid #ededed',
        borderRadius: 4,
        boxShadow: 1,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* --- Product Image --- */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width:768px) 100vw, 20vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* --- Info and Actions Overlay (white) --- */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          bgcolor: 'rgba(255,255,255,0.98)',
          px: 2,
          pt: 1.5,
          pb: 1,
          
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
        }}
      >
        {/* Info */}
        <Typography variant="subtitle1" fontWeight={700} color="black" noWrap sx={{ fontFamily: 'sans-serif' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" fontWeight={400} color="text.secondary" noWrap sx={{ fontFamily: 'sans-serif' }}>
          {product.subtitle}
        </Typography>
        <Typography variant="subtitle2" fontWeight={600} color="black" sx={{ mb: 1, fontFamily: 'sans-serif' }}>
          ₹{product.price}
        </Typography>
        {/* Actions */}
        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
          <IconButton
            aria-label="add to wishlist"
            onClick={handleWishlistToggle}
            sx={{ color: isWished ? 'red' : 'grey.600' }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="add to cart"
            onClick={handleAddToCart}
            sx={{ color: addCart ? '#3399ff' : 'grey.600'}}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button
            onClick={handleBuyNow}
            size="small"
            variant="contained"
            sx={{
              ml: 'auto',
              mr:3,
              background: '#fe5000',
              color: 'white',
              fontWeight: 700,
              borderRadius: 3,
              px: 2,
              textTransform: 'none',
              fontSize: 15,
              boxShadow: 'none',
              backgroundColor:'black',
              fontFamily: 'sans-serif',
              '&:hover': { background: 'black' },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
