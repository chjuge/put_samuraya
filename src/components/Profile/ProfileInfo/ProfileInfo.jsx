import React from 'react';
import s from './ProfileInfo.module.css';
import preloader from "../../../assets/images/loading.svg";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <>
            {props.isFetching ? <img src={preloader} /> : null}

        </>
    }
    return (
        <div>
            {/* <div>
                <img src='https://cdn24.img.ria.ru/images/151794/84/1517948413_0:105:2000:1230_600x0_80_0_0_e12706701a13b6260e2fa5f2e4626c94.jpg'></img>
            </div> */}
            <ProfileStatus status='Hi niggas!'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    );
}

export default ProfileInfo;