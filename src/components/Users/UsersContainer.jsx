import { connect } from "react-redux"
import { setCurrentPage, ToggleFollowingProgress, getUsers, unfollowOnClick, followOnClick } from "../../redux/usersPage"
import Users from "./Users"
import React from 'react';
import preloader from "../../assets/images/loading.svg";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getFollowOnClick, getIsFetching, getPageSize, getTotalUsersCount, getUnfollowOnClick, getUsersSelector } from '../../redux/usersSelectors'


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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        followOnClick: getFollowOnClick(state),
        unfollowOnClick: getUnfollowOnClick(state),
    }
}


export default compose(
    connect(mapToState,
        {
            setCurrentPage,
            ToggleFollowingProgress,
            getUsers,
            unfollowOnClick,
            followOnClick
        }),
    withAuthRedirect)(UserAPIcontainer)