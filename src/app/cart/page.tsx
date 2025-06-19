'use client'
import React from 'react'
import CartPage from '../components/cart'

const Cart = () => {


  return (
    <div style={{
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CartPage />
    </div>
  )
}

export default Cart
