import s from "../Users.module.css";
import React from "react";
import {IUser, IUsersPageState} from "../../../redux/interfaces/usersPageState.interface";

interface MyUserProps {
    user: IUser,
    followUser: Function,
    unfollowUser: Function,
    setUsers: Function
}

export const User = ({user, followUser, unfollowUser, setUsers}: MyUserProps) => {
    return (
        <div className={s.user_block}>
            <div className={s.avatar_block}>
                <div>
                    <img className={s.avatar_block_img} src={user.avatar_url} alt="avatar_url"/>
                </div>
                {user.followed
                    ? <button className={s.avatar_block_button} onClick={() => unfollowUser(user.id)}>Unfollow</button>
                    : <button className={s.avatar_block_button} onClick={() => followUser(user.id)}>Follow</button>
                }
            </div>
            <div className={s.details_block}>
                <div className={s.details_block_left}>
                    <div className={s.details_block_fullName}>
                        {user.fullName ? user.fullName : user.name}
                    </div>
                    <div className={s.details_block_status}>
                        {user.status}
                    </div>
                </div>
                <div className={s.details_block_right}>
                    <div className={s.details_block_country}>
                        {user.location ? user.location.country + ',' : "Country is unknown"}
                    </div>
                    <div className={s.details_block_cityName}>
                        {user.location ? user.location.cityName + ',' : "City is unknown"}
                    </div>
                </div>
            </div>
        </div>
    )
}