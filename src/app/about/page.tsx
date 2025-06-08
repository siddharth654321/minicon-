import { Box, Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <Box sx={{ width: '100vw', minHeight: '80vh', bgcolor: '#fff', py: { xs: 2, md: 6 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: '100%', width: '100%' }}>
        <Box flex={1} minHeight={{ xs: 220, md: '80vh' }} position="relative" sx={{ width: '100%' }}>
          <Image src="/images/mockup4.png" alt="About Us Product" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
        </Box>
        <Box flex={1} display="flex" alignItems="center" justifyContent="center" sx={{ bgcolor: '#fff', width: '100%' }}>
          <Box maxWidth={600} px={{ xs: 2, md: 4 }} py={{ xs: 3, md: 0 }}>
            <Typography variant="h3" fontWeight={400} mb={3} fontSize={{ xs: '2rem', md: '3rem' }}>Learn About Us</Typography>
            <Typography fontSize={{ xs: '1rem', md: '1.3rem' }} lineHeight={1.7} mb={4} color="#222">
              Elevating the concept of luxury resort wear to an artistic pinnacle, our brand transcends mere fashion to become a captivating narrative of nature's splendor. Each garment is a masterpiece, meticulously crafted to celebrate the intricate beauty of the natural world through a symphony of mesmerizing prints and daring silhouettes. Explore Vara's clothing, where luxury meets comfort in every meticulously crafted piece. Bold yet refined, each collection is a testament to the fusion of artistic expression and sartorial elegance, inviting wearers to immerse themselves in a world where sophistication intertwines with the untamed allure of the wilderness.
            </Typography>
            <Link href="/" passHref legacyBehavior>
              <Button variant="contained" sx={{ background: '#111', color: '#fff', fontSize: { xs: '1rem', md: '1.1rem' }, borderRadius: 2, fontWeight: 500, letterSpacing: 1, px: 4, py: 2, mb: 3, textTransform: 'none', '&:hover': { background: '#222' } }}>
                Shop Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;