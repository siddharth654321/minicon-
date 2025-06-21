import { Box, Typography } from '@mui/material';

const Disclaimer = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}>
      <Typography variant="h3" fontWeight={500} mb={3} fontSize={{ xs: '2rem', md: '2.5rem' }}>DISCLAIMER</Typography>
      
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        <strong>Effective Date: 1 July 2025</strong>
      </Typography>
      
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        This Disclaimer (&quot;Disclaimer&quot;, &quot;Policy&quot;) governs the use of the website www.minicon.in (&quot;Website&quot;) and all related services, products, and content provided by MINICON & TRX TRNDS (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </Typography>
      
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        By accessing, browsing, or using this Website, you (&quot;User&quot;, &quot;you&quot;) agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, you must refrain from using our website or services.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>1. Product Representation</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        We make every effort to accurately display and describe our products, including colors, designs, sizes, and product images. However, due to differences in screen displays, lighting during photography, and printing methods:
      </Typography>
      <Box component="ul" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: '#222', ml: 3, mb: 2, lineHeight: 1.7 }}>
        <li>Minor variations in color, alignment, or print placement may occur.</li>
        <li>The actual product may slightly differ from the preview shown on the Website.</li>
      </Box>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        These differences shall not be considered defects and are not eligible for refunds or replacements unless explicitly stated otherwise.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>2. Made-to-Order Products</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        All products sold on our Website are made-to-order and custom-printed upon receiving your order. As a result:
      </Typography>
      <Box component="ul" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: '#222', ml: 3, mb: 2, lineHeight: 1.7 }}>
        <li>Products may have slight variations between batches.</li>
        <li>Delivery timelines may vary based on demand, production schedules, and third-party logistics.</li>
      </Box>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        We shall not be held responsible for delays caused by external factors such as courier disruptions, public holidays, or unforeseen events.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>3. Third-Party Fulfilment</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        We work with third-party fulfilment and print-on-demand service providers for manufacturing and shipping. While we maintain high standards in selecting partners, we are not liable for any direct, incidental, or consequential damages resulting from their performance or negligence.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>4. Sizing and Fit</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        Each product includes a detailed size chart. It is the customer&apos;s responsibility to review and select the correct size prior to placing an order. Returns or refunds will not be accepted for sizing issues unless:
      </Typography>
      <Box component="ul" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: '#222', ml: 3, mb: 2, lineHeight: 1.7 }}>
        <li>The product differs from the ordered size.</li>
        <li>A manufacturing defect is demonstrated with valid proof, including an unedited unboxing video and clear images.</li>
      </Box>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>5. Intellectual Property</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        All content, designs, artwork, logos, branding, and trademarks displayed on this Website are the exclusive intellectual property of Minicon Clothing. Any reproduction, redistribution, or unauthorized commercial use is strictly prohibited and may lead to legal action under applicable laws.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>6. Limitation of Liability</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        To the fullest extent permitted by law, Minicon Clothing shall not be liable for any:
      </Typography>
      <Box component="ul" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: '#222', ml: 3, mb: 2, lineHeight: 1.7 }}>
        <li>Direct or indirect damages resulting from product use or website access.</li>
        <li>Loss or damage due to courier delays, user error, or third-party service failure.</li>
        <li>Damages resulting from misuse of our services, including fraudulent COD orders, misuse of promotional offers, or improper unboxing.</li>
      </Box>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        Your sole and exclusive remedy for dissatisfaction with any product or service is to discontinue use of the Website.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>7. Governing Law & Jurisdiction</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={4} color="#222" lineHeight={1.7}>
        This Disclaimer and any dispute arising from your use of this Website shall be governed by and construed in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts located in Kolkata, India.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ccc', mb: 3 }}></Box>

      <Typography variant="h5" fontWeight={500} mb={2} fontSize={{ xs: '1.3rem', md: '1.5rem' }}>8. Contact Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        For any questions or concerns related to this Disclaimer, you may contact us at:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" lineHeight={1.7}>
        📧 miniconclothing@gmail.com
      </Typography>
    </Box>
  );
};

export default Disclaimer;
