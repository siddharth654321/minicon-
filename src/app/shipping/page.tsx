'use client';

import { Box, Typography, Container, Paper, Stack, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';

export default function ShippingPage() {
  const faqs = [
    {
      question: "When will my order be shipped?",
      answer: "All Minicon orders are processed within 2–3 business days. Once ready, your order is shipped immediately."
    },
    {
      question: "How long does delivery take?",
      answer: "After dispatch, delivery usually takes:\n• 5–7 days for metro cities\n• 7–10 days for non-metro or remote areas\n\nYou'll receive a tracking link once your order is shipped."
    },
    {
      question: "Do you offer express shipping?",
      answer: "Currently, we offer standard shipping across India to maintain fair pricing. Express shipping options may be added in the future."
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer: "Yes, COD is available in most serviceable pin codes. If COD is not available in your area, you'll be notified at checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email or SMS with a tracking link. You can click the link to follow your order in real-time."
    },
    {
      question: "What should I do if I haven't received my order?",
      answer: "If it's been more than 7 business days since dispatch and your tracking hasn't updated, reach out to us at:\n📧 miniconclothing@gmail.com"
    },
    {
      question: "Do you ship internationally?",
      answer: "We currently ship only within India. International shipping will be announced soon—stay tuned on our Instagram and website!"
    },
    {
      question: "What if my package is delayed?",
      answer: "While we aim for timely delivery, occasional delays may occur due to:\n• Weather disruptions\n• Courier issues\n• Festival seasons or strikes\n\nWe'll keep you informed via email/SMS in such cases."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 700, 
          mb: 2,
          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          📦 SHIPPING – FREQUENTLY ASKED QUESTIONS (FAQS)
        </Typography>
        <Typography variant="h6" sx={{ 
          color: 'text.secondary', 
          maxWidth: 800, 
          mx: 'auto',
          lineHeight: 1.6
        }}>
          Everything you need to know about our shipping process, delivery times, and tracking your orders.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3, mb: 6 }}>
        <Stack spacing={3}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ 
              boxShadow: 'none', 
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              '&:before': { display: 'none' }
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    gap: 1
                  }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  🔻 {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Paper>

      {/* Contact Section */}
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3, textAlign: 'center' }}>
        <Stack spacing={3} alignItems="center">
          <HelpIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
            ❓ Still need help?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Reach out anytime.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: 'primary.main' }} />
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
                📩 Email: miniconclothing@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalShippingIcon sx={{ color: 'primary.main' }} />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                📞 Or contact us via our social channels.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>

      {/* Additional Info */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          We&apos;re committed to providing you with the best shipping experience possible.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          For the most up-to-date shipping information, please check your order confirmation email.
        </Typography>
      </Box>
    </Container>
  );
} 