import React from "react";
import './NavbarStyle.css';

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="nav-content-left">
                <img src='./Image/santric_technologies_logo.jpg'/>
                <input className="nav-input" type="text" placeholder="Search.." />
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div className="nav-content">
              <span><i class="fa-regular fa-bell"></i></span>
              <div className="nav-content-right">
                <div className="nav-content-img">
                    <img src='./Image/santric_technologies_logo.jpg'/>
                </div>
                <div className="nav-content-right-last">    
                    <span><b>Santric Technology</b></span>
                    <p>Super Admin</p>
                </div>
              </div>
            </div>
        </nav>
        </>
    )    
}
export default Navbar