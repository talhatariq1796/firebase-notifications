import React from 'react';
import './App.css';
import NotificationSystem from './NotificationSystem';
import ViewNotifications from './ViewNotifications';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notification System</h1>
        <NotificationSystem />
        <ViewNotifications />
      </header>
    </div>
  );
};

export default App;
