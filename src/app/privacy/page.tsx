import React from 'react'
import { Box, Typography } from '@mui/material';

const Privacy = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 } }}>
      <Typography variant="h3" fontWeight={500} mb={3} fontSize={{ xs: '2rem', md: '2.5rem' }}>Privacy Policy</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        For purposes of this Privacy Policy, <b>&quot;you&quot; and &quot;your&quot;</b> means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} mb={2} color="#222">
        Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Changes to This Privacy Policy</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons.</Typography>
        <Typography fontWeight={600} component="span">We will post the revised Privacy Policy on the Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>How We Collect and Use Your Personal Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</Typography>
        <Typography fontWeight={600} component="span">We may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>What Personal Information We Collect</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">&quot;Personal information&quot; refers to information that identifies, relates to, describes or can be associated with you.</Typography>
      </Typography>
      <Typography variant="h5" fontWeight={600} mt={2} mb={1} fontSize={{ xs: '1.15rem', md: '1.15rem' }}>Information We Collect Directly from You</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1.5, md: 2 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Basic contact details including your name, address, phone number, email.</Typography>
        <Typography fontWeight={600} component="span">Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.</Typography>
        <Typography fontWeight={600} component="span">Account information including your username, password, security questions.</Typography>
        <Typography fontWeight={600} component="span">Shopping information including the items you view, put in your cart or add to your wishlist.</Typography>
        <Typography fontWeight={600} component="span">Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</Typography>
        <Typography fontWeight={600} component="span">Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</Typography>
      </Typography>
      <Typography variant="h5" fontWeight={600} mt={2} mb={1} fontSize={{ xs: '1.15rem', md: '1.15rem' }}>Information We Collect through Cookies</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1.5, md: 2 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We also automatically collect certain information about your interaction with the Services (&quot;Usage Data&quot;). To do this, we may use cookies, pixels and similar technologies (&quot;Cookies&quot;).</Typography>
        <Typography fontWeight={600} component="span">Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</Typography>
      </Typography>
      <Typography variant="h5" fontWeight={600} mt={2} mb={1} fontSize={{ xs: '1.15rem', md: '1.15rem' }}>Information We Obtain from Third Parties</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 1.5, md: 2 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf.</Typography>
        <Typography fontWeight={600} component="span">Our payment processors collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested.</Typography>
        <Typography fontWeight={600} component="span">When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</Typography>
        <Typography fontWeight={600} component="span">Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party&apos;s policies or practices.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>How We Use Your Personal Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Providing Products and Services:</Typography> We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable you to post reviews.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Marketing and Advertising:</Typography> We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Security and Fraud Prevention:</Typography> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Communicating with you:</Typography> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Cookies</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services.</Typography>
        <Typography fontWeight={600} component="span">We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.</Typography>
        <Typography fontWeight={600} component="span">Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available.</Typography>
        <Typography fontWeight={600} component="span">Blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>User Generated Content</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">The Services may enable you to post product reviews and other user-generated content. If you choose to submit user generated content to any public area of the Services, this content will be public and accessible by anyone.</Typography>
        <Typography fontWeight={600} component="span">We do not control who will have access to the information that you choose to make available to others, and cannot ensure that parties who have access to such information will respect your privacy or keep it secure.</Typography>
        <Typography fontWeight={600} component="span">We are not responsible for the privacy or security of any information that you make publicly available, or for the accuracy, use or misuse of any information that you disclose or receive from third parties.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Third Party Websites and Links</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions.</Typography>
        <Typography fontWeight={600} component="span">We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites.</Typography>
        <Typography fontWeight={600} component="span">Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party.</Typography>
        <Typography fontWeight={600} component="span">Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Children&apos;s Data</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">The Services are not intended to be used by children, and we do not knowingly collect any personal information about children.</Typography>
        <Typography fontWeight={600} component="span">If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.</Typography>
        <Typography fontWeight={600} component="span">As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we &quot;share&quot; or &quot;sell&quot; (as those terms are defined in applicable law) personal information of individuals under 16 years of age.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Security and Retention of Your Information</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">No security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security.&quot;</Typography>
        <Typography fontWeight={600} component="span">Any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.</Typography>
        <Typography fontWeight={600} component="span">How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Your Rights and Choices</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Right to Access / Know:</Typography> You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Right to Delete:</Typography> You may have a right to request that we delete personal information we maintain about you.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Right to Correct:</Typography> You may have a right to request that we correct inaccurate personal information we maintain about you.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Right of Portability:</Typography> You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Restriction of Processing:</Typography> You may have the right to ask us to stop or restrict our processing of personal information.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Withdrawal of Consent:</Typography> Where we rely on consent to process your personal information, you may have the right to withdraw this consent.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Appeal:</Typography> You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Managing Communication Preferences:</Typography> We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.
      </Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.</Typography>
        <Typography fontWeight={600} component="span">We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, You may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Complaints</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">If you have complaints about how we process your personal information, please contact us using the contact details provided below.</Typography>
        <Typography fontWeight={600} component="span">If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>International Users</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">We may transfer, store and process your personal information outside the country you live in, including the United States. Your personal information is also processed by staff and third party service providers and partners in these countries.</Typography>
        <Typography fontWeight={600} component="span">If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&apos;s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.</Typography>
      </Typography>
      <Typography variant="h4" fontWeight={600} mt={3} mb={2} fontSize={{ xs: '1.3rem', md: '1.3rem' }}>Contact</Typography>
      <Typography fontSize={{ xs: '1rem', md: '1.1rem' }} color="#222" sx={{ ml: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 }, lineHeight: 1.7 }}>
        <Typography fontWeight={600} component="span">Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call or email us at <a href="mailto:support@abc.com">support@abc.com</a> or contact us at Kolkata, India.</Typography>
      </Typography>
    </Box>
  )
}

export default Privacy