import s from "../Users.module.css";
import React from "react";
import {IUser} from "../../../redux/interfaces/usersPageState.interface";

export const User = (user: IUser) => {
    return (
        <div className={s.user_block}>
            <div className={s.avatar_block}>
                <div>
                    <img className={s.avatar_block_img} src={user.avatar_url} alt="avatar_url"/>
                </div>
                <button className={s.avatar_block_button}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className={s.details_block}>
                <div className={s.details_block_left}>
                    <div className={s.details_block_fullName}>
                        {user.fullName}
                    </div>
                    <div className={s.details_block_status}>
                        {user.status}
                    </div>
                </div>
                <div className={s.details_block_right}>
                    <div className={s.details_block_country}>
                        {user.location.country}
                    </div>
                    <div className={s.details_block_cityName}>
                        {user.location.cityName}
                    </div>
                </div>
            </div>
        </div>
    )
}