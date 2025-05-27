'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Divider,
    MenuItem,
    Select,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


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

const formatINR = (v: number) =>
    `₹${v.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

export default function CartPage() {
    const [cart, setCart] = useState(DUMMY_CART); // <-- use state instead of DUMMY_CART
    const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
    const [selectedAddress, setSelectedAddress] = useState(INITIAL_ADDRESSES[0].id);
    const [paymentMode, setPaymentMode] = useState('card');
    const [openAddModal, setOpenAddModal] = useState(false);

    // Form state for the new address
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

    const selectedAddressObj = addresses.find(addr => addr.id === selectedAddress);

    // Helper: Handle address field change in modal
    function handleAddrChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewAddr({ ...newAddr, [e.target.name]: e.target.value });
    }

    // Helper: Add new address and select it
    function handleAddAddress() {
        const newId = `ADDR-${Date.now()}`;
        const fullNewAddr = { ...newAddr, id: newId };
        setAddresses(prev => [...prev, fullNewAddr]);
        setSelectedAddress(newId);
        setNewAddr({ name: '', line1: '', city: '', state: '', pincode: '', phone: '' });
        setOpenAddModal(false);
    }

    // All fields required for add address (very basic validation)
    const canAdd =
        newAddr.name.trim() &&
        newAddr.line1.trim() &&
        newAddr.city.trim() &&
        newAddr.state.trim() &&
        newAddr.pincode.trim() &&
        newAddr.phone.trim();

    return (
        <Box
            sx={{
                px: { xs: 2, sm: 4 },
                maxWidth: 1200,
                mx: 'auto',
                bgcolor: '#fff',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h4" fontWeight={700} mb={3} color="black">
                My Cart
            </Typography>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                alignItems="flex-start"
            >
                {/* Cart items */}
                <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h6" mb={2} color="black">
                        Items ({cart.length})
                    </Typography>
                    {cart.map((item) => (
                        <Card
                            key={item.id}
                            variant="outlined"
                            sx={{
                                mb: 2,
                                bgcolor: '#fff',
                                borderColor: '#eee',
                                color: 'black',
                            }}
                        >
                            <Box sx={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {/* Centered Image */}
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#f5f5f5',
                                        flexShrink: 0,
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={80} // You can adjust size as needed
                                        height={80}
                                        style={{ objectFit: 'contain', display: 'block' }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1, p: 2 }}>
                                    <Typography fontWeight={600} color="black">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="#333">
                                        {item.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="#333">
                                        Size: {item.size}
                                    </Typography>
                                    <Typography variant="body2" color="#333">
                                        Qty: {item.qty}
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2, minWidth: 90, textAlign: 'right' }}>
                                    <Typography fontWeight={700} color="black">
                                        {formatINR(item.price * item.qty)}
                                    </Typography>
                                </Box>
                                <Box sx={{ px: 1, display: 'flex', alignItems: 'center' }}>
                                    <IconButton
                                        aria-label="delete"
                                        sx={{ color: '#575757' }}
                                        onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                                    >
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Card>

                    ))}

                    <Card
                        variant="outlined"
                        sx={{
                            mt: 2,
                            bgcolor: '#fff',
                            borderColor: '#eee',
                            color: 'black',
                        }}
                    >
                        <CardContent>
                            <Typography fontWeight={700} gutterBottom color="black">
                                Price Details
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography color="black">Subtotal</Typography>
                                <Typography color="black">{formatINR(subtotal)}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography color="black">Shipping</Typography>
                                <Typography color="black">
                                    {shipping === 0 ? 'Free' : formatINR(shipping)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography color="black">Taxes &amp; Fees</Typography>
                                <Typography color="black">{formatINR(taxes)}</Typography>
                            </Box>
                            <Divider sx={{ my: 1, borderColor: '#eee' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography fontWeight={700} color="black">
                                    Total
                                </Typography>
                                <Typography fontWeight={700} color="black">
                                    {formatINR(total)}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                {/* Address + Payment */}
                <Box sx={{ width: { xs: '100%', md: 340 } }}>
                    {/* Address dropdown */}
                    <Card
                        variant="outlined"
                        sx={{
                            mb: 3,
                            bgcolor: '#fff',
                            borderColor: '#eee',
                            color: 'black',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight={700} gutterBottom color="black">
                                Shipping Address
                            </Typography>
                            <Select
                                fullWidth
                                value={selectedAddress}
                                onChange={(e) => setSelectedAddress(e.target.value)}
                                size="small"
                                sx={{
                                    mb: 2,
                                    color: 'black',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#ccc',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'black',
                                    },
                                    bgcolor: '#f5f5f5',
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: '#eee',
                                            color: 'black',
                                        },
                                    },
                                }}
                            >
                                {addresses.map(addr => (
                                    <MenuItem key={addr.id} value={addr.id} sx={{ color: 'black', bgcolor: '#eee' }}>
                                        {`${addr.name}, ${addr.city}`}
                                    </MenuItem>
                                ))}
                            </Select>
                            {selectedAddressObj && (
                                <Box sx={{ mb: 1 }}>
                                    <Typography fontWeight={600} color="black">
                                        {selectedAddressObj.name}
                                    </Typography>
                                    <Typography variant="body2" color="#333">
                                        {selectedAddressObj.line1}, {selectedAddressObj.city}, {selectedAddressObj.state} - {selectedAddressObj.pincode}
                                    </Typography>
                                    <Typography variant="body2" color="#333">
                                        {selectedAddressObj.phone}
                                    </Typography>
                                </Box>
                            )}
                            <Button
                                size="small"
                                sx={{ mt: 1, color: 'black', borderColor: '#ccc' }}
                                variant="outlined"
                                onClick={() => setOpenAddModal(true)}
                            >
                                + Add New Address
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Add Address Modal */}
                    <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)} PaperProps={{
                        sx: { bgcolor: '#eee', color: 'black' }
                    }}>
                        <DialogTitle>Add New Address</DialogTitle>
                        <DialogContent>
                            <Stack spacing={2} mt={1}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={newAddr.name}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                                <TextField
                                    label="Address Line"
                                    name="line1"
                                    value={newAddr.line1}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                                <TextField
                                    label="City"
                                    name="city"
                                    value={newAddr.city}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                                <TextField
                                    label="State"
                                    name="state"
                                    value={newAddr.state}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                                <TextField
                                    label="Pincode"
                                    name="pincode"
                                    value={newAddr.pincode}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    value={newAddr.phone}
                                    onChange={handleAddrChange}
                                    fullWidth
                                    InputLabelProps={{ style: { color: '#bbb' } }}
                                    sx={{ '& .MuiInputBase-root': { color: 'black' } }}
                                />
                            </Stack>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenAddModal(false)} sx={{ color: '#bbb' }}>
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: '#fe5000', color: '#fff', '&:hover': { bgcolor: '#d64500' } }}
                                disabled={!canAdd}
                                onClick={handleAddAddress}
                            >
                                Add Address
                            </Button>
                        </DialogActions>
                    </Dialog>

                    {/* Payment mode */}
                    <Card
                        variant="outlined"
                        sx={{
                            mb: 3,
                            bgcolor: '#fff',
                            borderColor: '#eee',
                            color: 'black',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight={700} gutterBottom color="black">
                                Payment Mode
                            </Typography>
                            <Select
                                fullWidth
                                value={paymentMode}
                                onChange={(e) => setPaymentMode(e.target.value)}
                                size="small"
                                sx={{
                                    mt: 1,
                                    color: 'black',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#ccc',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'black',
                                    },
                                    bgcolor: '#f5f5f5',
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: '#eee',
                                            color: 'black',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="card" sx={{ color: 'black', bgcolor: '#eee' }}>
                                    Credit / Debit Card
                                </MenuItem>
                                <MenuItem value="cod" sx={{ color: 'black', bgcolor: '#eee' }}>
                                    Cash on Delivery
                                </MenuItem>
                                <MenuItem value="upi" sx={{ color: 'black', bgcolor: '#eee' }}>
                                    UPI
                                </MenuItem>
                                <MenuItem value="netbanking" sx={{ color: 'black', bgcolor: '#eee' }}>
                                    Netbanking
                                </MenuItem>
                            </Select>
                        </CardContent>
                    </Card>

                    {/* Checkout button */}
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        href={`/checkout?cart=${encodeURIComponent(JSON.stringify(DUMMY_CART))}`}
                        sx={{ fontWeight: 700, py: 1.5, bgcolor: '#fe5000', color: '#fff', '&:hover': { bgcolor: '#d64500' } }}
                    >
                        Proceed to Checkout
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
