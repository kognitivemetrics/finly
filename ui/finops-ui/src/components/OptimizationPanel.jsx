// File: src/components/OptimizationPanel.jsx
import React from "react";

export default function OptimizationPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Optimization Opportunities</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        <li>Idle EC2 Instances — save $150/mo</li>
        <li>Azure Blob Tiering — save $45/mo</li>
        <li>Unused Static IPs in GCP — save $30/mo</li>
      </ul>
    </div>
  );
}