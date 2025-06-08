"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "../dummyData";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const PRODUCT_DESCRIPTION = [
  "100% Super Combed Cotton",
  "Pre Shrunk",
  "Bio Washed",
  "Lycra Ribbed Neck",
  "Oversized Fit",
  "wash care :",
  "Machine wash cold, inside-out,",
  "gentle cycle with mild detergent.",
  "Made in India"
];

const PreCheckout = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const value = PRODUCTS.filter((product) => product.id === Number(id));
  const ALL_FILTERS = {
    categories: Array.from(new Set(PRODUCTS.map((p) => p.subtitle))).sort(),
    size: Array.from(new Set(PRODUCTS.map((p) => p.size))).sort(),
  };
  const [selectedSize, setSelectedSize] = React.useState(ALL_FILTERS.size[0] || "");
  const [quantity, setQuantity] = React.useState(1);
  const [pincode, setPincode] = React.useState("");

  if (!value.length) {
    return <Typography color="error">Product not found</Typography>;
  }
  const product = value[0];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 6 },
        padding: { xs: "3vw", md: "5vh 7vw" },
        bgcolor: "white",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Product Image with banner */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '38vw' },
          minWidth: 220,
          aspectRatio: '4/5',
          bgcolor: 'white',
          borderRadius: 3,
          overflow: 'hidden',
          flexShrink: 0,
          alignSelf: { md: 'flex-start' },
          mb: { xs: 2, md: 0 },
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
        {/* Banner overlay */}
       
      </Box>
      {/* Product Details */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          color: "black",
          pl: { md: 2 },
        }}
      >
        <Typography sx={{ fontSize: "2.1rem", fontWeight: 700, fontFamily: 'sans-serif', mb: 0.5 }}>
          {product.title}
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", mb: 1, fontFamily: 'sans-serif', color: '#555' }}>
          {product.subtitle}
        </Typography>
        {/* Price and Quantity */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: 600, fontFamily: 'sans-serif', color: '#222' }}>
            ₹{product.price}
          </Typography>
          <Select
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            size="small"
            sx={{ minWidth: 60, fontFamily: 'sans-serif', fontWeight: 500 }}
          >
            {[...Array(10)].map((_, i) => (
              <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </Select>
        </Box>
        {/* Size Buttons */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} mb={1} sx={{ fontFamily: 'sans-serif' }}>
            Select size
          </Typography>
          {ALL_FILTERS.size.map((s) => (
            <Button
              key={s}
              onClick={() => setSelectedSize(s)}
              sx={{
                border: selectedSize === s ? '2px solid #e53935' : '1px solid',
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                fontSize: 14,
                color: selectedSize === s ? '#e53935' : 'black',
                margin: '1vh 0.5vw',
                textTransform: 'none',
                fontWeight: selectedSize === s ? 700 : 400,
                fontFamily: 'sans-serif',
                bgcolor: selectedSize === s ? '#ffeaea' : 'white',
                boxShadow: selectedSize === s ? 2 : 0,
              }}
            >
              {s}
            </Button>
          ))}
          <Typography variant="body2" sx={{ ml: 1, color: '#1976d2', display: 'inline', fontFamily: 'sans-serif', cursor: 'pointer' }}>
            Notify Me
          </Typography>
        </Box>
        {/* Action Buttons */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 2,
          alignItems: { sm: 'center' },
        }}>
          <Button
            variant="contained"
            color="error"
            sx={{
              width: { xs: '100%', sm: 140 },
              fontWeight: 700,
              fontFamily: 'sans-serif',
              mb: { xs: 1, sm: 0 },
              fontSize: 16,
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: { xs: '100%', sm: 140 },
              fontWeight: 700,
              fontFamily: 'sans-serif',
              fontSize: 16,
            }}
          >
            Add to Wishlist
          </Button>
        </Box>
        {/* Social Share Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="body2" sx={{ fontFamily: 'sans-serif', color: '#888' }}>Share</Typography>
          <WhatsAppIcon sx={{ color: '#25D366', cursor: 'pointer' }} />
          <FacebookIcon sx={{ color: '#4267B2', cursor: 'pointer' }} />
          <InstagramIcon sx={{ color: '#C13584', cursor: 'pointer' }} />
        </Box>
        {/* Delivery Details */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Input
            placeholder="Enter Pincode"
            value={pincode}
            onChange={e => setPincode(e.target.value)}
            sx={{ fontFamily: 'sans-serif', fontSize: 15, width: 160 }}
          />
          <Button variant="outlined" color="primary" sx={{ fontFamily: 'sans-serif', fontWeight: 600 }}>
            CHECK
          </Button>
        </Box>
        {/* Description Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} mb={1} sx={{ fontFamily: 'sans-serif' }}>
            DESCRIPTION
          </Typography>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {PRODUCT_DESCRIPTION.map((line, idx) => (
              <li key={idx} style={{ marginBottom: 3 }}>
                <Typography variant="body2" color="black" sx={{ fontFamily: 'sans-serif' }}>
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default function PreCheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreCheckout />
    </Suspense>
  );
}
