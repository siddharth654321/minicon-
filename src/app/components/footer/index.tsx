'use client';

import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        px: 2,
        py: 3,
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left side */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Link href="/about" underline="hover" color="inherit">
            About Us
          </Link>
          <Link href="/help" underline="hover" color="inherit">
            Help
          </Link>
          <Link href="/terms" underline="hover" color="inherit">
            Terms of Service
          </Link>
          <Link href="/privacy" underline="hover" color="inherit">
            Privacy Policy
          </Link>
        </Stack>

        {/* Right side */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Contact: +91 9876543210
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: <Link href="mailto:Support@wearvara.com" underline="hover" color="inherit">
              minicon@email.com
            </Link>
          </Typography>
          <IconButton
            size="small"
            component="a"
            href="https://www.instagram.com/minicon.clothing?igsh=MTczMjFsNXU1bXpkYQ==" // replace with your real Insta
            aria-label="Instagram"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
