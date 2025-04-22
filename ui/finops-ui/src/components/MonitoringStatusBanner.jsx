// File: MonitoringStatusBanner.jsx
import React from "react";
import "./MonitoringStatusBanner.css";
import { FaCircle } from "react-icons/fa";

const MonitoringStatusBanner = ({ connected = true }) => {
  return (
    <div className={`status-banner ${connected ? "connected" : "disconnected"}`}>
      <FaCircle className="status-icon" />
      <span className="status-text">
        {connected ? "Finly is monitoring your cloud spend in real time" : "Disconnected"}
      </span>
    </div>
  );
};

export default MonitoringStatusBanner;
