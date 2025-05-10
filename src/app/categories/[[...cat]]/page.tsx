'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
} from '@mui/material';
import Grid from '@mui/material/Grid';

/* -------------------------------------------------------------------------- */
/*                        Main dummy catalogue data                           */
/* -------------------------------------------------------------------------- */
import { PRODUCTS as ALL_PRODUCTS } from '@/app/dummyData'; // from src/app/dummuData.ts

/* Derive category & size lists straight from the data */
const ALL_FILTERS = {
  categories: Array.from(new Set(ALL_PRODUCTS.map((p) => p.subtitle))).sort(),
  size: Array.from(new Set(ALL_PRODUCTS.map((p) => p.size))).sort(), // ['S','M',…]
};

export default function CataloguePage() {
  const router = useRouter();                        
  /* ---------------- Parse /categories/[label]/[item] ---------------------- */
  const pathname = usePathname();                         // e.g. /categories/styles/graphic-tees
  const catSegments = useMemo(() => pathname.split('/').slice(2), [pathname]);
  const [sortOpt, setSortOpt] = useState<string>('');

  /* ---------------- Filter products by label / item ----------------------- */
  const filteredProducts = useMemo(() => {
    if (catSegments.length === 0) return ALL_PRODUCTS;     // /categories → all
    const [labelSlug, itemSlug] = catSegments;            // itemSlug may be undefined
    if (!itemSlug) return ALL_PRODUCTS.filter(p => p.label === labelSlug);
    return ALL_PRODUCTS.filter(
      p => p.label === labelSlug && p.item === itemSlug
    );
  }, [catSegments]);

  /* ---------------- Optional client-side sorting -------------------------- */
  const products = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortOpt) {
      case 'new':        return list.reverse();           // dummy “newest first”
      case 'price_low':  return list.sort((a, b) => a.price - b.price);
      case 'price_high': return list.sort((a, b) => b.price - a.price);
      default:           return list;
    }
  }, [filteredProducts, sortOpt]);

  /* ---------------- Human-readable heading -------------------------------- */
  const heading = useMemo(() => (
    catSegments.length === 0
      ? 'All Products'
      : catSegments.join(' • ').replace(/-/g, ' ')
  ), [catSegments]);

  /* ==============================  RENDER  =============================== */
  return (
    <Box component="section" sx={{ display: 'flex', px: 2, py: 4, gap: 4 }}>
      {/* ------------------------------- Sidebar ---------------------------- */}
      <Box sx={{ width: 260, flexShrink: 0, overflowY: 'auto' }}>
        {/* Category filter */}
        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          CATEGORIES
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search for Categories"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />
        <List dense sx={{ maxHeight: 320, overflowY: 'auto' }}>
          {ALL_FILTERS.categories.map((c) => (
            <ListItem key={c} disableGutters>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={<Typography variant="body2">{c}</Typography>}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Size filter */}
        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          SIZE
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {ALL_FILTERS.size.map((s) => (
            <Box
              key={s}
              sx={{
                border: '1px solid',
                borderColor: 'grey.400',
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ---------------------------- Product grid -------------------------- */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Top bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {heading} — {products.length} items
          </Typography>

          <Select
            size="small"
            displayEmpty
            value={sortOpt}
            onChange={(e) => setSortOpt(e.target.value)}
          >
            <MenuItem value="">Select Sorting Options</MenuItem>
            <MenuItem value="new">Newest First</MenuItem>
            <MenuItem value="price_low">Price — Low to High</MenuItem>
            <MenuItem value="price_high">Price — High to Low</MenuItem>
          </Select>
        </Box>

        {/* Product cards */}
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
              <Card  variant="outlined" sx={{ height: '100%' }}>
                <CardActionArea  
onClick={() => {
      const encoded = encodeURIComponent(JSON.stringify(p));
      router.push(`/preCheckout`);
    }}
                  sx={{ height: '100%' }}>
                  <CardMedia sx={{ position: 'relative', height: 260 }}>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width:600px) 100vw,
                             (max-width:1200px) 50vw,
                             25vw"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom noWrap>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.subtitle}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={700} mt={1}>
                      ₹ {p.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
