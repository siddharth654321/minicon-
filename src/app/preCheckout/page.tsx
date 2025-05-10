// app/checkout/page.tsx
// Next.js ‑ App Router checkout page (MUI v5)
// ----------------------------------------------------
// Reads an *encoded* product / cart object from the URL
// Example navigation from the catalogue page:
//   router.push(`/checkout?cart=${encodeURIComponent(JSON.stringify([product]))}`)
// If multiple items are needed, encode an array of CartItem objects.
// ----------------------------------------------------

'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Divider,
  Link as MuiLink,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';

/* -------------------------------------------------------------------------- */
/*                                 Types                                      */
/* -------------------------------------------------------------------------- */
interface CartItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  price: number;
  size: string;
  qty: number;
}

/* -------------------------------------------------------------------------- */
/*                         Helpers + mock fallback                            */
/* -------------------------------------------------------------------------- */
const FALLBACK_CART: CartItem[] = [
  {
    id: 1,
    title: 'Punisher: Classic Logo',
    subtitle: 'Super Oversized T‑Shirt',
    img: '/images/mock/product1.jpg',
    price: 1199,
    size: 'L',
    qty: 1,
  },
];

const formatINR = (v: number) => {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(v);
  } catch {
    try {
      return `₹ ${v.toLocaleString('en-US')}`;
    } catch {
      // Absolute last‑resort fallback (rare)
      return `₹ ${v}`;
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */
export default function CheckoutPage() {
  /* ------------------------ 1️⃣ read cart from query ----------------------- */
  const searchParams = useSearchParams();
  let cart: CartItem[] = FALLBACK_CART;
  const encoded = searchParams.get('cart') || searchParams.get('product');
  if (encoded) {
    try {
      const parsed = JSON.parse(decodeURIComponent(encoded));
      // Accept both a single CartItem object OR an array of CartItem
      cart = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      /* ignore, keep fallback */
    }
  }

  /* ----------------------------- price summary ---------------------------- */
  const subtotal = useMemo(
    () => cart.reduce((acc, i) => acc + i.price * i.qty, 0),
    [cart]
  );
  const shipping = 0;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + taxes;

  /* --------------------------- form state (demo) -------------------------- */
  const [paymentMode, setPaymentMode] = useState<string>('card');

  return (
    <Box component="section" sx={{ px: { xs: 2, sm: 4 }, py: 4, maxWidth: 1400, mx: 'auto' }}>
      {/* breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <MuiLink href="/" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} underline="hover" color="inherit">
          <HomeIcon fontSize="inherit" /> Home
        </MuiLink>
        <MuiLink href="/cart" underline="hover" color="inherit">
          Cart
        </MuiLink>
        <Typography color="text.primary">Checkout</Typography>
      </Breadcrumbs>

      {/* layout */}
      <Grid container spacing={4}>
        {/* ----------------------------- cart side --------------------------- */}
        <Grid item xs={12} md={7}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Order Summary ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </Typography>

          {cart.map((item) => (
            <Card key={item.id} variant="outlined" sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex' }}>
                {/* img */}
                <Box sx={{ position: 'relative', width: 120, height: 120, flexShrink: 0 }}>
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                </Box>

                {/* details */}
                <Box sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    {item.subtitle}
                  </Typography>

                  <Typography variant="body2" mb={0.5}>
                    Size: {item.size}
                  </Typography>
                  <Typography variant="body2">Qty: {item.qty}</Typography>
                </Box>

                {/* price */}
                <Box sx={{ p: 2, textAlign: 'right' }}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {formatINR(item.price * item.qty)}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}

          {/* price breakdown */}
          <Card variant="outlined" sx={{ p: 2 }}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                Price Details
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal</Typography>
                <Typography>{formatINR(subtotal)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Shipping</Typography>
                <Typography>{shipping === 0 ? 'Free' : formatINR(shipping)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Taxes &amp; Fees</Typography>
                <Typography>{formatINR(taxes)}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography fontWeight={700}>Total</Typography>
                <Typography fontWeight={700}>{formatINR(total)}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* --------------------- shipping / payment column -------------------- */}
        <Grid item xs={12} md={5}>
          {/* shipping form */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Shipping Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="First Name" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" fullWidth size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Phone" fullWidth size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email" fullWidth size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Address Line 1" fullWidth size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Address Line 2" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="City" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="State / Province" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Pincode" fullWidth size="small" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* payment mode */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Payment Method
              </Typography>
              <Select
                fullWidth
                size="small"
                value={paymentMode}
                onChange={(e) => setPaymentMode(String(e.target.value))}
              >
                <MenuItem value="card">Credit / Debit Card</MenuItem>
                <MenuItem value="upi">UPI</MenuItem>
                <MenuItem value="cod">Cash on Delivery</MenuItem>
              </Select>
            </CardContent>
          </Card>

          <Button variant="contained" color="primary" size="large" fullWidth>
            PLACE ORDER
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
