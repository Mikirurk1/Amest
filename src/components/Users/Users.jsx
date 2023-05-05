
import React from "react";
import  style from './style.module.css';
import stockAvatar from '../../assets/images/stockAvatar.png';
import lastpage from '../../assets/ico/last-page.ico'
import firstpage from '../../assets/ico/first-page.ico'
import { Link } from 'react-router-dom';
import classNames from 'classnames';




const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesToDisplay = 5
    let pages = [],
        start = 1,
        end = pagesToDisplay + 1;
    if (props.currentPage > (pagesToDisplay) / 2) {
        start = props.currentPage - (pagesToDisplay - 1) / 2;
        end = start + pagesToDisplay;
    }
    if (props.currentPage > pagesCount - (pagesToDisplay + 1) / 2) {
        start = pagesCount - pagesToDisplay;
        end = pagesCount;
    }
    for (let i = start; i < end; i++)pages.push(i);


    return <div>
        {/* Pegination ///////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className={style.pagination}>
            <button
                onClick={() => props.onPageChange(1)}
                className={classNames("material-symbols-outlined")}
                type="button"
            > <img className={style.imgPagination} src={firstpage} alt="" />
            </button>
            <button
                onClick={() => { if (props.currentPage > 1) { props.onPageChange(props.currentPage - 1) } }}
                className="material-symbols-outlined"
                type="button"
            > <img className={style.imgPagination} src={firstpage} alt="" />
            </button>
            {pages.map(page => {
                return <button key={page} onClick={() => { props.onPageChange(page) }} className={props.currentPage === page ? style.active : null}>{page}</button>
            })
            }
            <button
                onClick={() => { if (props.currentPage < pagesCount) { props.onPageChange(props.currentPage + 1) } }}
                className="material-symbols-outlined"
                type="button"
            > <img className={style.imgPagination} src={lastpage} alt="" />
            </button>
            <button
                onClick={() => props.onPageChange(pagesCount)}
                className="material-symbols-outlined"
                type="button"
            > <img className={style.imgPagination} src={lastpage} alt="" />
            </button>
        </div>

        {/* Users ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {
            props.users.map(user => <div key={user.id} className={style.userContainer}>
                <div>
                    <div>
                        <Link to={`/profile/${user.id}`} >
                            <img className={style.imgUsers} src={user.photos.small != null ? user.photos.small : stockAvatar} alt="" />
                        </Link>
                    </div>
                    <div>
                        {!props.isAuth ? "" : user.followed ?
                            <button className={style.followButton} disabled={props.disabledArr.some(id => id === user.id)}
                                onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button className={style.followButton} disabled={props.disabledArr.some(id => id === user.id)}
                                onClick={() => { props.follow(user.id) }}>Follow</button>
                        }
                    </div>

                </div>
                <div className={style.nickname}>
                    {user.name}
                </div>
                <div className={style.status}>
                    {user.status != null ? user.status : 'user dont say about yourself'}
                </div>
                <div className={style.location}>
                    user.location.country, user.location.city
                </div>
            </div>)
        }
    </div >
}

export default Users;