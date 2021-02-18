import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/userIcon.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            withCredentials: true,
            headers: {
                "API-KEY": "6b9fca47-5b55-463c-bf37-d7bc39590ce2"
            }
        })
            .then(response => {
                props.setUsers(response.data.items);
            })
    }
    return (
        <div>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>[{p}]</span>
                )}
            </div>
            { props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.item}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed


                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.ToggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6b9fca47-5b55-463c-bf37-d7bc39590ce2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.ToggleFollowingProgress(false, u.id);
                                    })
                            }}>Unfollow</button>


                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.ToggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6b9fca47-5b55-463c-bf37-d7bc39590ce2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.ToggleFollowingProgress(false, u.id);
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status === null ? 'Status doesnt exist' : u.status}</div>
                    </span>
                    {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                </span>
            </div>)
            }
        </div >)
}

export default Users;