import React from "react";
import styles from "./menu.module.css";
import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Whats Hot"}</h2>
      <h1 className={styles.title}>Most Popular Posts</h1>
      <MenuPosts  withImage={false} />
      {/* Next Container  */}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuCategories />

      {/* Next Container  */}
      <h2 className={styles.subtitle}>{"Whats Hot"}</h2>
      <h1 className={styles.title}>Editor Picks</h1>
        <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
