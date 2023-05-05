import React from 'react'
import { Link } from 'react-router-dom';
import css from './Unauthorized.module.css';

export const Unauthorized = () => {
    return (
        <div className={css.container}>
            <div className={css.box}>
                <div className={css.row}>
                    <Link className={css.link} to="/users">Users</Link>
                </div>
                <div className={css.row}>
                    <Link className={css.link} to="/login">Login</Link>
                    Or
                    <a className={css.link} href="https://social-network.samuraijs.com/signUp">Registration</a>
                </div>
            </div>

        </div>)

}