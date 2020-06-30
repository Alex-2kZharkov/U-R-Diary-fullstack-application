import React from 'react';
import css from './Notifications.module.css';

function Notification(props) {
  return (
    <div className={css.required_user}>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.user_image}
      ></img>
      <div className={css.data_container}>
        <div className={css.nickname}>{props.nickname}</div>
        <div className={css.date_sended}>
          {props.days === 0 ? 'Sened: today' : `Sended ${props.days} days ago`}
        </div>
        {/*  {message} */}
        <button
          type='button'
          className={css.friendship_request}
          style={props.hideRequest}
        
        >
          <i class="fas fa-check"></i> Accept friendship invitation
        </button>
        <button
          type='button'
          className={css.friendship_request}
          style={props.hideRequest}
        
        >
          <i class="fas fa-times"></i> Reject friendship invitation
        </button>
      </div>
    </div>
  );
}

export default Notification;
