import React from 'react';
import './SideBar.scss';
import { LuLayoutDashboard,LuMessageCircle } from 'react-icons/lu';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">MyDokoterako</h2>
      <ul className="sidebar-menu">
        <li><LuLayoutDashboard className='icons' /> <span>Accueil</span></li>
        <li><LuMessageCircle className='icons' /> <span>Discussions</span></li>
      </ul>
    </div>
  );
};

export default SideBar;
