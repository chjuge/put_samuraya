import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                state={props.store.getState().profileReducer}
                dispatch={props.store.dispatch} />
        </div>
    );
}

export default Profile;