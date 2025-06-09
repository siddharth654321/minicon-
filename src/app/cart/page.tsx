import dynamic from 'next/dynamic'

const CartPage = dynamic(() => import('../components/cart'), { ssr: false })

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