'use client';

import { Box, Typography, Link, Stack, IconButton, Divider, Select, MenuItem, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        backgroundColor: '#000',
        borderTop: '1px solid #222',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, sm: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 2 }}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Left side */}
            <Stack direction="column" spacing={2} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>Quick Links</Typography>
              <Stack direction="column" spacing={1.5} alignItems="center">
                <Link href="/about" underline="hover" sx={{ color: '#fff' }}>
                  About Us
                </Link>
                <Link href="/help" underline="hover" sx={{ color: '#fff' }}>
                  Help
                </Link>
                <Link href="/terms" underline="hover" sx={{ color: '#fff' }}>
                  Terms of Service
                </Link>
                <Link href="/privacy" underline="hover" sx={{ color: '#fff' }}>
                  Privacy Policy
                </Link>
              </Stack>
            </Stack>

            {/* Center - Contact */}
            <Stack direction="column" spacing={2} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>Contact</Typography>
              <Stack direction="column" spacing={1.5} alignItems="center">
                <Typography sx={{ color: '#fff' }}>Call : 8777073645</Typography>
                <Typography sx={{ color: '#fff' }}>Email : miniconclothing@gmail.com</Typography>
              </Stack>
            </Stack>

            {/* Right side - Social */}
            <Stack direction="column" spacing={2} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600 }}>Connect With Us</Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton
                  size="small"
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61576563387778"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: '#fff' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="#fff"/></svg>
                </IconButton>
                <IconButton
                  size="small"
                  component="a"
                  href="https://www.instagram.com/minicon.clothing?igsh=MTczMjFsNXU1bXpkYQ=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: '#fff' }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ my: { xs: 3, sm: 4 }, borderColor: '#222' }} />

          {/* Country/region dropdown */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 1
          }}>
            <Typography sx={{ color: '#fff' }}>Country/region</Typography>
            <Box sx={{ 
              border: '1px solid #fff', 
              width: { xs: '100%', sm: 180 }, 
              borderRadius: 1,
              maxWidth: 180
            }}>
              <Select
                value="India | INR ₹"
                variant="standard"
                disableUnderline
                fullWidth
                sx={{ 
                  color: '#fff', 
                  '& .MuiSelect-icon': { color: '#fff' },
                  px: 1
                }}
              >
                <MenuItem value="India | INR ₹" sx={{ color: '#000' }}>India | INR ₹</MenuItem>
                <MenuItem value="US | USD $" sx={{ color: '#000' }}>US | USD $</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
