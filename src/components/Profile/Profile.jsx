import MyPosts from "./MyPosts/MyPosts.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewText={props.updateNewText} />
        </div>
    );
}

export default Profile;