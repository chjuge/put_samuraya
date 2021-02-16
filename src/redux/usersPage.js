let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return { ...state, users: action.users };

        case 'SET-CURRENT-PAGE': {
            return { ...state, currentPage: action.currentPage };
        }
        case 'SET-TOTAL-USERS-COUNT':
            return { ...state, totalUsersCount: (action.totalUsersCount===100? action.totalUsersCount : 100)}
        case 'TOGGLE-IS-FETCHING':
            {
                return {
                    ...state, isFetching: action.isFetching
                }
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAC = (users) => ({ type: 'SET-USERS', users })
export const setCurrentPageAC = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount})
export const setToggleIsFethcingAC = (isFetching) => ({type: 'TOGGLE-IS-FETCHING', isFetching})
export default usersPage;