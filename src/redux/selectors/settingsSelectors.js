export const getUserNickname=(state)=>{
    return state.profilePage.profile.fullName
}
export const getProfile=(state)=>{
    return state.profilePage.profile
}
export const getUserStatus=(state)=>{
    return state.profilePage.status
}
export const getUserPhone=(state)=>{
    return state.profilePage.phoneNumber
}
export const getUserEmail=(state)=>{
    return state.auth.data.email
}
export const getUserPhotos=(state)=>{
    return state.profilePage.profile.photos
}
export const getInterfaceMode=(state)=>{
    return state.settings.interfase.darkmode    
}