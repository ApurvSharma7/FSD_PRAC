import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, onNavigate, currentPage }) => {
  const menuItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Contact', id: 'contact' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;