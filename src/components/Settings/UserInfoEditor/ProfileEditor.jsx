import React, { useState, useEffect } from 'react'
import Attachment from '../../../assets/ico/attachment.svg'
import css from "./ProfileEditor.module.css"



const ProfileEditor = (props) => {

    let [nickname, setNickname] = useState(props.nickname)
    let [status, setStatus] = useState(props.status)
    let [email, setEmail] = useState(props.email)
    let [phone, setPhone] = useState(props.phone)
    let [photo, setPhoto] = useState(props.photo)
    useEffect(() => {
        props.setUserInfoSettings(nickname, status, email, phone, photo)
    })
    const onNicknameChange = (text) => {
        setNickname(text.currentTarget.value)
    }
    const saveNickname = () => {
        props.updateUserNicknameSetting(nickname)
    }
    const onStatusChange = (text) => {
        setStatus(text.currentTarget.value)
    }
    const saveStatus = () => {
        props.updateUserStatusSetting(status)
    }
    const onPhoneChange = (text) => {
        setPhone(text.currentTarget.value)
    }
    const savePhone = () => {
        props.updateUserPhone(phone)
    }
    const onEmailChange = (text) => {
        setEmail(text.currentTarget.value)
    }
    const saveEmail = () => {
        props.updateUserEmailSetting(email)
    }
    const onPhotoChange = (file) => {
        debugger
        if(file.target.files.length){
            setPhoto(file.target.files[0])
        }
        
    }
    const savePhoto = () => {
        props.updateUserPhotoSetting(photo)
    }

    if (!phone) {
        setPhone('+')
    }

    return <div className={css.container}>
        <div className={css.item}>
            <p>Nickname</p>
            <input className={css.settingInput} onChange={onNicknameChange} value={nickname} type="text" />
            <button onClick={saveNickname}>Save</button>
        </div>
        <div className={css.item}>
            <p>Status</p>
            <textarea className={css.settingTextarea} onChange={onStatusChange} value={status} type="text" />
            <button onClick={saveStatus}>Save</button>
        </div>
        <div className={css.item}>
            <p>Phonenumber</p>
            <input className={css.settingInput} onChange={onPhoneChange} value={phone} type="tel" />
            <button onClick={savePhone}>Save</button>
        </div>
        <div className={css.item}>
            <p>Email</p>
            <input className={css.settingInput} onChange={onEmailChange} value={email} type="email" />
            <button onClick={saveEmail}>Save</button>
        </div>
        <div className={css.item}>
            <p>Photo</p>
            
                <div className={css.containerPhoto}>
                    <label className={!photo?css.label:css.successLabel}>
                        <i >{!photo?<img src={Attachment} alt="" />:photo.name}</i>
                        <span className={css.title}>{!photo?<p>Upload a photo</p>:""}</span>
                        <input type="file" className={css.settingFile} onChange={onPhotoChange} />
                    </label>
                </div>
                <button onClick={savePhoto}>Save</button>
            
        </div>
    </div>
}

export default ProfileEditor