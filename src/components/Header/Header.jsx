import { useState, useRef } from "react";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__wrapper}>
            <Logo title="Good" span="lyfe" />
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
