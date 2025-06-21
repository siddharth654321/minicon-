'use client';

import { Box, Typography, Container, Paper, Stack, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 700, 
          mb: 2,
          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          📞 CONTACT US
        </Typography>
        <Typography variant="h6" sx={{ 
          color: 'text.secondary', 
          maxWidth: 600, 
          mx: 'auto',
          lineHeight: 1.6
        }}>
          We&apos;d love to hear from you! Whether you have a question about your order, 
          need styling advice, or just want to say hello — we&apos;re here to help.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
        <Stack spacing={4}>
          {/* Business Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <BusinessIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Business Name:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                MINICON & TRX TRENDS
              </Typography>
            </Box>
          </Box>

          {/* Address */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <LocationOnIcon sx={{ fontSize: 32, color: 'primary.main', mt: 0.5 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Address:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                1/H/9 Rashmoni Bazar Road,<br />
                Kolkata – 700010, West Bengal, India
              </Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Email:
              </Typography>
              <Typography 
                variant="body1" 
                component="a" 
                href="mailto:miniconclothing@gmail.com"
                sx={{ 
                  color: 'primary.main', 
                  textDecoration: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                miniconclothing@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* WhatsApp */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WhatsAppIcon sx={{ fontSize: 32, color: '#25D366' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                WhatsApp Support:
              </Typography>
              <Typography 
                variant="body1" 
                component="a" 
                href="https://wa.me/918777073645"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#25D366', 
                  textDecoration: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                +91 87770 73645
              </Typography>
            </Box>
          </Box>

          {/* Business Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AccessTimeIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Business Hours:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Available Monday to Saturday – 11 AM to 6 PM IST
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Paper>

      {/* Additional Info */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Need immediate assistance? Feel free to reach out to us through any of the channels above.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We typically respond within 24 hours during business days.
        </Typography>
      </Box>
    </Container>
  );
} 