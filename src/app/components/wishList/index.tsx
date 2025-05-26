'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/app/dummyData';
import { GridLegacy as Grid } from '@mui/material';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WishlistPage() {
  // Dummy: pre-populated with a few items (IDs 1, 2, 3)
  const [wishlist, setWishlist] = useState(PRODUCTS.slice(0, 3));
  const router = useRouter();

  const removeFromWishlist = (id: number) => {
    setWishlist((curr) => curr.filter((item) => item.id !== id));
  };

  const addToCart = (product: any) => {
    // TODO: Connect to cart state/api
    alert(`Added "${product.title}" to cart!`);
  };

  const buyNow = (product: any) => {
    // TODO: Connect to buy now flow, pass single product in URL or context
    router.push(`/checkout?product=${encodeURIComponent(JSON.stringify(product))}`);
  };
    console.log("PRODUCTS", PRODUCTS);

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, maxWidth: 1200, mx: 'auto', backgroundColor:'#111'}}>
      <Typography color='white' variant="h4" fontWeight={700} mb={3} align="center">
        Your Wishlist
      </Typography>
      {wishlist.length === 0 ? (
        <Typography align="center"  color='white'>
          Your wishlist is empty!
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card variant="outlined" sx={{ position: 'relative',backgroundColor:'black' }}>
                <IconButton
                  aria-label="Remove from wishlist"
                  sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <Box sx={{ position: 'relative', height: 220 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                    sizes="(max-width:600px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </Box>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} mt={1}>
                    ₹ {item.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => buyNow(item)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
