import React from "react";
import cs from './Header.module.css'
import { Link, NavLink } from 'react-router-dom';
import LogOut from '../../../assets/ico/log-out.svg'

const Header = (props) => {

    return (
        <header className={cs.header}>
            <div className={cs.logo}>
                <Link to="/users"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" /></Link>
                
            </div>

            <div className={cs.login}>
                {props.isAuth ? <>
                    <Link to={`/profile/    `}>{props.login} </Link>
                    <button onClick={props.logout} className={cs.btn}><img src={LogOut} alt="log-out" /></button>
                    
                </>
                    :
                    <div>
                        <NavLink to="/login" className={({ isActive }) => isActive ? `${cs.activeLink}` : ""}>Login</NavLink>
                    </div>
                }

            </div>
        </header>
    );
}



export default Header;