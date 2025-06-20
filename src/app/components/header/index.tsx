'use client';

import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FavoriteBorderOutlined, Menu as MenuIcon } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from './index.module.css';          // <-- your CSS file
import { MENUS } from '@/app/dummyData';
import { Typography } from '@mui/material'
import CartDrawer from '../cartDrawer'
import { useAuth } from '../AuthProvider'

export default function Header() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpen =
    (index: number) =>
      (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(index);
      };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const slug = (str: string) =>
    encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));

  const renderMenus = () => (
    <div className={styles.menus}>
      {MENUS.map(({ label, items }, idx) => (
        <div key={label}>
          <Button
            sx={{ 
              fontFamily: "'Bagel Fat One', system-ui", 
              color: 'white',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
            aria-controls={activeMenu === idx ? `${label}-menu` : undefined}
            aria-haspopup="true"
            onClick={handleOpen(idx)}
            className={styles.navItem}
          >
            {label}
          </Button>
          <Menu
            id={`${label}-menu`}
            anchorEl={anchorEl}
            open={activeMenu === idx}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose, sx: { bgcolor: '#000', border: '1px solid #444' } }}
            keepMounted
            disableScrollLock
          >
            {items.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  router.push(`/categories/${slug(label)}/${slug(item)}`);
                  handleClose();
                  setMobileMenuOpen(false);
                }}
                sx={{
                  bgcolor: '#000',
                  color: 'white',
                  borderBottom: '1px solid #444',
                  '&:last-child': { borderBottom: 'none' },
                  '&:hover': { bgcolor: '#222' }
                }}
              >
                <Typography sx={{ color: 'white', fontFamily: "'Bagel Fat One', system-ui" }}>
                  {item}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
      ))}
    </div>
  );

  return (
    <header className={styles.header}>
      {/* Mobile menu button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleMobileMenuToggle}
          sx={{ mr: 2, color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Center group: logo, search bar, menus */}
      <div className={styles.centerGroup}>
        <Link href="/" scroll={false} className={styles.logo}>
          <Image
            src="/images/logoGif.gif"
            alt="Logo"
            width={150}
            height={50}
            style={{
              height: 'auto',
              width: isMobile ? '120px' : '8vw',
              maxWidth: '150px',
            }}
            priority
          />
        </Link>

        {!isMobile && (
          <TextField
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            size="small"
            variant="outlined"
            sx={{
              width: { md: '26vw', lg: '20vw' },
              background: '#111',
              borderRadius: 1,
              color: 'white',
              '& .MuiInputBase-input': {
                color: 'white',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#aaa',
                opacity: 1,
              },
              ml: 3,
            }}
            inputProps={{ style: { padding: 8, fontSize: 16 } }}
            InputProps={{
              endAdornment: (
                <span style={{ display: 'flex', alignItems: 'center', color: '#aaa', cursor: 'pointer' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    fill="currentColor"
                    style={{ marginRight: 4 }}
                  >
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 0 0 1.41-1.41l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
                  </svg>
                </span>
              ),
            }}
          />
        )}

        {!isMobile && renderMenus()}

        {/* Right actions */}
        <div className={styles.actions}>
          <FavoriteBorderOutlined
            className={styles.icon}
            onClick={() => router.push(user ? '/wishlist' : '/login')}
            style={{ cursor: 'pointer' }}
          />
          <AccountCircleIcon
            className={styles.icon}
            onClick={() => router.push(user ? '/account' : '/login')}
            style={{ cursor: 'pointer' }}
          />
          <ShoppingCartIcon
            className={styles.icon}
            onClick={() => {
              if (!user) {
                router.push('/login');
              } else {
                setCartOpen(true);
              }
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Mobile menu drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '300px',
            bgcolor: '#fff',
            color: '#000',
            padding: 0,
          },
        }}
      >
        <Box sx={{ p: 0 }}>
          {isMobile && (
            <TextField
              fullWidth
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              size="small"
              variant="outlined"
              sx={{
                
                background: '#f5f5f5',
                borderRadius: 1,
                color: '#000',
                '& .MuiInputBase-input': {
                  color: '#000',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#666',
                  opacity: 1,
                },
              }}
              inputProps={{ style: { padding: 8, fontSize: 16 } }}
              InputProps={{
                endAdornment: (
                  <span style={{ display: 'flex', alignItems: 'center', color: '#666', cursor: 'pointer' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      fill="currentColor"
                      style={{ marginRight: 4 }}
                    >
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 0 0 1.41-1.41l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
                    </svg>
                  </span>
                ),
              }}
            />
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {MENUS.map(({ label, items }) => (
              <Accordion
                key={label}
                expanded={expandedAccordion === label}
                onChange={() => setExpandedAccordion(expandedAccordion === label ? false : label)}
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  '&:before': { display: 'none' },
                  border: '1.5px solid #adacac',
                  boxShadow: 'none',
                  margin: 0,
                  '&:not(:last-child)': {
                    borderBottom: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <span style={{ fontSize: 24, width: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {expandedAccordion === label ? '-' : '+'}
                    </span>
                  }
                  sx={{
                    minHeight: 0,
                    padding: '0 16px',
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                      padding: '12px 0 12px 8px',
                      alignItems: 'center',
                    },
                  }}
                >
                  <Typography sx={{ fontFamily: "'Bagel Fat One', system-ui", fontSize: '1.1rem', color: '#000', pl: 1 }}>
                    {label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, m: 0 }}>
                  {items.map((item, index) => (
                    <Box
                      key={item}
                      onClick={() => {
                        router.push(`/categories/${slug(label)}/${slug(item)}`);
                        setMobileMenuOpen(false);
                      }}
                      sx={{
                        p: '10px 0 10px 24px',
                        borderTop: index === 0 ? 'none' : '1px solid #adacac',
                        cursor: 'pointer',
                        '&:hover': { bgcolor: '#f5f5f5' },
                        margin: 0,
                      }}
                    >
                      <Typography sx={{ color: '#000', fontFamily: "'Bagel Fat One', system-ui", fontSize: '1rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Drawer>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
