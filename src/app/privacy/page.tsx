import React from 'react'
import { Box, Typography } from '@mui/material';

const Privacy = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}>
      <Typography variant="h3" fontWeight={500} mb={3} fontSize={{ xs: '2rem', md: '2.5rem' }}>PRIVACY POLICY</Typography>
      
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        At Minicon, we value your privacy and are committed to protecting your personal data in accordance with applicable Indian laws, including the IT Act 2000 and its related rules. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>1. Information We Collect</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        We collect the following types of information from you:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        <Typography component="span" fontWeight={600}>• Personal Information:</Typography> Your name, postal address, email address, phone number, and payment details when you place an order or register on our website.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        <Typography component="span" fontWeight={600}>• Sensitive Personal Data:</Typography> Payment information and any other sensitive details needed to complete your purchase securely.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        <Typography component="span" fontWeight={600}>• Technical Data:</Typography> IP address, browser type, device information, and usage data collected automatically through cookies and similar technologies.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>2. Purpose of Collection and Use of Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        We collect and use your information to:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Process and fulfill your orders.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Communicate order status, updates, and promotional offers (with your consent).
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Prevent fraudulent or illegal activities.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Improve website experience and services.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        • Comply with applicable legal and regulatory requirements.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>3. Consent and Disclosure</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        By using our services or website, you consent to the collection, processing, and transfer of your data as described in this policy. We do not disclose your personal information to third parties except:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • To trusted service providers (payment processors, couriers, IT service providers) who agree to keep your information confidential and use it only to provide services to us.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        • As required by law, court order, or government regulation.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>4. Data Security Measures</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        We have implemented reasonable security practices and procedures to protect your personal data from unauthorized access, misuse, or disclosure, including encryption and secured servers.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        However, no method of electronic transmission or storage is 100% secure. You acknowledge and accept the risks of sharing information online.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>5. Cookies and Tracking Technologies</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        Our website uses cookies to enhance user experience, analyze website traffic, and provide relevant advertisements. You can disable cookies in your browser settings, but this may affect website functionality.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>6. Retention of Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        We retain your personal information only as long as necessary to fulfill the purposes outlined, comply with legal obligations, resolve disputes, and enforce our agreements.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>7. Your Rights</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        Under Indian law, you have the right to:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Access the personal data we hold about you.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Request corrections or updates to your information.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1, md: 1.5 }, lineHeight: 1.7 }}>
        • Withdraw consent to marketing communications.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 }, lineHeight: 1.7 }}>
        • Request deletion or blocking of your personal data (subject to legal requirements).
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        To exercise these rights, please contact us at <a href="mailto:miniconclothing@gmail.com">miniconclothing@gmail.com</a>.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>8. Children&apos;s Privacy</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        Our website and services are not directed at children under 13 years of age. We do not knowingly collect data from children under this age.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>9. Changes to This Privacy Policy</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        We may update this Privacy Policy occasionally to reflect changes in laws or business practices. We encourage you to review this policy regularly. Continued use of the website constitutes acceptance of any updates.
      </Typography>

      <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>10. Contact Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222" lineHeight={1.7}>
        For any questions, concerns, or requests related to your privacy, please reach out to us:
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={3} color="#222" lineHeight={1.7}>
        Email: <a href="mailto:miniconclothing@gmail.com">miniconclothing@gmail.com</a>
      </Typography>
    </Box>
  )
}

export default Privacy