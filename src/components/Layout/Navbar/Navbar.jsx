import React from "react";
import { NavLink } from "react-router-dom";
import cs from './Navbar.module.css'


const Navbar = () =>{
    return(
    <nav className={cs.nav}>
        <div className={cs.item}>
          <NavLink to="/profile" className={({ isActive }) => isActive ? `${cs.activeLink}` : ""}>Profile</NavLink>
        </div>
        <div className={cs.item}>
          <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${cs.activeLink}` : ""}>Messeges</NavLink>
        </div>
         <div className={cs.item}>
          <NavLink to="/users" className={({ isActive }) => isActive ? `${cs.activeLink}` : ""}>Users</NavLink>
        </div>
        {/* <div className={cs.item}>
          Settings
        </div> */}
      </nav>
      );
}

export default Navbar;