import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersPage"
import Users from "./UsersCopy"

const mapToState = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapToState, mapToDispatch)(Users);