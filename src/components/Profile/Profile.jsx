import React from "react";
import cs from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  return (
    <div className={cs.content}>
      <div>
        <UserInfo {...props} 
        profile={props.profile} 
        status={props.status} 
        updateStatus={props.updateStatus}
        isAuth={props.isAuth}
       userId={props.userId}
       authUserId ={props.auth}
       numberPhone={props.numberPhone}
       email={props.email}/>
       
      </div>
      <PostsContainer />
    </div>
  );
}

export default Profile;