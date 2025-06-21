'use client';

import Image from 'next/image';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '../AuthProvider';

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<{
  product: Product;
  initialIsWished?: boolean;
  initialCartQty?: number;
}> = ({ product, initialIsWished, initialCartQty }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [isWished, setIsWished] = useState(initialIsWished ?? false);
  const [cartQty, setCartQty] = useState(initialCartQty ?? 0);

  useEffect(() => {
    if (!user) return;
    if (initialIsWished !== undefined && initialCartQty !== undefined) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      const headers: Record<string, string> = {};
      if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
      fetch(`/api/wishlist?productId=${product.id}`, { headers })
        .then(res => res.ok ? res.json() : null)
        .then(data => setIsWished(!!data));
      fetch(`/api/cart?productId=${product.id}`, { headers })
        .then(res => res.ok ? res.json() : null)
        .then(data => setCartQty(data?.quantity ?? 0));
    });
  }, [user, product.id, initialIsWished, initialCartQty]);

  useEffect(() => {
    if (initialIsWished !== undefined) setIsWished(initialIsWished);
  }, [initialIsWished]);

  useEffect(() => {
    if (initialCartQty !== undefined) setCartQty(initialCartQty);
  }, [initialCartQty]);

  // Handlers
  const handleWishlistToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
    if (isWished) {
      await fetch('/api/wishlist', { method: 'DELETE', headers, body: JSON.stringify({ product_id: product.id }) });
      setIsWished(false);
    } else {
      await fetch('/api/wishlist', { method: 'POST', headers, body: JSON.stringify({ product_id: product.id }) });
      setIsWished(true);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers,
      body: JSON.stringify({ product_id: product.id, quantity: 1 })
    });
    if (res.ok) {
      const data = await res.json();
      setCartQty(data.quantity);
    }
  };

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleAddToCart(e);
  };

  const handleDecrease = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session) headers['Authorization'] = `Bearer ${session.access_token}`;
    if (cartQty <= 1) {
      await fetch('/api/cart', { method: 'DELETE', headers, body: JSON.stringify({ product_id: product.id }) });
      setCartQty(0);
    } else {
      const res = await fetch('/api/cart', {
        method: 'PUT',
        headers,
        body: JSON.stringify({ product_id: product.id, quantity: cartQty - 1 })
      });
      if (res.ok) {
        const data = await res.json();
        setCartQty(data.quantity);
      }
    }
  };

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Go to cart page with this specific product for "buy now"
    // The cart component will handle adding the product with quantity 1
    router.push(`/cart?buyNow=${product.id}`);
  };

  return (
    <Box
      onClick={() => router.push(`/preCheckout?id=${encodeURIComponent(product.id)}`)}
      sx={{
        width: { xs: '90vw', sm: '45vw', md: '20vw' },
        minWidth: { xs: 'auto', sm: 220 },
        maxWidth: { xs: '100%', sm: 300 },
        height: { xs: '45vh', sm: '50vh' },
        minHeight: { xs: 280, sm: 340 },
        maxHeight: { xs: 360, sm: 400 },
        border: '1px solid #ededed',
        borderRadius: 4,
        boxShadow: 1,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        m: { xs: 1, sm: 1.5, md: 2 }
      }}
    >
      {/* --- Product Image --- */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width:600px) 90vw, (max-width:900px) 45vw, 20vw"
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
          px: { xs: 1.5, sm: 2 },
          pt: { xs: 1, sm: 1.5 },
          pb: { xs: 0.5, sm: 1 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 0.25, sm: 0.5 },
        }}
      >
        {/* Info */}
        <Typography 
          variant="subtitle1" 
          fontWeight={700} 
          color="black" 
          noWrap 
          sx={{ 
            fontFamily: 'sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {product.title}
        </Typography>
        <Typography 
          variant="body2" 
          fontWeight={400} 
          color="text.secondary" 
          noWrap 
          sx={{ 
            fontFamily: 'sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.875rem' }
          }}
        >
          {product.subtitle}
        </Typography>
        <Typography 
          variant="subtitle2" 
          fontWeight={600} 
          color="black" 
          sx={{ 
            mb: { xs: 0.5, sm: 1 }, 
            fontFamily: 'sans-serif',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          ₹{product.price}
          <Typography
          variant="body2"
          fontWeight={400}
          color="text.secondary"
          sx={{
            textDecoration: 'line-through',
            fontFamily: 'sans-serif',
            fontSize: { xs: '0.8rem', sm: '0.95rem' },
            display: 'inline',
            ml: 1,
          }}
        >
            ₹{product.price + 200}
        </Typography>
        </Typography>
        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          <IconButton
            aria-label="add to wishlist"
            onClick={handleWishlistToggle}
            sx={{ 
              color: isWished ? 'red' : 'grey.600',
              padding: { xs: 0.5, sm: 1 }
            }}
          >
            <FavoriteIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
          {cartQty === 0 ? (
            <IconButton
              aria-label="add to cart"
              onClick={handleAddToCart}
              sx={{ color: 'grey.600', padding: { xs: 0.5, sm: 1 } }}
            >
              <ShoppingCartIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 1 }}>
              <IconButton onClick={handleDecrease} size="small" sx={{ p: 0.5 }}>
                <RemoveIcon fontSize="inherit" />
              </IconButton>
              <Typography sx={{ mx: 0.5, fontSize: { xs: '0.8rem', sm: '0.875rem' }, fontFamily: 'sans-serif' }}>
                {cartQty}
              </Typography>
              <IconButton onClick={handleIncrease} size="small" sx={{ p: 0.5 }}>
                <AddIcon fontSize="inherit" />
              </IconButton>
            </Box>
          )}
          <Button
            onClick={handleBuyNow}
            size="small"
            variant="contained"
            sx={{
              ml: 'auto',
              mr: { xs: 3, sm: 3 },
              background: '#fe5000',
              color: 'white',
              fontWeight: 700,
              borderRadius: 3,
              px: { xs: 1, sm: 2 },
              textTransform: 'none',
              fontSize: { xs: '0.8rem', sm: '0.9375rem' },
              boxShadow: 'none',
              backgroundColor: 'black',
              fontFamily: 'sans-serif',
              '&:hover': { background: 'black' },
              py: { xs: 0.5, sm: 1 }
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
