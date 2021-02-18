import { connect } from "react-redux"
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFethcing, ToggleFollowingProgress } from "../../redux/usersPage"
import Users from "./Users"
import React from 'react';
import preloader from "../../assets/images/loading.svg";
import { usersAPI } from "../../api/Api";


class UserAPIcontainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFethcing(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setToggleIsFethcing(false);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFethcing(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setToggleIsFethcing(false);

        });
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} width='80px'/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                ToggleFollowingProgress={this.props.ToggleFollowingProgress}
                setUsers={this.props.setUsers}
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
    }
}



export default connect(mapToState,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFethcing,
        ToggleFollowingProgress
    })(UserAPIcontainer);