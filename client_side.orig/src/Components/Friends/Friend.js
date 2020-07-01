import React from 'react';
import css from './SearchResult.module.css';

function Friend(props) {
  let days = Math.floor(
    Math.abs(new Date(new Date().toISOString()) - new Date(props.date)) /
      (1000 * 60 * 60 * 24)
  );
  return (
    <div>
      <div className={css.required_user}>
        <img
          src={props.image}
          alt='Provided by user'
          className={css.user_image}
        ></img>
        <div className={css.data_container}>
          <div className={css.nickname}>{props.nickname}</div>
          <div className={css.join_date}>
            {days === 0
              ? 'Joined today'
              : `Joined ${days} days ago`}
          </div>
          <div className={css.friends_message}>
            You are friends <i className='fas fa-check-circle'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
