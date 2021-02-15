import React from 'react';
import s from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/images/userIcon.jpg';

class Users extends React.Component {

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             })
    //     }
    // }


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div className={s.item}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                        </span>
                    </div>)
                }
            </div >)
    };
}

export default Users;