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
        <Card variant="outlined" sx={{ maxWidth: 600 ,backgroundColor:'#1f1f1f'}}>
          <CardContent>
            <Typography color='white' variant="h6" fontWeight={600} gutterBottom>
              Personal Information
            </Typography>
            <Stack spacing={1}>
              <Typography color='white'>Name: John Doe</Typography>
              <Typography color='white'>Email: john.doe@example.com</Typography>
              <Typography color='white'>Phone: +1 217 555 0113</Typography>
            </Stack>
            <Button variant="contained" sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </TabPanel>

      {/* ---------------------------- Orders -------------------------------- */}
      <TabPanel value={tab} index={1}>
        {MOCK_ORDERS.length === 0 ? (
          <Typography>No past orders.</Typography>
        ) : (
          <Stack spacing={2}>
            {MOCK_ORDERS.map((o) => (
              <Card key={o.id} variant="outlined" sx={{ backgroundColor:'#1f1f1f'}}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography fontWeight={600}>{o.id}</Typography>
                      <Typography variant="body2" >
                        {o.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>{o.items} item{o.items > 1 ? 's' : ''}</Typography>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography fontWeight={700}>₹ {o.total}</Typography>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <Typography>{o.status}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Button fullWidth size="small" variant="outlined">
                        View Details
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </TabPanel>

      {/* --------------------------- Addresses ------------------------------ */}
      <TabPanel value={tab} index={2}>
        <Stack spacing={2}>
          {MOCK_ADDRESSES.map((a) => (
            <Card key={a.id} variant="outlined" sx={{ backgroundColor:'#1f1f1f'}}>
              <CardContent>
                <Typography  fontWeight={600} gutterBottom>
                  {a.name}
                </Typography>
                <Typography >{a.line1}</Typography>
                <Typography >
                  {a.city}, {a.state} – {a.pincode}
                </Typography>
                <Typography >
                    Phone:
                    {a.phone}
                </Typography>

                <Divider sx={{ my: 1 }} />
                <Stack direction="row" spacing={1}>
                  <Button size="small" variant="outlined">
                    Edit
                  </Button>
                  <Button size="small" color="error" variant="outlined">
                    Delete
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}

          <Button variant="contained" sx={{ alignSelf: 'start' }}>
            + Add New Address
          </Button>
        </Stack>
      </TabPanel>
    </Box>
  );
}
