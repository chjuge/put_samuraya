let initialState = {
    users: [
        // { id: 1, img: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg', 
        // followed: false, fullName: 'Dmitry', status: 'I am a boss', 
        // location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, img: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg', 
        // followed: true, fullName: 'Sasha', status: 'I am a boss too', 
        // location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, img: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg', 
        // followed: false, fullName: 'Ivan', status: 'I am employee', 
        // location: { city: 'Kiev', country: 'Ukraine' } },
    ]
};

const usersPage = (state = initialState, action) => {
    switch (action.type) {
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'SET-USERS':
            return { ...state, users: [ ...state.users, ...action.users ] };

        default:
            return {
                ...state
            }
    }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAC = (users) => ({ type: 'SET-USERS', users: users })

export default usersPage;