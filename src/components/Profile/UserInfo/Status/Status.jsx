import React, { useState, useEffect } from 'react'
import css from './Status.module.css'


const Stutus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
useEffect(()=>{
    setStatus(props.status)
},[props.status])

   const activateEditMode = () =>{
    if(props.isAuth){
        if(props.authUserId===props.userId||!props.userId){
            setEditMode(true);
        }

    }

   }

   const deactivateEditMode =()=>{
setEditMode(false)
props.updateStatus(status)
   }

   const onStatusChange = (text)=>{
setStatus(text.currentTarget.value)
   }



    return (
        
        <div className={css.container}>
            {!editMode ?
                <div>
                    <span className={props.authUserId === props.userId || !props.userId ? css.myStatus:css.status} onDoubleClick={activateEditMode}>{status !== "" ? status : "user dont say about yourself"}</span>
                </div >
                :
                <div>
                    <input  autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode} type="text" className={css.status} />
                </div>
            }
       </div>)
}

export default Stutus;