import React from 'react';
import Profile from "./Profile.jsx";
import { connect } from 'react-redux';
import { setToggleIsFethcing, getUserProfile } from "../../redux/profileReducer";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
});

let WithUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    { getUserProfile, setToggleIsFethcing })(WithUrlContainerComponent);