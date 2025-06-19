'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/app/dummyData';
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
import { supabase } from '@/lib/supabaseClient';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const headers: Record<string, string> = {};
      if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
      fetch('/api/wishlist', { headers })
        .then(res => res.ok ? res.json() : [])
        .then(data => setWishlist(data.map((w: any) => w.product)));
    });
  }, []);

  const removeFromWishlist = async (id: number) => {
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
    const res = await fetch('/api/wishlist', {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ product_id: id })
    });
    if (res.ok) {
      setWishlist((curr) => curr.filter((item) => item.id !== id));
    }
  };

  const addToCart = (product: Product) => {
    // TODO: Connect to cart state/api
    alert(`Added "${product.title}" to cart!`);
  };

  const buyNow = (product: Product) => {
    router.push(`/checkout?product=${encodeURIComponent(JSON.stringify(product))}`);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto', backgroundColor:'#fff'}}>
      <Typography color='black' variant="h4" fontWeight={700} mb={3} align="center" fontFamily="sans-serif">
        Your Wishlist
      </Typography>
      {wishlist.length === 0 ? (
        <Typography align="center" color='black' fontFamily="sans-serif">
          Your wishlist is empty!
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card variant="outlined" sx={{ position: 'relative', backgroundColor:'#fff' }}>
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
                  <Typography variant="subtitle1" fontWeight={600} noWrap fontFamily="sans-serif">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontFamily="sans-serif">
                    {item.subtitle}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} mt={1} fontFamily="sans-serif">
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
