'use client';

import { Box, Typography, Container, Paper, Stack, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';

export default function CancelRefundPage() {
  const faqs = [
    {
      question: "Can I cancel my order?",
      answer: "Yes, but only if the cancellation request is made within 12 hours of placing the order.\nAfter 12 hours, your order goes into production and cannot be cancelled.\n📧 To cancel, email us at miniconclothing@gmail.com with your Order ID."
    },
    {
      question: "Can I cancel an order during a sale or discount offer?",
      answer: "❌ No. Orders placed during promotions, discounts, or special drops are not eligible for cancellation."
    },
    {
      question: "Will I get a refund if I cancel my order?",
      answer: "✅ Yes, if you cancel within 12 hours, your payment will be refunded in full to your original payment method within 5–7 business days."
    },
    {
      question: "When am I eligible for a refund?",
      answer: "You&apos;re eligible for a full refund if:\n• You received the wrong product\n• Your product was damaged or misprinted\n• The order was lost in transit and confirmed undeliverable\n• A return claim is approved but cannot be reprinted\n\n📦 Unboxing video + clear images are required for all refund claims."
    },
    {
      question: "Can I cancel a COD (Cash on Delivery) order?",
      answer: "Yes, but only within 12 hours of placing the order.\nAfter that, your order enters production and cannot be cancelled.\nPlease email us at miniconclothing@gmail.com with your Order ID to cancel."
    },
    {
      question: "What happens if I refuse a COD delivery?",
      answer: "If you refuse a COD order at the time of delivery:\n• The item will be returned to us.\n• You may be blocked from placing future COD orders with Minicon.\n• We reserve the right to suspend COD service for your account.\n\n❗Please order responsibly to help us keep COD available for everyone."
    },
    {
      question: "Can I get a refund on a COD order?",
      answer: "If your COD order is approved for refund (e.g., damaged or wrong product received), we'll issue a refund via:\n• UPI or bank transfer (as COD cannot be refunded automatically)\n\n📩 You'll need to share your UPI ID or bank details with us at miniconclothing@gmail.com after claim approval."
    },
    {
      question: "What situations are not eligible for a refund?",
      answer: "We do not offer refunds for:\n• Ordering the wrong size, color, or product\n• Change of mind after production has started\n• Customer-caused damage while opening the package\n• Missing or edited unboxing video\n\n📌 Refunds are not accepted if requested after 7 days of delivery."
    },
    {
      question: "Is there any charge for a refund request by the customer?",
      answer: "Yes, if you choose to return a product and request a refund for reasons other than defects or our error, an additional return processing fee will apply.\n• For Prepaid orders, a charge of ₹100 will be deducted.\n• For Cash on Delivery (COD) orders, a charge of ₹150 will be deducted.\n\nThis fee covers handling and restocking costs related to the return.\n\nPlease note: Refund requests due to damaged or defective products caused by our mistake will not incur any charges."
    },
    {
      question: "How long does it take to receive my refund?",
      answer: "Once approved, your refund will be processed in 5–7 business days and credited to your original payment method.\nIf you haven't received it within that time, check with your bank or email us."
    }
  ];

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
          CANCEL & REFUND – FREQUENTLY ASKED QUESTIONS (FAQS)
        </Typography>
        <Typography variant="h6" sx={{ 
          color: 'text.secondary', 
          maxWidth: 800, 
          mx: 'auto',
          lineHeight: 1.6
        }}>
          Everything you need to know about cancelling orders and requesting refunds.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6, lg: 6 }, borderRadius: 3, mb: 6 }}>
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
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6, lg: 6 }, borderRadius: 3, textAlign: 'center' }}>
        <Stack spacing={3} alignItems="center">
          <HelpIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
            ❓ Still Need Help?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            We&apos;re always here to help.
          </Typography>
          
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
              📩 Email us at: miniconclothing@gmail.com
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Important Notes */}
      <Box sx={{ mt: 6, p: 4, bgcolor: '#f5f5f5', borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
          ⚠️ Important Notes:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            • All cancellation requests must be made within 12 hours of order placement
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            • Unboxing videos and clear images are mandatory for refund claims
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            • Refund processing takes 5-7 business days
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            • Return processing fees apply for non-defective returns
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
