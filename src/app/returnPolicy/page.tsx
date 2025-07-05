import { Box, Typography, Paper, Divider, Container, Chip } from '@mui/material';

const ReturnPolicy = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: { xs: 4, md: 8 , lg: 8 }
      }}
    >
      <Container maxWidth="md">
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 8 , lg: 8 }, 
            bgcolor: '#ffffff',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          {/* Header Section */}
          <Box textAlign="center" mb={6}>
            <Chip 
              label="Return & Exchange Policy"
              sx={{ 
                mb: 2,
                bgcolor: '#1976d2',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                px: 2
              }}
            />
            <Typography 
              variant="h2" 
              fontWeight={700} 
              mb={3} 
              fontSize={{ xs: '2rem', md: '3rem' , lg: '3rem' }}
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}
            >
              Return & Exchange Policy
            </Typography>
            <Typography 
              fontSize={{ xs: '1.1rem', md: '1.25rem' , lg: '1.25rem' }} 
              lineHeight={1.8} 
              color="#666"
              maxWidth={600}
              mx="auto"
            >
              We want your Minicon experience to be smooth, transparent, and satisfying. 
              Here are our comprehensive return and exchange guidelines.
            </Typography>
          </Box>

          <Divider sx={{ mb: 6, opacity: 0.3 }} />

          {/* FAQ Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            
            {/* Can I return or exchange my product? */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>❓</Box>
                Can I return or exchange my product?
              </Typography>
              
              <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={3} color="#333">
                You can request a return or exchange only if the item is:
              </Typography>
              
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                {[
                  'Misprinted',
                  'Damaged during shipping',
                  'Defective (manufacturing fault)',
                  'Wrong product delivered'
                ].map((item, index) => (
                  <Typography 
                    key={index}
                    component="li" 
                    fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} 
                    lineHeight={1.8} 
                    color="#333"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
              
              <Box sx={{ bgcolor: '#fff3cd', p: 3, borderRadius: 2, border: '1px solid #ffeaa7' }}>
                <Typography fontSize={{ xs: '0.95rem', md: '1rem' , lg: '1rem' }} lineHeight={1.7} mb={2} color="#333">
                  • All returned items must be new, unused, and in their original condition.
                </Typography>
                <Typography fontSize={{ xs: '0.95rem', md: '1rem' , lg: '1rem' }} lineHeight={1.7} mb={2} color="#333">
                  • Returns will not be accepted if the brand tag or labels is removed from the product.
                </Typography>
                <Typography fontSize={{ xs: '0.95rem', md: '1rem' , lg: '1rem' }} lineHeight={1.7} color="#d32f2f" fontWeight={600}>
                  📌 Change of mind or wrong size orders are not eligible for free return/exchange. You&apos;ll need to place a new order at your cost.
                </Typography>
              </Box>
            </Box>

            {/* Time frame */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>⏰</Box>
                What is the time frame to raise a return request?
              </Typography>
              
              <Box sx={{ bgcolor: '#e3f2fd', p: 3, borderRadius: 2, border: '1px solid #bbdefb' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#333">
                  All return/exchange claims must be made within <strong>5 days</strong> of product delivery.
                </Typography>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#d32f2f" fontWeight={600}>
                  After this period, the return request will be declined.
                </Typography>
              </Box>
            </Box>

            {/* Evidence required */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>📸</Box>
                What evidence is required to submit a return request?
              </Typography>
              
              <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={3} color="#333">
                To submit a valid claim, you must provide:
              </Typography>
              
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                {[
                  'A proper unboxing video (from sealed package to full opening – no cuts or edits)',
                  'Photos clearly showing the defect or damage',
                  'Images of the original packaging'
                ].map((item, index) => (
                  <Typography 
                    key={index}
                    component="li" 
                    fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} 
                    lineHeight={1.8} 
                    color="#333"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
              
              <Box sx={{ bgcolor: '#e8f5e8', p: 3, borderRadius: 2, border: '1px solid #c8e6c9' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#1976d2" fontWeight={600}>
                  📩 Email all documents to: <strong>miniconclothing@gmail.com</strong>
                </Typography>
              </Box>
            </Box>

            {/* Wrong size */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>👕</Box>
                Can I return or exchange if I ordered the wrong size?
              </Typography>
              
              <Box sx={{ bgcolor: '#ffebee', p: 3, borderRadius: 2, border: '1px solid #ffcdd2' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#d32f2f" fontWeight={600}>
                  Unfortunately, we do not offer returns or exchanges for incorrect size selection.
                </Typography>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#333">
                  However, you may place a new order at your own expense if you&apos;d like to get a different size.
                </Typography>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#333">
                  <strong>Tip:</strong> Always refer to our size chart before placing your order.
                </Typography>
              </Box>
            </Box>

            {/* Damaged while opening */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>✂️</Box>
                What if the product was damaged while opening?
              </Typography>
              
              <Box sx={{ bgcolor: '#fff3e0', p: 3, borderRadius: 2, border: '1px solid #ffcc02' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#d32f2f" fontWeight={600}>
                  If the item was accidentally cut or damaged while opening (e.g. with scissors), we cannot approve a return unless:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <Typography component="li" fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#333" sx={{ mb: 1 }}>
                    A clear unboxing video shows the condition before damage
                  </Typography>
                  <Typography component="li" fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#333" sx={{ mb: 1 }}>
                    The damage wasn&apos;t caused during unpacking
                  </Typography>
                </Box>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#333" fontWeight={600}>
                  Please unbox your order carefully.
                </Typography>
              </Box>
            </Box>

            {/* Reverse pickup */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>📦</Box>
                How do I arrange a reverse pickup (if eligible)?
              </Typography>
              
              <Box sx={{ bgcolor: '#f3e5f5', p: 3, borderRadius: 2, border: '1px solid #e1bee7' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#333">
                  In select approved return cases, we may help arrange a reverse pickup within 5 days of delivery.
                </Typography>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#1976d2" fontWeight={600}>
                  📦 This will be confirmed via email with instructions.
                </Typography>
              </Box>
            </Box>

            {/* Package damaged on delivery */}
            <Box 
              sx={{ 
                p: 4, 
                bgcolor: '#fafafa', 
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h4" 
                fontWeight={600} 
                mb={3} 
                fontSize={{ xs: '1.3rem', md: '1.5rem' , lg: '1.5rem' }}
                color="#1a1a1a"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box component="span" sx={{ color: '#1976d2', fontSize: '1.2em' }}>🚚</Box>
                What should I do if the package looks damaged on delivery?
              </Typography>
              
              <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={3} color="#333">
                Inspect the package before signing from the courier.
              </Typography>
              
              <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} mb={2} color="#333">
                If you notice visible damage:
              </Typography>
              
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                {[
                  'Mention it in the delivery remarks/signature',
                  'Click photos immediately',
                  'Share them with us when filing your claim'
                ].map((item, index) => (
                  <Typography 
                    key={index}
                    component="li" 
                    fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} 
                    lineHeight={1.8} 
                    color="#333"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
              
              <Box sx={{ bgcolor: '#e8f5e8', p: 3, borderRadius: 2, border: '1px solid #c8e6c9' }}>
                <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#333" fontWeight={600}>
                  This helps us raise claims with the courier partner.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 6, opacity: 0.3 }} />

          {/* Contact Section */}
          <Box 
            textAlign="center"
            sx={{ 
              p: 4, 
              bgcolor: '#f8f9fa', 
              borderRadius: 3,
              border: '2px solid #e9ecef'
            }}
          >
            <Typography 
              variant="h3" 
              fontWeight={700} 
              mb={3} 
              fontSize={{ xs: '1.5rem', md: '2rem' , lg: '2rem' }}
              color="#1a1a1a"
            >
              ❓ Still Need Help?
            </Typography>
            <Typography fontSize={{ xs: '1.1rem', md: '1.25rem' , lg: '1.25rem' }} lineHeight={1.8} mb={3} color="#666">
              Reach out anytime at:
            </Typography>
            <Box 
              sx={{ 
                display: 'inline-block',
                bgcolor: '#1976d2',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.1rem' , lg: '1.1rem' }
              }}
            >
              📧 miniconclothing@gmail.com
            </Box>
            <Typography fontSize={{ xs: '1rem', md: '1.1rem' , lg: '1.1rem' }} lineHeight={1.8} color="#666" mt={2}>
              We&apos;ll respond within 24–48 hours.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ReturnPolicy;