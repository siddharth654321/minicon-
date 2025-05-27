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
  TextField
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
          <Card key={a.id} variant="outlined" sx={{ backgroundColor: '#fff' }}>
            <CardContent>
              <Typography fontWeight={600} color="black" gutterBottom>
                {a.name}
              </Typography>
              <Typography color="black">{a.line1}</Typography>
              <Typography color="black">
                {a.city}, {a.state} – {a.pincode}
              </Typography>
              <Typography color="black">Phone: {a.phone}</Typography>
              <Divider sx={{ my: 1 }} />
              <Stack direction="row" spacing={1}>
                <Button size="small" variant="outlined" onClick={() => handleOpen(a)}>
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={() => handleDelete(a.id)}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <Button variant="contained" sx={{ alignSelf: 'start' }} onClick={() => handleOpen()}>
          + Add New Address
        </Button>
      </Stack>

      {/* Add/Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: '#fff', border:'1px solid black' }}>{editId ? 'Edit Address' : 'Add New Address'}</DialogTitle>
        <form style={{ backgroundColor: '#fff' }} onSubmit={handleSubmit}>
          <DialogContent sx={{ minWidth: 340 }}>
            <Stack spacing={2}>
              <TextField
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
                autoFocus
                style={{ border: '1px solid black' }}
              />
              <TextField
                name="line1"
                value={form.line1}
                onChange={handleChange}
                required
                fullWidth
                style={{ border: '1px solid black' }}
              />
              <TextField
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                fullWidth
                style={{ border: '1px solid black' }}
              />
              <TextField
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                fullWidth
                style={{ border: '1px solid black' }}
              />
              <TextField
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                required
                fullWidth
                style={{ border: '1px solid black' }}
              />
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                fullWidth
                style={{ border: '1px solid black' }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {editId ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
