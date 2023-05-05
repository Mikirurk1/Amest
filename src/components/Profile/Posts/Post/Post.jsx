import React from "react";
import cs from './Post.module.css'

const Post = (props) => {
    return (
        <div className={cs.item}>
            <div className={cs.headPost}>
                <img className={cs.avatar} src={props.avatar} alt="" />
                <div className={cs.postNickname}>{props.name}</div>
            </div>
            <div className={cs.mainPost}><p>{props.text}</p></div>
            <div className={cs.footerPost}>
                <button  className={cs.heart}></button>

                <div>{props.likes}</div>
            </div>


        </div>
    );
}

export default Post;