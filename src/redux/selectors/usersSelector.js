// import { createSelector } from "reselect"

//  const getUsersSelector = (state) => {
//     return state.usersPage.users
// }

// export const getUsers = createSelector(getUsersSelector, (users) => {
//     return users.filter(u => true)
// })





export const getUsers = (state) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getDisabledArr = (state) => {
    return state.usersPage.disabledArr
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}

