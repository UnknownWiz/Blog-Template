import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Blog Template <b>built with Nextjs!</b></h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.postTitle}>Enim eu duis ut sint aliqua nostrud laborum aliquip ea veniam.</h1>
                <p className={styles.postDesc}>Elit laboris et est est occaecat aute enim. Laboris sunt mollit pariatur ipsum. Ad veniam cillum mollit nulla magna excepteur esse dolore tempor eu.</p>
                <button className={styles.postButton}>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured