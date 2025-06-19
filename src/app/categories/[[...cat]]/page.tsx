'use client';

import { useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Box,
  Typography,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Select,
  MenuItem,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/* -------------------------------------------------------------------------- */
/*                             Product utilities                              */
/* -------------------------------------------------------------------------- */
import { Product } from '@/app/dummyData';
import { ProductCard } from '@/app/components/productCard';

export default function CataloguePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const pathname = usePathname();
  const catSegments = useMemo(() => pathname.split('/').slice(2), [pathname]);
  const [sortOpt, setSortOpt] = useState<string>('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const filters = useMemo(() => ({
    categories: Array.from(new Set(allProducts.map(p => p.subtitle))).sort(),
    size: Array.from(new Set(allProducts.map(p => p.size))).sort(),
  }), [allProducts]);

  /* ---------------- Filter products by label / item ----------------------- */
  const filteredProducts = useMemo(() => {
    if (catSegments.length === 0) return allProducts;
    const [labelSlug, itemSlug] = catSegments;
    if (!itemSlug) return allProducts.filter(p => p.label === labelSlug);
    return allProducts.filter(
      p => p.label === labelSlug && p.item === itemSlug
    );
  }, [catSegments, allProducts]);

  /* ---------------- Optional client-side sorting -------------------------- */
  const products = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortOpt) {
      case 'new': return list.reverse();           // dummy "newest first"
      case 'price_low': return list.sort((a, b) => a.price - b.price);
      case 'price_high': return list.sort((a, b) => b.price - a.price);
      default: return list;
    }
  }, [filteredProducts, sortOpt]);

  /* ---------------- Human-readable heading -------------------------------- */
  const heading = useMemo(() => (
    catSegments.length === 0
      ? 'All Products'
      : catSegments.join(' • ').replace(/-/g, ' ')
  ), [catSegments]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: { xs: '100%', sm: 260 }, p: 2 }}>
      {/* Category filter */}
      <Typography color='black' variant="subtitle1" fontWeight={700} mb={1} sx={{ fontFamily: 'sans-serif' }}>
        CATEGORIES
      </Typography>

      <List dense sx={{ maxHeight: 320, overflowY: 'auto', color: 'black' }}>
        {filters.categories.map((c) => (
          <ListItem key={c} disableGutters>
            <FormControlLabel
              control={<Checkbox size="small" sx={{ color: 'black' }} />}
              label={<Typography variant="body2" style={{color:'black',fontFamily: 'sans-serif'}}>{c}</Typography>}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2, color: 'black' }} />

      {/* Size filter */}
      <Typography color='black' variant="subtitle1" fontWeight={700} mb={1} sx={{ fontFamily: 'sans-serif' }}>
        SIZE
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {filters.size.map((s) => (
          <Button
            key={s}
            sx={{
              border: '1px solid #000',
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              fontSize: 14,
              cursor: 'pointer',
              color: 'black',
              backgroundColor: '#fff',
              '&:hover': { backgroundColor: '#f5f5f5' },
              fontFamily: 'sans-serif'
            }}
          >
            {s}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, px: { xs: 1, sm: 2 }, py: 4, gap: 4, backgroundColor: '#fff' }}>
      {/* Mobile drawer toggle */}
      {isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color='black' variant="h6" fontWeight={600} sx={{ fontFamily: 'sans-serif' }}>
            {heading} — {products.length} items
          </Typography>
        </Box>
      )}

      {/* Sidebar/Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Box sx={{ width: 260, flexShrink: 0, overflowY: 'auto', backgroundColor: '#fff', color: 'black', borderRight: '1px solid #eee' }}>
          {drawer}
        </Box>
      )}

      {/* Main content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Top bar - only show on desktop */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography color='black' variant="h6" fontWeight={600} sx={{ fontFamily: 'sans-serif' }}>
              {heading} — {products.length} items
            </Typography>

            <Select
              size="small"
              displayEmpty
              value={sortOpt}
              onChange={(e) => setSortOpt(e.target.value)}
              sx={{
                border: '1px solid black',
                color: 'black',
                '.MuiSelect-icon': { color: 'black' },
                backgroundColor: 'transparent',
                fontFamily: 'sans-serif'
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#fff',
                    color: 'black',
                    border: '1px solid black',
                    fontFamily: 'sans-serif'
                  },
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                fontFamily: 'sans-serif'
                }}
              >
                Select Sorting Options
              </MenuItem>
              <MenuItem
                value="new"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Newest First
              </MenuItem>
              <MenuItem
                value="price_low"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Price — Low to High
              </MenuItem>
              <MenuItem
                value="price_high"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Price — High to Low
              </MenuItem>
            </Select>
          </Box>
        )}

        {/* Mobile sorting - show below the header */}
        {isMobile && (
          <Box sx={{ mb: 2 }}>
            <Select
              fullWidth
              size="small"
              displayEmpty
              value={sortOpt}
              onChange={(e) => setSortOpt(e.target.value)}
              sx={{
                border: '1px solid black',
                color: 'black',
                '.MuiSelect-icon': { color: 'black' },
                backgroundColor: 'transparent',
                fontFamily: 'sans-serif'
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: '#fff',
                    color: 'black',
                    border: '1px solid black',
                    fontFamily: 'sans-serif'
                  },
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                fontFamily: 'sans-serif'
                }}
              >
                Select Sorting Options
              </MenuItem>
              <MenuItem
                value="new"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Newest First
              </MenuItem>
              <MenuItem
                value="price_low"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Price — Low to High
              </MenuItem>
              <MenuItem
                value="price_high"
                sx={{
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },fontFamily: 'sans-serif'
                }}
              >
                Price — High to Low
              </MenuItem>
            </Select>
          </Box>
        )}

        {/* Product cards */}
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((p) => (
            <Grid item xs={6} sm={4} md={3} key={p.id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
