import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const pageContent = {
    home: {
      title: 'Welcome to Home',
      content: 'This is the home page of our website.'
    },
    about: {
      title: 'Welcome to About',
      content: 'Learn more about our company and our mission.'
    },
    contact: {
      title: 'Welcome to Contact',
      content: 'Get in touch with us. We\'d love to hear from you!'
    }
  };

  return (
    <div className="App">
      <button className="menu-button" onClick={toggleSidebar}>
        <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />
      
      <main className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <h1>{pageContent[currentPage].title}</h1>
        <p>{pageContent[currentPage].content}</p>
      </main>
    </div>
  );
}

export default App;