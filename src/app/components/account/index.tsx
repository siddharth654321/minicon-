'use client';

import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';  
import ProfileSection from './profile';
import OrdersSection from './orders';
import AddressesSection from './address';
/* -------------------------------------------------------------------------- */
/*                             Mock data types                                */
/* -------------------------------------------------------------------------- */
interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: string;
}

interface Address {
  id: string;
  name: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

/* -------------------------------------------------------------------------- */
/*                               Mock data                                    */
/* -------------------------------------------------------------------------- */
const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD‑230519‑A7F2',
    date: '19 May 2025',
    items: 3,
    total: 2799,
    status: 'Shipped',
  },
  {
    id: 'ORD‑230428‑X3J9',
    date: '28 Apr 2025',
    items: 1,
    total: 1199,
    status: 'Delivered',
  },
];

const MOCK_ADDRESSES: Address[] = [
  {
    id: 'ADDR‑01',
    name: 'John Doe',
    line1: '221B Baker Street',
    city: 'London',
    state: 'Greater London',
    pincode: 'NW1 6XE',
    phone: '+44 20 7946 0958',
  },
  {
    id: 'ADDR‑02',
    name: 'John Doe',
    line1: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'IL',
    pincode: '62704',
    phone: '+1 217 555 0113',
  },
];

/* -------------------------------------------------------------------------- */
/*                           Helper – TabPanel                                */
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
