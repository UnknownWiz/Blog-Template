import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        className={styles.image}
          src="/p1.jpeg"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>03.09.27 - </span>
            <span className={styles.category}>Culture</span>
        </div>
        <Link href='/'>
        <h1>Duis esse duis et ex cupidatat commodo quis velit eu laboris.</h1>
        </Link>
        <p className={styles.desc}>Culpa dolor labore anim laboris qui. Ullamco officia do tempor sunt mollit aliqua nulla cupidatat. Veniam laborum commodo amet incididunt. Id cupidatat anim exercitation id ex mollit officia Lorem nostrud. Labore adipisicing consectetur cillum irure nisi elit anim non quis esse amet sit consectetur.</p>
        <Link href='/' className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
