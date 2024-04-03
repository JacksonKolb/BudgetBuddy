// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  const checkHealth = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/health`, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
            if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); 
      alert(`Health Check Status: ${data.status}`);
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch health check status.');
    }
  };

  return (
    <div>
      <button onClick={checkHealth}>Check Backend Health</button>
    </div>
  );
};

export default App;
