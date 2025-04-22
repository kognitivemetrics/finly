// File: src/pages/DashboardPage.jsx
import React from "react";
import MonitoringStatusBanner from "../components/MonitoringStatusBanner";
import SummaryCards from "../components/SummaryCards";
import DriftChartTile from "../components/DriftChartTile";
import OptimizationPanel from "../components/OptimizationPanel";

const DashboardPage = () => {
  return (
    <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Cloud Monitoring Status */}
      <MonitoringStatusBanner connected={true} />

      {/* Cloud Spend Summary */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>💵 Cloud Spend Overview</h2>
        <SummaryCards />
      </section>

      {/* Drift Chart */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>📈 Cost Drift Over Time</h2>
        <DriftChartTile />
      </section>

      {/* Optimization Panel */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>🛠️ Optimization Opportunities</h2>
        <OptimizationPanel />
      </section>
    </div>
  );
};

export default DashboardPage;
