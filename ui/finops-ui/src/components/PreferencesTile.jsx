// src/components/PreferencesTile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PreferencesTile() {
  const [prefs, setPrefs] = useState({});
  const [userId] = useState("rajapabba");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get(`/get-preferences?user_id=${userId}`)
      .then((res) => setPrefs(res.data.preferences))
      .catch(() => setStatus("⚠️ Failed to load preferences"));
  }, [userId]);

  const handleChange = (e) => {
    setPrefs({ ...prefs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("/set-preferences", { user_id: userId, preferences: prefs })
      .then(() => setStatus("✅ Preferences saved"))
      .catch(() => setStatus("❌ Error saving preferences"));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="space-y-3 flex-1 min-w-[300px]">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            ⚙️ Finly Preferences
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Preferred Cloud
              </label>
              <select
                name="preferred_cloud"
                value={prefs.preferred_cloud || "all"}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="all">All</option>
                <option value="aws">AWS</option>
                <option value="azure">Azure</option>
                <option value="gcp">GCP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Alert Threshold (%)
              </label>
              <input
                type="number"
                name="alert_threshold"
                value={prefs.alert_threshold || 5.0}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Output Format
              </label>
              <select
                name="output_format"
                value={prefs.output_format || "pdf"}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="pdf">PDF</option>
                <option value="markdown">Markdown</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Time Range
              </label>
              <select
                name="time_range"
                value={prefs.time_range || "this month"}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="this month">This Month</option>
                <option value="last 7 days">Last 7 Days</option>
                <option value="last month">Last Month</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 min-w-[200px]">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
          >
            Save Preferences
          </button>
          {status && <span className="text-sm text-gray-500">{status}</span>}
        </div>
      </div>
    </div>
  );
}
