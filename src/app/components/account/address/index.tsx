'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme,
  useMediaQuery
} from '@mui/material';

interface Address {
  id: string;
  name: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'ADDR‑01',
    name: 'John Doe',
    line1: '221B Baker Street',
    city: 'London',
    state: 'Greater London',
    pincode: 'NW1 6XE',
    phone: '+44 20 7946 0958',
  },
  {
    id: 'ADDR‑02',
    name: 'John Doe',
    line1: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'IL',
    pincode: '62704',
    phone: '+1 217 555 0113',
  },
];

const emptyAddress: Address = {
  id: '',
  name: '',
  line1: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
};

export default function AddressesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);

  // Modal control and form state
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Address>(emptyAddress);
  const [editId, setEditId] = useState<string | null>(null);

  // Open modal for add or edit
  const handleOpen = (address?: Address) => {
    if (address) {
      setForm(address);
      setEditId(address.id);
    } else {
      setForm(emptyAddress);
      setEditId(null);
    }
    setOpen(true);
  };

  // Close modal
  const handleClose = () => {
    setOpen(false);
    setEditId(null);
  };

  // Form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update address
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      // Update
      setAddresses(addresses.map(addr => addr.id === editId ? { ...form, id: editId } : addr));
    } else {
      // Add new
      const newAddress: Address = { ...form, id: `ADDR-${Date.now()}` };
      setAddresses([newAddress, ...addresses]);
    }
    setOpen(false);
  };

  // Delete address
  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <>
      <Stack spacing={2}>
        {addresses.map((a) => (
          <Card key={a.id} variant="outlined" sx={{ 
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
            width: '100%'
          }}>
            <CardContent>
              <Typography 
                fontWeight={600} 
                color="black" 
                gutterBottom
                variant={isMobile ? "subtitle1" : "h6"}
                sx={{ fontFamily: 'sans-serif' }}
              >
                {a.name}
              </Typography>
              <Typography color="black" sx={{ fontFamily: 'sans-serif' }}>{a.line1}</Typography>
              <Typography color="black" sx={{ fontFamily: 'sans-serif' }}>
                {a.city}, {a.state} – {a.pincode}
              </Typography>
              <Typography color="black" sx={{ fontFamily: 'sans-serif' }}>Phone: {a.phone}</Typography>
              <Divider sx={{ my: 1 }} />
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={1}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                <Button 
                  size="small" 
                  variant="outlined" 
                  onClick={() => handleOpen(a)}
                  sx={{ fontFamily: 'sans-serif' }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={() => handleDelete(a.id)}
                  sx={{ fontFamily: 'sans-serif' }}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <Button 
          variant="contained" 
          sx={{ 
            alignSelf: 'start',
            fontFamily: 'sans-serif',
            width: { xs: '100%', sm: 'auto' }
          }} 
          onClick={() => handleOpen()}
        >
          + Add New Address
        </Button>
      </Stack>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ 
          backgroundColor: '#fff', 
          fontFamily: 'sans-serif',
          fontSize: { xs: '1.1rem', sm: '1.25rem' }
        }}>
          {editId ? 'Edit Address' : 'Add New Address'}
        </DialogTitle>
        <form style={{ backgroundColor: '#fff', fontFamily: 'sans-serif' }} onSubmit={handleSubmit}>
          <DialogContent sx={{ minWidth: { xs: '100%', sm: 340 } }}>
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
                autoFocus
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
              <TextField
                label="Address Line"
                name="line1"
                value={form.line1}
                onChange={handleChange}
                required
                fullWidth
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
              <TextField
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                fullWidth
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
              <TextField
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                fullWidth
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
              <TextField
                label="Pincode"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                required
                fullWidth
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
              <TextField
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                fullWidth
                sx={{ 
                  '& .MuiInputBase-root': { fontFamily: 'sans-serif' },
                  '& .MuiInputLabel-root': { fontFamily: 'sans-serif' }
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button 
              onClick={handleClose} 
              color="inherit"
              sx={{ fontFamily: 'sans-serif' }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained"
              sx={{ fontFamily: 'sans-serif' }}
            >
              {editId ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
