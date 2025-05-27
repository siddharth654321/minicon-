import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', minHeight: '80vh' }}>
      <div style={{ flex: 1, position: 'relative', minHeight: '80vh' }}>
        <Image src="/images/mockup4.png" alt="About Us Product" fill style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <div style={{ maxWidth: 600, padding: '0 3vw' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 400, marginBottom: '2rem' }}>Learn About Us</h1>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.7, marginBottom: '2.5rem', color: '#222' }}>
            Elevating the concept of luxury resort wear to an artistic pinnacle, our brand transcends mere fashion to become a captivating narrative of nature&apos;s splendor. Each garment is a masterpiece, meticulously crafted to celebrate the intricate beauty of the natural world through a symphony of mesmerizing prints and daring silhouettes. Explore Vara&apos;s clothing, where luxury meets comfort in every meticulously crafted piece. Bold yet refined, each collection is a testament to the fusion of artistic expression and sartorial elegance, inviting wearers to immerse themselves in a world where sophistication intertwines with the untamed allure of the wilderness.
          </p>
          <Link href="/" passHref legacyBehavior>
            <a style={{ display: 'inline-block', background: '#111', color: '#fff', border: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: 2, fontWeight: 500, letterSpacing: 1, cursor: 'pointer', textDecoration: 'none', marginBottom: '2.5rem' }}>
              Shop Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About