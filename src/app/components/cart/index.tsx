'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Typography,
    Button,
    Paper,
    MenuItem,
    Select,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Container,
    Divider,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

const DUMMY_CART = [
    {
        id: 1,
        title: 'Punisher: Classic Logo',
        subtitle: 'Super Oversized T‑Shirt',
        img: '/images/M-12.png',
        price: 1199,
        size: 'L',
        qty: 1,
    },
    {
        id: 2,
        title: 'Star Wars: Vader Tee',
        subtitle: 'Oversized Tee',
        img: '/images/M-15.png',
        price: 899,
        size: 'M',
        qty: 2,
    },
];

const INITIAL_ADDRESSES = [
    {
        id: 'ADDR-01',
        name: 'Siddharth',
        line1: '221B Baker Street',
        city: 'London',
        state: 'Greater London',
        pincode: 'NW1 6XE',
        phone: '+44 20 7946 0958',
    },
    {
        id: 'ADDR-02',
        name: 'Shivam',
        line1: '742 Evergreen Terrace',
        city: 'Springfield',
        state: 'IL',
        pincode: '62704',
        phone: '+1 217 555 0113',
    },
];

const formatINR = (v:number) => `₹${v.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

export default function CartPage() {
    const [cart, setCart] = useState(DUMMY_CART);
    const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
    const [selectedAddress, setSelectedAddress] = useState(INITIAL_ADDRESSES[0].id);
    const [paymentMode, setPaymentMode] = useState('card');
    const [openAddModal, setOpenAddModal] = useState(false);
    const [newAddr, setNewAddr] = useState({
        name: '',
        line1: '',
        city: '',
        state: '',
        pincode: '',
        phone: '',
    });

    const subtotal = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
        [cart]
    );
    const shipping = 0;
    const taxes = Math.round(subtotal * 0.05);
    const total = subtotal + shipping + taxes;

    function handleAddrChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewAddr({ ...newAddr, [e.target.name]: e.target.value });
    }

    function handleAddAddress() {
        const newId = `ADDR-${Date.now()}`;
        const fullNewAddr = { ...newAddr, id: newId };
        setAddresses(prev => [...prev, fullNewAddr]);
        setSelectedAddress(newId);
        setNewAddr({ name: '', line1: '', city: '', state: '', pincode: '', phone: '' });
        setOpenAddModal(false);
    }

    const canAdd =
        newAddr.name.trim() &&
        newAddr.line1.trim() &&
        newAddr.city.trim() &&
        newAddr.state.trim() &&
        newAddr.pincode.trim() &&
        newAddr.phone.trim();

    return (
        // 1. FLEX COLUMN LAYOUT - GROWS AS NEEDED
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                bgcolor: '#f8f9fa',
                fontFamily: 'sans-serif',
            }}
        >
            {/* 2. MAIN CONTENT GROWS - px: 0 ensures no double padding */}
            <Container
                maxWidth="lg"
                sx={{
                    flex: '1 0 auto',
                    py: { xs: 2, md: 4 },
                    px: { xs: 1, sm: 2, md: 4 },
                    boxSizing: 'border-box',
                    width: '100%',
                    minWidth: 0,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: { xs: 2, md: 4 },
                        color: '#1a1a1a',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontFamily: 'sans-serif',
                        wordBreak: 'break-word',
                    }}
                >
                    Shopping Cart
                </Typography>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, md: 4 }}
                    alignItems="flex-start"
                    sx={{ width: '100%', minWidth: 0, flexGrow: 1 }}
                >
                    {/* Left Column - Cart Items */}
                    <Box sx={{
                        flex: 1,
                        width: '100%',
                        minWidth: 0,
                        mb: { xs: 2, md: 0 },
                        boxSizing: 'border-box',
                    }}>
                        {cart.length === 0 ? (
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    bgcolor: 'white',
                                    borderRadius: 2
                                }}
                            >
                                <ShoppingBagOutlinedIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
                                <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontFamily: 'sans-serif' }}>
                                    Your cart is empty
                                </Typography>
                                <Button
                                    variant="contained"
                                    href="/products"
                                    sx={{
                                        mt: 2,
                                        bgcolor: '#fe5000',
                                        '&:hover': { bgcolor: '#d64500' }
                                    }}
                                >
                                    Continue Shopping
                                </Button>
                            </Paper>
                        ) : (
                            <>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 1.5, md: 3 },
                                        mb: 2,
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        width: '100%',
                                        boxSizing: 'border-box',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            color: '#1a1a1a',
                                            fontWeight: 600,
                                            fontFamily: 'sans-serif'
                                        }}
                                    >
                                        Cart Items ({cart.length})
                                    </Typography>

                                    {cart.map((item) => (
                                        <Box
                                            key={item.id}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', sm: 'row' },
                                                alignItems: { xs: 'center', sm: 'flex-start' },
                                                mb: 3,
                                                pb: 3,
                                                borderBottom: '1px solid #eee',
                                                '&:last-child': {
                                                    mb: 0,
                                                    pb: 0,
                                                    borderBottom: 'none'
                                                },
                                                width: '100%',
                                                minWidth: 0,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: { xs: '100%', sm: 120 },
                                                    maxWidth: 120,
                                                    height: { xs: 140, sm: 120 },
                                                    bgcolor: '#f8f9fa',
                                                    borderRadius: 2,
                                                    overflow: 'hidden',
                                                    mb: { xs: 2, sm: 0 },
                                                    mr: { sm: 3 },
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    width={120}
                                                    height={120}
                                                    style={{
                                                        objectFit: 'contain',
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'block',
                                                    }}
                                                />
                                            </Box>

                                            <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    mb: 1
                                                }}>
                                                    <Box>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={{
                                                                fontWeight: 600,
                                                                color: '#1a1a1a',
                                                                mb: 0.5,
                                                                fontFamily: 'sans-serif'
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{ mb: 0.5, fontFamily: 'sans-serif' }}
                                                        >
                                                            {item.subtitle}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{ fontFamily: 'sans-serif' }}
                                                        >
                                                            Size: {item.size} | Qty: {item.qty}
                                                        </Typography>
                                                    </Box>
                                                    <IconButton
                                                        onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                                                        sx={{
                                                            color: '#666',
                                                            '&:hover': { color: '#fe5000' }
                                                        }}
                                                    >
                                                        <DeleteOutlineIcon />
                                                    </IconButton>
                                                </Box>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#1a1a1a',
                                                        mt: 1,
                                                        fontFamily: 'sans-serif'
                                                    }}
                                                >
                                                    {formatINR(item.price * item.qty)}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Paper>

                                {/* Price Summary */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 1.5, md: 3 },
                                        bgcolor: 'white',
                                        borderRadius: 2,
                                        width: '100%',
                                        boxSizing: 'border-box',
                                        mt: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            color: '#1a1a1a',
                                            fontWeight: 600,
                                            fontFamily: 'sans-serif'
                                        }}
                                    >
                                        Price Details
                                    </Typography>

                                    <Stack spacing={1.5}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography color="text.secondary" sx={{ fontFamily: 'sans-serif' }}>Subtotal</Typography>
                                            <Typography sx={{ fontFamily: 'sans-serif' }}>{formatINR(subtotal)}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography color="text.secondary" sx={{ fontFamily: 'sans-serif' }}>Shipping</Typography>
                                            <Typography sx={{ fontFamily: 'sans-serif' }}>{shipping === 0 ? 'Free' : formatINR(shipping)}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography color="text.secondary" sx={{ fontFamily: 'sans-serif' }}>Taxes & Fees</Typography>
                                            <Typography sx={{ fontFamily: 'sans-serif' }}>{formatINR(taxes)}</Typography>
                                        </Box>
                                        <Divider sx={{ my: 1 }} />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle1" fontWeight={600} sx={{ fontFamily: 'sans-serif' }}>Total</Typography>
                                            <Typography variant="subtitle1" fontWeight={600} sx={{ fontFamily: 'sans-serif' }}>
                                                {formatINR(total)}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </>
                        )}
                    </Box>

                    {/* Right Column - Address & Payment */}
                    <Box sx={{
                        width: { xs: '100%', md: 400 },
                        minWidth: 0,
                        boxSizing: 'border-box',
                    }}>
                        {/* Address Selection */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 1.5, md: 3 },
                                mb: 2,
                                bgcolor: 'white',
                                borderRadius: 2,
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#1a1a1a',
                                        fontWeight: 600,
                                        fontFamily: 'sans-serif'
                                    }}
                                >
                                    Delivery Address
                                </Typography>
                                <Button
                                    startIcon={<LocationOnOutlinedIcon />}
                                    onClick={() => setOpenAddModal(true)}
                                    sx={{
                                        color: '#fe5000',
                                        '&:hover': { bgcolor: 'rgba(254, 80, 0, 0.04)' },
                                        fontFamily: 'sans-serif'
                                    }}
                                >
                                    Add New
                                </Button>
                            </Box>

                            <Select
                                value={selectedAddress}
                                onChange={(e) => setSelectedAddress(e.target.value)}
                                fullWidth
                                size="small"
                                sx={{ mb: 2 }}
                            >
                                {addresses.map((addr) => (
                                    <MenuItem key={addr.id} value={addr.id}>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{ fontFamily: 'sans-serif' }}>{addr.name}</Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'sans-serif' }}>
                                                {addr.line1}, {addr.city}, {addr.state} - {addr.pincode}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'sans-serif' }}>
                                                {addr.phone}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Paper>

                        {/* Payment Method */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 1.5, md: 3 },
                                mb: 2,
                                bgcolor: 'white',
                                borderRadius: 2,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PaymentOutlinedIcon sx={{ mr: 1, color: '#666' }} />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#1a1a1a',
                                        fontWeight: 600,
                                        fontFamily: 'sans-serif'
                                    }}
                                >
                                    Payment Method
                                </Typography>
                            </Box>

                            <Select
                                value={paymentMode}
                                onChange={(e) => setPaymentMode(e.target.value)}
                                fullWidth
                                size="small"
                                sx={{ fontFamily: 'sans-serif' }}
                            >
                                <MenuItem value="card" sx={{ fontFamily: 'sans-serif' }}>Credit/Debit Card</MenuItem>
                                <MenuItem value="upi" sx={{ fontFamily: 'sans-serif' }}>UPI</MenuItem>
                                <MenuItem value="netbanking" sx={{ fontFamily: 'sans-serif' }}>Net Banking</MenuItem>
                                <MenuItem value="cod" sx={{ fontFamily: 'sans-serif' }}>Cash on Delivery</MenuItem>
                            </Select>
                        </Paper>

                        {/* Checkout Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={cart.length === 0}
                            sx={{
                                py: 1.5,
                                bgcolor: '#fe5000',
                                '&:hover': { bgcolor: '#d64500' },
                                '&.Mui-disabled': {
                                    bgcolor: '#f5f5f5',
                                    color: '#999'
                                },
                                fontFamily: 'sans-serif'
                            }}
                        >
                            Proceed to Checkout ({formatINR(total)})
                        </Button>
                    </Box>
                </Stack>
            </Container>

           

            {/* Add Address Modal */}
            <Dialog
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        p: 1,
                        fontFamily: 'sans-serif',
                        width: '100%',
                        boxSizing: 'border-box',
                    }
                }}
            >
                <DialogTitle sx={{ fontWeight: 600, fontFamily: 'sans-serif' }}>Add New Address</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{ mt: 1 }}>
                        <TextField
                            label="Name"
                            name="name"
                            value={newAddr.name}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                        <TextField
                            label="Address Line"
                            name="line1"
                            value={newAddr.line1}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                        <TextField
                            label="City"
                            name="city"
                            value={newAddr.city}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                        <TextField
                            label="State"
                            name="state"
                            value={newAddr.state}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                        <TextField
                            label="Pincode"
                            name="pincode"
                            value={newAddr.pincode}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={newAddr.phone}
                            onChange={handleAddrChange}
                            fullWidth
                            size="small"
                            InputProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                            InputLabelProps={{
                                sx: { fontFamily: 'sans-serif' }
                            }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        onClick={() => setOpenAddModal(false)}
                        sx={{
                            color: '#666',
                            fontFamily: 'sans-serif'
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleAddAddress}
                        disabled={!canAdd}
                        sx={{
                            bgcolor: '#fe5000',
                            color: '#fff',
                            '&:hover': { bgcolor: '#d64500' },
                            fontFamily: 'sans-serif'
                        }}
                    >
                        Add Address
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
