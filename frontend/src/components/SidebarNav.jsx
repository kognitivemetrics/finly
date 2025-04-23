// File: SidebarNav.jsx

import React from "react";
import styles from "./SidebarNav.module.css";
import { FaRobot, FaComments, FaChartBar, FaLightbulb, FaFileAlt } from "react-icons/fa";
import logo from "../assets/Finly-logo.png";

const SidebarNav = ({ activePage, setActivePage }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Finly Logo" className={styles.logo} />
        <h2 className={styles.brand}>Finly</h2>
      </div>

      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${activePage === "chat" ? styles.active : ""}`}
          onClick={() => setActivePage("chat")}
        >
          <FaComments className={styles.icon} />
          Ask Finly
        </li>
        <li
          className={`${styles.navItem} ${activePage === "dashboard" ? styles.active : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          <FaChartBar className={styles.icon} />
          Dashboard
        </li>
        <li
          className={`${styles.navItem} ${activePage === "insights" ? styles.active : ""}`}
          onClick={() => setActivePage("insights")}
        >
          <FaLightbulb className={styles.icon} />
          Insights
        </li>
        <li
          className={`${styles.navItem} ${activePage === "reports" ? styles.active : ""}`}
          onClick={() => setActivePage("reports")}
        >
          <FaFileAlt className={styles.icon} />
          Reports
        </li>
      </ul>
    </aside>
  );
};

export default SidebarNav;
