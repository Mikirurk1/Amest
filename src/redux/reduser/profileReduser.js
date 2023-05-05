// @ts-ignore
import { profileAPI } from "../../api/api";
import { updateObjectInArray } from '../../utilits/ObjectHelper/ObjectIdFinder';

const ADD_POST = 'profileReduser/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profileReduser/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profileReduser/SET_USER_PROFILE';
const SET_STATUS = 'profileReduser/SET_STATUS'
const SET_USER_PHONENUMBER = 'profileReduser/SET_USER_PHONENUMBER'
const UPDATE_LIKE = 'profileReduser/UPDATE_LIKE'
const SET_USER_NAME = 'profileReduser/SET_USER_NAME'
const SET_USER_PHOTO = 'profileReduser//SET_USER_PHOTO'


let initialState = {
    postData: [
        { id: 1, name: 'Mikola', text: 'Good Game Mikirurk-', likes: 10, avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/kartinki-dlya-vajbera-na-avu-1.jpg' },
        { id: 2, name: 'Nikita', text: 'Good Game Mikirurk10', likes: 125, avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/b_5b30ea9329fe1.jpg' },
        { id: 3, name: 'Karina', text: 'Good Game Mikirurk(', likes: 421, avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/1554879524_2.jpg' },
        { id: 4, name: 'Kiril', text: 'Good Game Mikirurk)', likes: 375, avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/bezymyannyje-6.jpg' },
    ],
    profile: null,
    status: null,
    phoneNumber: null,


}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 5,
                name: 'Bogdan',
                text: action.newPost,
                likes: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU'
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PHONENUMBER:
            return {
                ...state,
                phoneNumber: action.phoneNumber
            }
        case UPDATE_LIKE:
            debugger
            return {
                ...state,
                postData: updateObjectInArray(state.postData, action.id, { })
            }

        case SET_USER_NAME:
            return {
                ...state,
                profile: { ...state.profile, fullName: action.fullName },

            }
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },

            }

        default:
            return state;;
    }

}

// ActionCreators//////////////////////////////////////////////////////////////////////


export const addPost = (newPost) => ({ type: ADD_POST, newPost });


export const onPostChange = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setUserPhoneNumber = (phoneNumber) => ({ type: SET_USER_PHONENUMBER, phoneNumber })

export const updateLike = (id) => ({ type: UPDATE_LIKE, id })

export const setUserName = (fullName) => ({ type: SET_USER_NAME, fullName })

export const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

// ThunkCreators///////////////////////////////////////////////////////////////////////
export const getUser = (params, auth) => async (dispatch) => {
    let { userId } = params;
    if (!userId) {
        userId = auth
    }
    let promise = await profileAPI.getUser(userId);
    dispatch(setUserProfile(promise))
}

export const getStatus = (params, auth) => async (dispatch) => {
    let { userId } = params;
    if (!userId) {
        userId = auth
    }

    let promise = await profileAPI.getStatus(userId)
    dispatch(setStatus(promise))
}

export const updateStatus = (status) => async (dispatch) => {
    let promise = profileAPI.updateStatus(status)
    if (promise.resultCode === 0) {
        dispatch(setStatus(status));
    }
}



///////////////////////////////////////////////////////////////////////////////////////



export default profileReduser;