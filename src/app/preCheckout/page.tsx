"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "../dummyData";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";

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
      {/* Product Image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "90vw", md: "38vw" },
          minWidth: 220,
          aspectRatio: "4/5",

          bgcolor: "white",

          

          borderRadius: 3,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: { md: "flex-start" },
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
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
        <Typography sx={{ fontSize: "2.1rem", fontWeight: 300 }}>
          {product.title}
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
          {product.subtitle}
        </Typography>
        {/* Size Buttons */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} mb={1}>
            Select size
          </Typography>
          {ALL_FILTERS.size.map((s) => (
            <Button
              key={s}
              sx={{
                border: "1px solid",
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                fontSize: 14,

                color: "black",

                margin: "1vh 0.5vw",
                textTransform: "none",
              }}
            >
              {s}
            </Button>
          ))}
        </Box>
        <Typography sx={{ fontSize: "1.6rem", fontWeight: 600, mb: 1 }}>
          ₹{product.price}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: 140,
              fontWeight: 700,
              mr: 1,
              mb: { xs: 1, md: 0 }
            }}
          >
            Buy Now
          </Button>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: 140,
              fontWeight: 700,
            }}
          >
            Add to Cart
          </Button>
        </Box>
        {/* Description Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} mb={1}>
            DESCRIPTION
          </Typography>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {PRODUCT_DESCRIPTION.map((line, idx) => (
              <li key={idx} style={{ marginBottom: 3 }}>

                <Typography variant="body2" color="black">

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
