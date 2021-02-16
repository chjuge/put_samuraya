import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setToggleIsFethcingAC } from "../../redux/usersPage"
import Users from "./UsersCopy"
import axios from 'axios';
import React from 'react';
import preloader from "../../assets/images/loading.svg";


class UserAPIcontainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFethcing(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setToggleIsFethcing(false);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFethcing(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setToggleIsFethcing(false);

            });
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        </>
    }
}


const mapToState = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        setToggleIsFethcing: (isFetching) => {
            dispatch(setToggleIsFethcingAC(isFetching));
        }
    }
}

export default connect(mapToState, mapToDispatch)(UserAPIcontainer);