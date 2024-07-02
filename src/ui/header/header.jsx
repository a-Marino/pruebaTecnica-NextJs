'use client';

import { useState } from 'react';
import styles from './header.module.css';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            alt="User profile picture"
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1719888228/Screenshot_2024-07-01_202033_gly3aj.png"
            width={10}
            height={10}
            className={styles.image}
            priority
          />
          Andres Marino
        </div>
        <div className={`${styles.links} ${styles.desktopLinks}`}>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#interest" className={styles.link}>
            Interest
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
        <div className={styles.mobileMenuButton}>
          <button onClick={handleToggle} type="button" className={styles.button}>
            <Menu />
          </button>
        </div>
      </div>
      <div className={`${styles.mobileLinks} ${isOpen ? styles.show : styles.hide}`}>
        <a href="#about" className={styles.link} onClick={handleToggle}>
          About
        </a>
        <a href="#interest" className={styles.link} onClick={handleToggle}>
          Interest
        </a>
        <a href="#contact" className={styles.link} onClick={handleToggle}>
          Contact
        </a>
      </div>
    </nav>
  );
}
