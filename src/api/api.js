import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    header: {
        "API-KEY": "e3836ca7-e9b9-41c6-ba97-ce74635682e2"
    }
})

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    async follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    async unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
}
export const profileAPI = {
    async getUser(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    async getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    async updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    },


}

export const authAPI = {
    async getAuth() {

        return instance.get('auth/me').then(response => response.data)
    },
    async login(email, password, rememberMe) {
        return instance.post('auth/login', { email, password, rememberMe }).then(response => response.data)
    },
    async logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const settingsAPI ={
    async updateAvatar(file){
        const formData = new FormData(); 
        formData.append("image",file)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(response => response.data)
    },
   
}

