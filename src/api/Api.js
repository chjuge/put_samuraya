import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6b9fca47-5b55-463c-bf37-d7bc39590ce2"
    }
})




export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow (userId)  {
        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    authMe: () => {
        return instance.get(`auth/me`)
    }
}

