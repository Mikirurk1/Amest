// @ts-ignore
import { settingsAPI } from "../../api/api";
import { setEmail } from "./authReduser";
import { updateStatus, setUserPhoneNumber, setUserName, setUserPhoto } from './profileReduser';

const SET_USER_INFO_SETTINGS = "settingUserReduser/SET_USER_INFO_SETTINGS"
const UPDATE_USER_PHOTO_SETTING = "settingUserReduser/UPDATE_USER_PHOTO_SETTING"
const UPDATE_USER_NICKNAME_SETTING = "settingUserReduser/UPDATE_USER_NICKNAME_SETTING"
const UPDATE_USER_STATUS_SETTING = "settingUserReduser/UPDATE_USER_STATUS_SETTING"
const UPDATE_USER_EMAIL_SETTING = "settingUserReduser/UPDATE_USER_EMAIL_SETTING"
const UPDATE_USER_PHONE_SETTING = "settingUserReduser/UPDATE_USER_PHONE_SETTING"




let initialState = {
    data: {
        nickname: null,
        status: null,
        email: null,
        phone: null,
        photos: {
            small: '../../../assets/images/stockAvatar.png',
            large: 'https://mil.in.ua/wp-content/uploads/2022/02/slava-ZSU1-1.png'
        }
    },
    interface: {
        amestmode: false,
    },
    isSuccess: null

}

const settingsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_PHOTO_SETTING:
            return {
                ...state,
                data: { photos: action.photos }
            }
        case UPDATE_USER_NICKNAME_SETTING:
            return {
                ...state,
                data: action.nickname
            }
        case UPDATE_USER_STATUS_SETTING:
            return {
                ...state,
                data: action.status
            }
        case UPDATE_USER_EMAIL_SETTING:
            return {
                ...state,
                data: action.email
            }
        case UPDATE_USER_PHONE_SETTING:
            return {
                ...state,
                data: action.phone
            }
        default:
            return state;
    }
}

//Action Creators///////////////////////////////////////////////////////////////////////////////////

export const setUserInfoSettings = (nickname, status, email, phone, photos) => ({ type: SET_USER_INFO_SETTINGS, data: { nickname, status, email, phone, photos } })

export const updateUserPhoto = (photos) => ({ type: UPDATE_USER_PHOTO_SETTING, photos })

export const updateUserNickname = (nickname) => ({ type: UPDATE_USER_NICKNAME_SETTING, nickname })

export const updateUserStatus = (status) => ({ type: UPDATE_USER_STATUS_SETTING, status })

export const updateUserEmail = (email) => ({ type: UPDATE_USER_EMAIL_SETTING, email })

export const updateUserPhone = (phone) => ({ type: UPDATE_USER_PHONE_SETTING, phone })
//Thunk Creatots/////////////////////////////////////////////////////////////////////////////////////////////////////

export const updateUserPhotoSetting = (photo) => async (dispatch) => {
    if (initialState.data.photos.small !== photo) {
        let response = await settingsAPI.updateAvatar(photo)
        if (response.resultCode === 0) {
            dispatch(setUserPhoto(response.data))
        }
    }
}

export const updateUserStatusSetting = (status) => async (dispatch) => {

    let promise = dispatch(updateStatus(status))
    Promise.all([promise]).then(() => {
        dispatch(updateUserStatus(status))
    })

}

export const updateUserPhoneNumberSetting = (number) => (dispatch) => {

    let promise = dispatch(setUserPhoneNumber(number))
    Promise.all([promise]).then(() => {
        dispatch(updateUserPhone(number))

    })
}
export const updateUserNicknameSetting = (nickname) => (dispatch) => {
    let promise = dispatch(setUserName(nickname))
    Promise.all([promise]).then(() => {
        dispatch(updateUserNickname(nickname))
    })
}

export const updateUserEmailSetting = (email) => (dispatch) => {

    let promise = dispatch(setEmail(email))
    Promise.all([promise]).then(() => {
        dispatch(updateUserEmail(email))
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
export default settingsReduser;