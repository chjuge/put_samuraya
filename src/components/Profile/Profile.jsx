import store from "../../redux/redux-store.js";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                state={props.store.getState().profileReducer}
                getS={props.store.getState}
                dispatch={props.store.dispatch} />
        </div>
    );
}

export default Profile;