import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        </div>
        <div className={styles.logo}>Tempor ullamco</div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link className={styles.link} href='/'>Homepage</Link>
            <Link className={styles.link} href='/'>Contact</Link>
            <Link className={styles.link} href='/'>About</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

export default NavBar