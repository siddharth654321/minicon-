'use client';

import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  
} from '@mui/material';
import ProfileSection from './profile';
import OrdersSection from './orders';
import AddressesSection from './address';
/* -------------------------------------------------------------------------- */
/*                             Mock data types                                */
/* -------------------------------------------------------------------------- */


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`account‑tab‑panel‑${index}`}
      aria-labelledby={`account‑tab‑${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Main page                                    */
/* -------------------------------------------------------------------------- */
export default function AccountPage() {
  const [tab, setTab] = useState(0);

  return (
    <Box  sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 }, py: 4, backgroundColor:'#111', height:'100vh' }  }>
      <Typography color='white' variant="h4" fontWeight={700} mb={3}>
        My Account
      </Typography>

      {/* ----------------------------- Tabs -------------------------------- */}
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="My account sections"
        sx={{ mb: 3,color:'white' }}
        style={{color:'white'}}
      >
        <Tab label="Profile" id="account‑tab‑0" aria-controls="account‑tab‑panel‑0" style={{color:'white'}}/>
        <Tab label="Orders" id="account‑tab‑1" aria-controls="account‑tab‑panel‑1" style={{color:'white'}} />
        <Tab label="Addresses" id="account‑tab‑2" aria-controls="account‑tab‑panel‑2" style={{color:'white'}}/>
      </Tabs>

      {/* --------------------------- Profile ------------------------------- */}
        <TabPanel value={tab} index={0}>
        <ProfileSection />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <OrdersSection />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <AddressesSection />
      </TabPanel>
    </Box>
  );
}
