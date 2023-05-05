// @ts-ignore
import { usersAPI } from "../../api/api";
import { updateObjectInArray } from '../../utilits/ObjectHelper/ObjectIdFinder';

const FOLLOW = 'usersReduser/FOLLOW';
const UNFOLLOW = 'usersReduser/UNFOLLOW';
const SET_USERS = 'usersReduser/SET_USERS';
const CURRENT_PAGE = 'usersReduser/CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReduser/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReduser/TOGGLE_IS_FETCHING';
const FOLLOW_PROGRESS = 'usersReduser/FOLLOW_PROGRESS';


let initialState= {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    disabledArr: [],
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, { followed: true })

            };

        case UNFOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, { followed: false })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        case CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.selectedPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount,
            }
        case FOLLOW_PROGRESS:
            return {
                ...state,
                disabledArr: action.isFetching ? [...state.disabledArr, action.userId]
                    : state.disabledArr.filter(id => id !== action.userId),
            }

        default:
            return state;
    }
}

//Helper Function/////////////////////////////////////////////////////////////////////////////////////

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(followProcess(true, id))
    let promise = await apiMethod(id)
    if (promise.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(followProcess(false, id))
}

// ActionCreators//////////////////////////////////////////////////////////////////////

export const followSuccess = (userID) => ({ type: FOLLOW, userID })


export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID, })


export const setUsers = (users) => ({ type: SET_USERS, users })


export const setCurrentPage = (selectedPage) => ({ type: CURRENT_PAGE, selectedPage })


export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount })


export const toggleIsFetching = (fetching) => ({ type: TOGGLE_IS_FETCHING, fetching })


export const followProcess = (isFetching, userId) => ({ type: FOLLOW_PROGRESS, isFetching, userId })




// ThunkCreators///////////////////////////////////////////////////////////////////////

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let promise = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(promise.items))
    dispatch(setTotalUsersCount(promise.totalCount))
    dispatch(toggleIsFetching(false))


}

export const follow = (id) => async (dispatch) => {

    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess)

}
export const unfollow = (id) => async (dispatch) => {
    
    followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

///////////////////////////////////////////////////////////////////////////////////////
export default usersReduser;
