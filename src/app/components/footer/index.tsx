'use client';

import { Box, Typography, Link, Stack, IconButton, Divider, Select, MenuItem } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        px: 2,
        py: 3,
        backgroundColor: '#000',
        borderTop: '1px solid #222',
        color: '#fff',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side */}
        <Stack direction="column" spacing={1} alignItems="flex-start">
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

        {/* Center - Contact */}
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography variant="h6" sx={{ color: '#fff' }}>Contact</Typography>
          <Typography sx={{ color: '#fff' }}>Call : +91 7676084909</Typography>
          <Typography sx={{ color: '#fff' }}>Email : Support@wearvara.com</Typography>
        </Stack>

        {/* Right side - Social */}
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography variant="body1" sx={{ color: '#fff' }}>Join Our Social Media Community!</Typography>
          <IconButton
            size="small"
            component="a"
            href="https://www.instagram.com/minicon.clothing?igsh=MTczMjFsNXU1bXpkYQ=="
            aria-label="Instagram"
            target="_blank"
            rel="noopener"
            sx={{ color: '#fff' }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2, borderColor: '#222' }} />
      {/* Country/region dropdown */}
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: '#fff', mb: 1 }}>Country/region</Typography>
        <Box sx={{ border: '1px solid #fff', width: 180, borderRadius: 1 }}>
          <Select
            value="India | INR ₹"
            variant="standard"
            disableUnderline
            sx={{ color: '#fff', width: '100%', '& .MuiSelect-icon': { color: '#fff' } }}
          >
            <MenuItem value="India | INR ₹" sx={{ color: '#000' }}>India | INR ₹</MenuItem>
            <MenuItem value="US | USD $" sx={{ color: '#000' }}>US | USD $</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
}
