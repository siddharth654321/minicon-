'use client';

import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';          // 👈 add
import Image from 'next/image';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './index.module.css';
import { MENUS } from '@/app/dummuData';


// const menus = [
//   {
//     label: 'Shop',
//     items: ['New Arrivals', 'Best Sellers', 'All T-Shirts', 'Sale'],
//   },
//   {
//     label: 'Styles',
//     items: [
//       'Graphic Tees',
//       'Plain Tees',
//       'Oversized Tees',
//       'Slim Fit Tees',
//       'Athleisure',
//     ],
//   },
//   {
//     label: 'Collections',
//     items: [
//       'Streetwear',
//       'Minimalist',
//       'Bold Prints',
//       'Vintage Vibes',
//       'Premium Collection',
//       'Limited Edition',
//     ],
//   },
//   {
//     label: 'Shop by Color',
//     items: ['Black', 'White', 'Neutrals', 'Earth Tones', 'Brights'],
//   },
//   {
//     label: 'Shop by Occasion',
//     items: ['Everyday Wear', 'Night Out', 'Workwear', 'Lounge / Home'],
//   },
// ];

export default function Header() {
  const router = useRouter();                         // 👈 add
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

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

  // helper: turn “Streetwear” → “streetwear”, keeps words URL-safe
  const slug = (str: string) =>
    encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));

  return (
    <header className={styles.header}>
      {/* logo */}
      <Link href="/" className={styles.logo}>
        <Image src="/images/logo.webp" alt="Logo" width={120} height={40} priority />
      </Link>

      {/* centre navigation */}
      <nav className={styles.nav}>
        {MENUS.map(({ label, items }, idx) => (
          <div key={label}>
            <Button
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
                  key={item}
                  onClick={() => {
                    router.push(`/categories/${slug(label)}/${slug(item)}`); // 👈 navigate
                    handleClose();
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </nav>

      {/* right-side icons */}
      <div className={styles.actions}>
        <AccountCircleIcon className={styles.icon} />
        <ShoppingCartIcon className={styles.icon} />
      </div>
    </header>
  );
}
