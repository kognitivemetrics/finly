// File: SummaryCards.jsx

import React from "react";
import styles from "./SummaryCards.module.css";

const cards = [
  { title: "AWS", value: "$1,234.56", trend: "+12%", trendType: "up" },
  { title: "Azure", value: "$987.65", trend: "-3%", trendType: "down" },
  { title: "GCP", value: "$543.21", trend: "+8%", trendType: "up" },
  { title: "LLM", value: "$82,732.96", trend: "+71%", trendType: "up" }
];

const SummaryCards = () => {
  return (
    <div className={styles.cardRow}>
      {cards.map((card, idx) => (
        <div key={idx} className={styles.card}>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
          <p className={card.trendType === "up" ? styles.trendUp : styles.trendDown}>{card.trend}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
