import React from 'react'
import Image from 'next/image'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import StraightenIcon from '@mui/icons-material/Straighten'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ReplayIcon from '@mui/icons-material/Replay'

const Help = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <LocalShippingIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Shipping</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>Order will be processed and shipped within 10 business days of placing the order.</li>
            <li>Delivery time may vary depending on the destination and shipping method selected during checkout.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AutorenewIcon sx={{ mr: 1 }} />
          <Typography variant="h6"><u>Exchange</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>To initiate an exchange or size alteration, please contact our customer service team within 5 days of receiving the order.</li>
            <li>Customers are responsible for the cost of return shipping for exchanges and size alterations, unless the item received is incorrect or defective.</li>
            <li>After the return process is completed, the purchase amount will be refunded in the form of store credit. This credit can then be utilised by the customer to place another order at their convenience.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StraightenIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Size Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Image
              src="/images/Size-chart.webp"
              alt="Size Guide"
              width={800}
              height={600}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
              priority
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpOutlineIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '1.1rem', color: '#222', mb: 1 }}>For further assistance:</Typography>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>Call +91 911</li>
            <li>support@minicon.com</li>
            <li>Kolkata India</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ReplayIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Cancellation & Refund</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>Company believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</li>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li>Cancellations will be considered only if the request is made within 2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
              <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 2 days of receipt of the products.</li>
              <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
              <li>In case of any Refunds approved by the company, it&apos;ll take 16–30 days for the refund to be processed to the end customer.</li>
            </ul>
            <li>Contact Customer Support to place your return request.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Return & Refund</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '1.1rem', color: '#222', mb: 1 }}><b>Returns:</b></Typography>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>You may return any item purchased from us within 5 days of receiving your order.</li>
            <li>To initiate a return, please contact our customer service team within this period at +91 911</li>
            <li>Returned items must be in their original packaging and condition, unused, with all tags attached.</li>
            <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
          </ul>
          <Typography sx={{ fontSize: '1.1rem', color: '#222', my: 1 }}><b>Refunds:</b></Typography>
          <ul style={{ fontSize: '1.1rem', color: '#222', marginLeft: '1.5rem', lineHeight: 1.7 }}>
            <li>Refunds will be processed within 20 days after we receive your returned item.</li>
            <li>The refund amount will be credited back to the original method of payment used during the purchase.</li>
            <li>Please note that the time taken for the refund to reflect in your account may vary depending on your payment provider.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Help
