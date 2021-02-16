import React from 'react';
import Profile from "./Profile.jsx";
import axios from 'axios';
import { connect } from 'react-redux';
import { setToggleIsFethcing, setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFethcing(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
                this.props.setToggleIsFethcing(false);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
     profile: state.profileReducer.profile
});

export default connect(mapStateToProps, 
    {setUserProfile, setToggleIsFethcing})(ProfileContainer);