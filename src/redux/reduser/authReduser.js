import { stopSubmit } from 'redux-form'
import { authAPI } from '../../api/api'


const SET_LOGIN_AUTH = 'authReduser/SET_LOGIN_AUTH';
const SET_EMAIL = 'authReduser/SET_EMAIL'


let initialState = {
    data: {
        userId: null,
        login: null,
        email: null,
    },
    isAuth: false,
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_AUTH:

            return {
                ...state,
                data: action.payload,
                isAuth: action.isAuth,
            };
        case SET_EMAIL:
            return {
                ...state,
                data: { ...state.data, email: action.email },
            };

        default:
            return state;
    }
}

// ActionCreators//////////////////////////////////////////////////////////////////////

export const setAuth = (userId, login, email, isAuth) => (
    {
        type: SET_LOGIN_AUTH,
        payload: { userId, login, email },
        isAuth
    })


export const setEmail = (email) => ({ type: SET_EMAIL, email })
// ThunkCreators///////////////////////////////////////////////////////////////////////
export const authorization = () => async (dispatch) => {
    let response = await authAPI.getAuth();

    if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuth(id, login, email, true))

    }

}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(authorization())

    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    }
}

///////////////////////////////////////////////////////////////////////////////////////



export default authReduser;