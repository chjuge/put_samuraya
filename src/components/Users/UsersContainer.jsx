import { connect } from "react-redux"
import {  setCurrentPage, ToggleFollowingProgress, getUsers, unfollowOnClick, followOnClick } from "../../redux/usersPage"
import Users from "./Users"
import React from 'react';
import preloader from "../../assets/images/loading.svg";


class UserAPIcontainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props)
    }


    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} width='80px' /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                followOnClick={this.props.followOnClick}
                unfollowOnClick={this.props.unfollowOnClick}


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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        followOnClick: state.usersPage.followOnClick,
        unfollowOnClick: state.usersPage.unfollowOnClick



    }
}



export default connect(mapToState,
    {
        setCurrentPage,
        ToggleFollowingProgress,
        getUsers,
        unfollowOnClick,
        followOnClick
    })(UserAPIcontainer);