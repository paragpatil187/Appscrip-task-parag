"use client";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Desktop Header - Top Line */}
      <div className={styles.topLine}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>LOGO</h1>
          
          
            
        </div>
        <div className={styles.iconGroup}>
          <button aria-label="Search" className={styles.icon}>
          <img src="/search-normal.png"/>
          </button>
          <button aria-label="Favorites" className={styles.icon}>
          <img src="/heart.png"/>
          </button>
          <button aria-label="Account" className={styles.icon}>
          <img src="/user.svg"/>
          </button>
          <button aria-label="Cart" className={styles.icon}>
          <img src="/shopping-bag.svg"/>
          </button>
        </div>
      </div>

      {/* Desktop Header - Bottom Line (Navigation) */}
      <nav className={styles.bottomLine}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>SHOP</li>
          <li className={styles.navLink}>SKILLS</li>
          <li className={styles.navLink}>STORIES</li>
          <li className={styles.navLink}>ABOUT</li>
          <li className={styles.navLink}>CONTACT US</li>
        </ul>
      </nav>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className={styles.hamburgerButton}
        onClick={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.active : ""}`}
        ></span>
      </button>

      {/* Mobile Menu (Slides in when active) */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <nav className={styles.mobileNavContainer}>
          <ul className={styles.mobileNavLinks}>
            <li className={styles.mobileNavLink}>SHOP</li>
            <li className={styles.mobileNavLink}>SKILLS</li>
            <li className={styles.mobileNavLink}>STORIES</li>
            <li className={styles.mobileNavLink}>ABOUT</li>
            <li className={styles.mobileNavLink}>CONTACT US</li>
          </ul>
          <div className={styles.mobileIconGroup}>
            <button aria-label="Search" className={styles.mobileIcon}>
              <i className="tiTiSearch" /> Search
            </button>
            <button aria-label="Favorites" className={styles.mobileIcon}>
              <i className="tiTiHeart" /> Favorites
            </button>
            <button aria-label="Account" className={styles.mobileIcon}>
              <i className="tiTiUser" /> Account
            </button>
            <button aria-label="Cart" className={styles.mobileIcon}>
              <i className="tiTiShoppingCart" /> Cart
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
