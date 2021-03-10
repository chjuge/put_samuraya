import React from 'react';
import Profile from "./Profile.jsx";
import { connect } from 'react-redux';
import { setToggleIsFethcing, getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = this.props.authotizedUserId;

        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authotizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps,
        { getUserProfile, setToggleIsFethcing, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect)
    (ProfileContainer);