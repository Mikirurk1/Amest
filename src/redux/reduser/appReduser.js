import { authorization } from './authReduser';

const INITIALIZATED_SUCCESS = 'appReduser/INITIALIZATED_SUCCESS'


let initialState = {
    isInitialized: false,
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATED_SUCCESS:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state;
    }
}

//actionCreator/////////////////////////////////////////////////////////////////////////////////////

export const initializatedSuccess = () => ({ type: INITIALIZATED_SUCCESS })
//thunkCreator////////////////////////////////////////////////////////////////////////////////////////////

export const initialization = () => (dispatch) => {
    let promise = dispatch(authorization())

    Promise.all([promise]).then(() => {
        dispatch(initializatedSuccess())
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
export default appReduser;