import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/userIcon.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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


                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollowOnClick(u.id)
                                }}>Unfollow</button>


                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.followOnClick(u.id)
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