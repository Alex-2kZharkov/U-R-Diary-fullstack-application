import React from 'react'
import css from './Profile.module.css';
function Profile(props) {
    return (
        <div className={css.container}>
            <div className={css.nickname}>
                {props.nickname}
            </div>
            <img  className={css.image} src={props.image} alt={'User\'s avatar'}></img>
        </div>
    )
}

export default Profile
