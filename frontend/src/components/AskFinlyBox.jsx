// File: src/components/AskFinlyBox.jsx

import React from 'react';
import { FaDownload, FaRobot } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';

const AskFinlyBox = ({
  query,
  setQuery,
  handleSubmit,
  downloadReport,
  loading,
  downloading,
  response,
}) => {
  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <FaRobot style={styles.icon} />
          <h2 style={styles.title}>Ask Finly About Your Cloud Spend</h2>
        </div>
        <p style={styles.subtitle}>Instant insights from your cloud bills</p>

        <textarea
          style={styles.textarea}
          placeholder="e.g. How much did we spend on Azure last month?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={3}
        />

        <div style={styles.actions}>
          <button onClick={handleSubmit} disabled={loading} style={styles.askButton}>
            {loading ? 'Thinking...' : 'Ask Finly'}
          </button>

          <button onClick={downloadReport} disabled={downloading} style={styles.downloadButton}>
            {downloading ? <ImSpinner2 className="spinner" /> : <FaDownload />}
            <span style={{ marginLeft: '8px' }}>Download FinOps Report</span>
          </button>
        </div>

        {response && (
          <div style={styles.responseBox}>
            {response}
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    padding: '24px',
    width: '100%',
    maxWidth: '720px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  icon: {
    fontSize: '24px',
    color: '#1F9A8E',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
  },
  subtitle: {
    color: '#555',
    marginBottom: '16px',
  },
  textarea: {
    width: '100%',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid #ddd',
    fontSize: '15px',
    marginBottom: '16px',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
  },
  askButton: {
    backgroundColor: '#1F9A8E',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  downloadButton: {
    backgroundColor: '#E2E8F0',
    border: '1px solid #CBD5E0',
    color: '#1A202C',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  responseBox: {
    backgroundColor: '#f9fafb',
    border: '1px solid #e2e8f0',
    padding: '16px',
    borderRadius: '8px',
    whiteSpace: 'pre-wrap',   // ✅ wrap long lines
    wordBreak: 'break-word',  // ✅ break long words if needed
  },
};

export default AskFinlyBox;
