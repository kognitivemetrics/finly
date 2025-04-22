// File: InsightChatView.jsx

import React from "react";
import styles from "./InsightChatView.module.css";

const mockInsights = [
  {
    question: "How much did we spend on Azure last month?",
    answer: "Your Azure spend for March was $987.65, a 3% decrease from February."
  },
  {
    question: "Any major cost contributors in AWS?",
    answer: "EC2 and S3 accounted for over 70% of AWS spend. Consider rightsizing EC2 instances."
  }
];

const InsightChatView = () => {
  return (
    <div className={styles.chatBox}>
      <h2>💬 Finly Insights</h2>
      <ul className={styles.chatList}>
        {mockInsights.map((item, idx) => (
          <li key={idx} className={styles.chatItem}>
            <p className={styles.question}><strong>Q:</strong> {item.question}</p>
            <p className={styles.answer}><strong>A:</strong> {item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightChatView;
