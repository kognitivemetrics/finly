import React, { useEffect, useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const DriftChartTile = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/drift-history")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((entry) => ({
          time: new Date(entry.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          spend: parseFloat(entry.total),
        }));
        setHistory(formatted);
      });
  }, []);

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
  <h2 className="text-xl font-bold mb-2">📈 Cloud + LLM Spend Trend</h2>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={history}>
      <XAxis dataKey="time" />
      <YAxis tickFormatter={(v) => `$${v.toLocaleString()}`} />
      <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
      <Line type="monotone" dataKey="spend" stroke="#1F9A8E" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
</div>

  );
};

export default DriftChartTile;
