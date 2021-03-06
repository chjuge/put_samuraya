import { usersAPI } from "../api/Api";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return { ...state, totalUsersCount: (action.totalUsersCount === 100 ? action.totalUsersCount : 100) }

        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: 'FOLLOW', userId });
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET-USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount })
export const setToggleIsFethcing = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching })
export const ToggleFollowingProgress = (isFetching, userId) => ({ type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId })
export default usersPage;

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(setToggleIsFethcing(true));
        dispatch(setCurrentPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFethcing(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalUsersCount));
        })
    }
}

export const followOnClick = (userId) => {

    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(ToggleFollowingProgress(false, userId))
            })
    }
}

export const unfollowOnClick = (userId) => {

    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(ToggleFollowingProgress(false, userId))
            })
    }
}