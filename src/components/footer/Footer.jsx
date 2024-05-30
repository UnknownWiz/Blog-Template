import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.logo}>
                <Image src='/logo.png' alt='Blog' width={50} height={50}/>
            <h1 className={styles.logoText}>Blog Template</h1>
            </div>
        <p className={styles.desc}>Occaecat do magna commodo incididunt incididunt minim exercitation labore nulla aliqua officia esse.</p>
        <div className={styles.icons}>
            <Image src='/instagram.png' alt='' width={18} height={18} />
        </div>
        </div>
        <div className={styles.links}>
            <div className={styles.list}>
                <span className={styles.listTitle}>Links</span>
                <Link href='/'>Homepage</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Contact Us</Link>
            </div>
            <div className={styles.list}>
                <span className={styles.listTitle}>Tags</span>
                <Link href='/'>Style</Link>
                <Link href='/'>Fashion</Link>
                <Link href='/'>Culture</Link>
                <Link href='/'>Travel</Link>
            </div>
            <div className={styles.list}>
                <span className={styles.listTitle}>Socials</span>
                <Link href='/'>Instagram</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer