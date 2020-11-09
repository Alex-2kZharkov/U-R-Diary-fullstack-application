import React from 'react';
import css from './Friend.module.css';
import { Link } from 'react-router-dom';

function Friend(props) {
  let days = Math.floor(
    Math.abs(new Date(new Date().toISOString()) - new Date(props.date)) /
      (1000 * 60 * 60 * 24)
  );

  console.log('NOTIF ID', props.notif_id);
  return (
    <div>
      <div className={css.required_user}>
        <img
          src={props.image}
          alt='Provided by user'
          className={css.user_image}
        ></img>
        <div className={css.data_container}>
          <div className={css.nickname}>
            <Link
              className={css.nickname_link}
              to={`/personalRoom/${props.ownerId}/friends/friend-room/${props.id}`}
            >
              {props.nickname}
            </Link>
          </div>
          <div className={css.join_date}>
            {days === 0 ? 'Joined today' : `Joined ${days} days ago`}
          </div>
          <div className={css.friends_message}>
            You are friends <i className='fas fa-check-circle'></i>
          </div>
        </div>
        <button
          className={css.delete}
          onClick={() => props.deleteFriend(props.notif_id)}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    </div>
  );
}

export default Friend;
