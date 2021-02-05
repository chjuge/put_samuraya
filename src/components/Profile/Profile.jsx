import MyPosts from "./MyPosts/MyPosts.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={props.state.posts}></MyPosts>
        </div>
    );
}

export default Profile;