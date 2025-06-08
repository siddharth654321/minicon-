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
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            {/* Left side */}
            <Stack direction="column" spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Quick Links</Typography>
              <Link href="/about" underline="hover" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                About Us
              </Link>
              <Link href="/help" underline="hover" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                Help
              </Link>
              <Link href="/terms" underline="hover" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                Terms of Service
              </Link>
              <Link href="/privacy" underline="hover" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                Privacy Policy
              </Link>
            </Stack>

            {/* Center - Contact */}
            <Stack direction="column" spacing={1} alignItems="center">
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Contact</Typography>
              <Typography sx={{ color: '#fff', textAlign: 'center' }}>Call : +91 7676084909</Typography>
              <Typography sx={{ color: '#fff', textAlign: 'center' }}>Email : Support@wearvara.com</Typography>
            </Stack>

            {/* Right side - Social */}
            <Stack direction="column" spacing={1} alignItems={{ xs: 'center', md: 'flex-end' }}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Follow Us</Typography>
              <Typography variant="body2" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'right' } }}>
                Join Our Social Media Community!
              </Typography>
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
