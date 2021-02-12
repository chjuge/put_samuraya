import React from 'react';
import s from "./Users.module.css";

let Users = (props) => {
    return (
        <div>
            { props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.item}>
                        <img src={u.img}></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
            }
        </div >)
}

export default Users;