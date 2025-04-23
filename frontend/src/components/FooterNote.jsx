// File: src/components/FooterNote.jsx
import React from "react";

export default function FooterNote() {
  return (
    <footer className="text-center py-4 text-xs text-gray-400">
      © {new Date().getFullYear()} Finly by CloudMetrics. All rights reserved.
    </footer>
  );
}