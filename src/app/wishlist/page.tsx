import React from 'react'
import WishlistPage from '../components/wishList'

const WishList = () => {
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