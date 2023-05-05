import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import css from './Settings.module.css'



const Settings = (props) => {
    return <div>

        <div className={css.settingsWraper}>
            <nav className={css.settingsNav}>
                <div className={css.item}>
                    <NavLink to="profile-edit" className={({ isActive }) => isActive ? `${css.activeLink}` : ""}>Profile edit</NavLink>
                </div>
                <div className={css.item}   >
                    <NavLink to="interface-edit" className={({ isActive }) => isActive ? `${css.activeLink}` : ""}>Interface</NavLink>
                </div>
          </nav>

            <div className={css.settingsWraperContent}><Outlet /></div>
        </div>
    </div>
}



export default Settings