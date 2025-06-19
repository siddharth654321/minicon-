'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CartPage from '../components/cart'
import { useAuth } from '../components/AuthProvider'

const Cart = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.replace('/login')
    }
  }, [user, router])

  if (!user) return null

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
