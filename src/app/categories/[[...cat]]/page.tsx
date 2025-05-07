// app/categories/[[...cat]]/page.tsx
// A common catalogue page that renders according to the catch‑all route params
// Uses Material‑UI (MUI v5) components only – no custom CSS required

'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
} from '@mui/material';

/* -------------------------------------------------------------------------- */
/*                               Mocked  data                                 */
/* -------------------------------------------------------------------------- */

// In the real app, fetch these according to the `[label]/[item]` params.
const ALL_FILTERS = {
  categories: [
    'All Weather Hoodies',
    'Bomber Jackets',
    'Bomber Neck Polos',
    'Cotton Linen Shirts',
    'Denim Jackets',
    'Denim Shirts',
    'Drop Cut T‑Shirts',
    'Easy Fit Full Sleeve T‑Shirts',
    'Easy Fit Vests',
    'Half Sleeve Shirts',
  ],
  size: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
};

const MOCK_PRODUCTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: ['TSS Originals: Street Graffiti', 'Textured T‑Shirt: Kung Fu Panda Peace', 'Star Wars: Darth Vader Pattern', 'TSS Originals: Vintage Pane'][i % 4],
  subtitle: ['Oversized T‑Shirts', 'T‑Shirts', 'Holiday Shirts'][i % 3],
  price: [1499, 899, 1299, 1399][i % 4],
  img: `/images/mock/product${(i % 4) + 1}.jpg`, // place holder images
}));

/* -------------------------------------------------------------------------- */
/*                           Catalogue  Page  Component                       */
/* -------------------------------------------------------------------------- */

export default function CataloguePage() {
  /* ------------------------------------------------------------
   * The current route gives context, e.g. /categories/styles/graphic‑tees
   * For demo, we just split the pathname. Production would use
   * the "params" prop from the server component or useSearchParams.
   * ---------------------------------------------------------- */
  const pathname = usePathname();
  const catSegments = useMemo(() => pathname.split('/').slice(2), [pathname]);
  const heading = useMemo(() => catSegments.join(' • ') || 'All Products', [catSegments]);

  return (
    <Box component="section" sx={{ display: 'flex', px: 2, py: 4, gap: 4 }}>
      {/* -------------------------------  Sidebar  ------------------------------ */}
      <Box sx={{ width: 260, flexShrink: 0, overflowY: 'auto' }}>
        {/* Category filter */}
        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          CATEGORIES
        </Typography>
        <TextField variant="outlined" placeholder="Search for Categories" size="small" fullWidth sx={{ mb: 1 }} />
        <List dense sx={{ maxHeight: 320, overflowY: 'auto' }}>
          {ALL_FILTERS.categories.map((c) => (
            <ListItem key={c} disableGutters>
              <FormControlLabel control={<Checkbox size="small" />} label={<Typography variant="body2">{c}</Typography>} />
            </ListItem>
          ))}
          <ListItem disableGutters>
          
          </ListItem>
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

      {/* -----------------------------  Product list  ---------------------------- */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Top bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            {heading} — {MOCK_PRODUCTS.length} items
          </Typography>

          <Select size="small" displayEmpty defaultValue="">
            <MenuItem value="">Select Sorting Options</MenuItem>
            <MenuItem value="new">Newest First</MenuItem>
            <MenuItem value="price_low">Price — Low to High</MenuItem>
            <MenuItem value="price_high">Price — High to Low</MenuItem>
          </Select>
        </Box>

        {/* Grid of products */}
        <Grid container spacing={3}>
          {MOCK_PRODUCTS.map((p) => (
            <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardActionArea sx={{ height: '100%' }}>
                  <CardMedia sx={{ position: 'relative', height: 260 }}>
                    <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
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
