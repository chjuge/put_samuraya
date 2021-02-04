import MyPosts from "./MyPosts/MyPosts.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts></MyPosts>
        </div>
    );
}

export default Profile;