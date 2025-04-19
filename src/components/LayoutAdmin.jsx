import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
