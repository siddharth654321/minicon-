'use client';

import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';   // ADD THIS IMPORT
import styles from './index.module.css';
import { MENUS } from '@/app/dummyData';
import { Typography } from '@mui/material';
import MiniconLogo from '../logo';

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [search, setSearch] = useState(''); // 👈 ADD THIS LINE

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

  const slug = (str: string) =>
    encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));

  return (
    <header className={styles.header}>
      {/* logo */}
      <Link href="/" scroll={false} className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={270} height={90} priority />
      </Link>

      {/* centre navigation */}
      <nav className={styles.nav}>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products..."
          size="small"
          variant="outlined"
          sx={{
        width: '40vw',
        background: '#111',
        borderRadius: 1,
        color: 'white',
        '& .MuiInputBase-input': {
          color: 'white', // <-- Set value color here
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
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 0 0 1.41-1.41l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
            </svg>
          </span>
        ),
          }}
        />

        {/* --- MENUS BELOW --- */}
        <div style={{ display: 'flex', gap: 32 }}>
          {MENUS.map(({ label, items }, idx) => (
        <div key={label}>
          <Button
            sx={{ fontFamily: "'Bagel Fat One', system-ui", color: 'white' }}
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
            MenuListProps={{ onMouseLeave: handleClose }}
            keepMounted
            disableScrollLock
          >
            {items.map((item) => (
          <MenuItem
            color='red'
            key={item}
            onClick={() => {
              router.push(`/categories/${slug(label)}/${slug(item)}`);
              handleClose();
            }}
          >
            <Typography>{item}</Typography>
          </MenuItem>
            ))}
          </Menu>
        </div>
          ))}
        </div>
      </nav>

      {/* right-side icons */}
      <div className={styles.actions}>
        <AccountCircleIcon
          className={styles.icon}
          onClick={() => router.push('/account')}
          style={{ cursor: 'pointer' }}
        />
        <ShoppingCartIcon
          className={styles.icon}
          onClick={() => router.push('/cart')}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </header>
  );
}
