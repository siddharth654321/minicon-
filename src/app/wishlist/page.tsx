'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import WishlistPage from '../components/wishList'
import { useAuth } from '../components/AuthProvider'

const WishList = () => {
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
      <WishlistPage />
    </div>
  )
}

export default WishList