// File: App.js

import { useState } from 'react';
import './App.css';
import SidebarNav from './components/SidebarNav';
import HeaderBar from './components/HeaderBar';
import DashboardPage from './pages/DashboardPage';
import InsightChatView from './components/InsightChatView';
import AskFinlyBox from './components/AskFinlyBox';

function App() {
  const [activePage, setActivePage] = useState('chat');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      const data = await res.json();
      setResponse(data.response);
      setHistory([{ question: query, answer: data.response }, ...history]);
    } catch (err) {
      setResponse('Oops! Finly had trouble responding. Please try again.');
    }
    setQuery('');
    setLoading(false);
  };

  const downloadReport = () => {
    setDownloading(true);
    fetch('http://localhost:8000/report/pdf')
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'finly_report.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(() => alert("Download failed. Try again."))
      .finally(() => setDownloading(false));
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'insights':
        return <InsightChatView />;
      case 'reports':
        return <div className="page-content">📄 Reports module is under development.</div>;
      case 'chat':
      default:
        return (
          <AskFinlyBox
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            downloadReport={downloadReport}
            loading={loading}
            downloading={downloading}
            response={response}
          />
        );
    }
  };

  return (
    <div className="app-container">
      <SidebarNav activePage={activePage} setActivePage={setActivePage} />
      <div className="main-panel">
        <HeaderBar />
        <main className="main-content">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
