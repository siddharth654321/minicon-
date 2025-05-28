'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';

export default function ProfileSection() {
  // State for profile info
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 217 555 0113'
  });

  // State for modal open/close
  const [open, setOpen] = useState(false);

  // State for edit form
  const [form, setForm] = useState(profile);

  const handleOpen = () => {
    setForm(profile); // Reset form to current profile
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form: update main profile state
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(form);
    setOpen(false);
  };

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 600, backgroundColor: '#fff' }}>
        <CardContent>
          <Typography color="black" variant="h6" fontWeight={600} gutterBottom>
            Personal Information
          </Typography>
          <Stack spacing={1}>
            <Typography color="black">Name: {profile.name}</Typography>
            <Typography color="black">Email: {profile.email}</Typography>
            <Typography color="black">Phone: {profile.phone}</Typography>
          </Stack>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpen}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Edit Profile Modal */}
      <Dialog  open={open} onClose={handleClose}>
        <form style={{backgroundColor:'#fff'}} onSubmit={handleSubmit}>
          <DialogContent sx={{ minWidth: 340 }}>
            <Stack spacing={2}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={form.name}
                onChange={handleChange}
                autoFocus
                required
                style={{border:'1px solid black'}}
              />
              <TextField
                name="email"
                fullWidth
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{border:'1px solid black'}}
              />
              <TextField
                name="phone"
                fullWidth
                value={form.phone}
                onChange={handleChange}
                required
                style={{border:'1px solid black'}}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
