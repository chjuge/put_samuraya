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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
         this.props.setCurrentPage(pageNumber);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
             this.props.setUsers(response.data.items);
         });
        }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p =>
                        <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={(e) => { this.onPageChanged(p) }}>[{p}]</span>
                    )}
                </div>
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
                                    <div>{u.status === null ? 'Status doesnt exist' : u.status}</div>
                                </span>
                                {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                            </span>
                        </div>)
                    }
                </div >
            </div>)
    };
}

export default Users;