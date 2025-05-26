"use client"
import React, { Suspense } from 'react'
import styles from './index.module.css'
import { useSearchParams } from 'next/navigation';
import { PRODUCTS } from '../dummyData';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';

const PreCheckout = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const value = PRODUCTS.filter((product) => product.id === Number(id));
const ALL_FILTERS = {
  categories: Array.from(new Set(PRODUCTS.map((p) => p.subtitle))).sort(),
  size: Array.from(new Set(PRODUCTS.map((p) => p.size))).sort(), // ['S','M',…]
};
  console.log("value", value)
  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <Image src={value[0].image} fill alt={''} />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productName}>
          <Typography className={styles.titlecss} color='white'>
            {value[0].title}
          </Typography>

        </div>
        <div className={styles.productsubtitle}>
          <Typography className={styles.subtitlecss} color='white'>
            {value[0].subtitle}
          </Typography>

        </div>
        <div className={styles.productSize}>
           <Typography color='white' variant="subtitle1" fontWeight={700} mb={1}>
                    Select size
                  </Typography>
          {ALL_FILTERS.size.map((s) => (
            
            <Button
              key={s}
              sx={{
                border: '1px solid',
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                fontSize: 14,
                cursor: 'pointer',
                color: 'white',
                margin:'1vh 0.5vw',
              }}
            >
              {s}
            </Button>
          ))}

        </div>
        
         <div className={styles.productPrice}>
          <Typography className={styles.price} color='white'>
            ₹{value[0].price}
          </Typography>

        </div> 

        <div className={styles.buyButton}>
          <Button variant="contained" color="primary" className={styles.buybutton}>
            Buy Now
          </Button>

        </div> 
        <div className={styles.addToCartButton}>
          <Button variant="outlined" color="secondary" className={styles.cartbutton}>
            Add to Cart
          </Button>

        </div> 
        

      </div>

    </div>
  )
}

export default function PreCheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreCheckout />
    </Suspense>
  );
}