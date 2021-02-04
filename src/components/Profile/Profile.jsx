import MyPosts from "./MyPosts/MyPosts.jsx";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn24.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts></MyPosts>
        </div>
    )
}

export default Profile;