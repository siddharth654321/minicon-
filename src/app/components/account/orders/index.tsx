'use client';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';

const MOCK_ORDERS = [
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

export default function OrdersSection() {
  return (
    <>
      {MOCK_ORDERS.length === 0 ? (
        <Typography>No past orders.</Typography>
      ) : (
        <Stack spacing={2}>
          {MOCK_ORDERS.map((o) => (
            <Card key={o.id} variant="outlined" sx={{ backgroundColor: '#1f1f1f' }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography fontWeight={600}>{o.id}</Typography>
                    <Typography variant="body2">{o.date}</Typography>
                  </Grid>
                  <Grid item xs={4} sm={2}>
                    <Typography>
                      {o.items} item{o.items > 1 ? 's' : ''}
                    </Typography>
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
    </>
  );
}
