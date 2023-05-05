import React from "react";
import cs from './User.module.css'
import stockAvatar from '../../../assets/images/stockAvatar.png';
import stockBG from '../../../assets/images/stockBG.jpg';
import settingIco from '../../../assets/ico/settings.svg';
import Preloader from '../../common/Preloader/Preloader';
import Status from './Status/Status.jsx'
import { Link } from 'react-router-dom';

const UserInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={cs.user_bg}>
                <img src={props.profile.photos.large === null ? stockBG : props.profile.photos.large} alt="" />
            </div>
            <div className={cs.user_info}>
                <div className={cs.avatar}>
                    <img src={props.profile.photos.small === null ? stockAvatar : props.profile.photos.small} alt="" />
                </div>

                <div className={cs.nickName}>{props.profile.fullName}</div>
                <Status status={props.status}
                    updateStatus={props.updateStatus}
                    isAuth={props.isAuth}
                    userId={props.userId}
                    authUserId={props.authUserId} />
                
                    {props.authUserId === props.userId || !props.userId ? <>
                    <div>{props.numberPhone}</div>
                <div>{props.email}</div>
               <Link to={"/settings"} ><img src={settingIco} className={cs.setting} alt="" /></Link>
               
                </> : ""}
                    
            </div>
        </div>
    );
}

export default UserInfo;