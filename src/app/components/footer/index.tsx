'use client';

import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';   // optional; remove if not needed

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',            // push to bottom when page is short
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
        {/* left side */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} MINIcon. All rights reserved.
        </Typography>

        {/* right side */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Link href="/privacy" underline="hover" color="inherit">
            Privacy
          </Link>
          <Link href="/terms" underline="hover" color="inherit">
            Terms
          </Link>
          <IconButton
            size="small"
            component="a"
            href="https://github.com/"     // replace with real repo
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
