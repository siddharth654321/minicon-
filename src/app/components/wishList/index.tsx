'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/app/dummyData';
import { GridLegacy as Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { supabase } from '@/lib/supabaseClient';
import { ProductCard } from '../productCard';

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
            <Grid item xs={12} sm={6} md={4} key={item.id} display="flex" justifyContent="center">
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
