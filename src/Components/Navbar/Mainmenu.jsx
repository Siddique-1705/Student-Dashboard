import React from 'react'
import './NavbarStyle.css';
import { Link } from 'react-router-dom';

export const Mainmenu = () => {
  return (
        <div className="Main_menu">
            <h3>Main Menu</h3>
            <ul>
              <Link className="links" to="/Overview"><i class="fa-solid fa-grid-2"></i><b>Overview</b></Link>
              <Link className="links" to="/Students"><i class="fa-solid fa-user-graduate"></i><b>Students</b></Link>
              <Link className="links" to="/Announcement"><i class="fa-solid fa-volume"></i><b>Announcement</b></Link>
              <Link className="links" to="/Assignment"><i class="fa-solid fa-bag-shopping"></i><b>Assignment</b></Link>
              <Link className="links" to="/Circular"><i class="fa-solid fa-rotate"></i><b>Circular</b></Link>
              <Link className="links" to="/Attendance"><i class="fa-regular fa-calendar-days"></i><b>Attendance</b></Link>
            </ul>
        </div>  )
}
