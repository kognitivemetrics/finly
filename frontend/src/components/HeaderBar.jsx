// File: src/components/HeaderBar.jsx

import React from "react";
import styles from "./HeaderBar.module.css";
import finlyLogo from "../assets/Finly-logo.png";

const HeaderBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <div className={styles.logoWrapper}>
          <img src={finlyLogo} alt="Finly" className={styles.glowLogo} />
        </div>
        <h1 className={styles.title}>Finly – Your Cloud Cost Co-Pilot</h1>
      </div>
    </header>
  );
};

export default HeaderBar;
