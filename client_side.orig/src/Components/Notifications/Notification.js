import React, { useState } from 'react';
import css from './Notifications.module.css';

function Notification(props) {
  const [isAccepted, accept] = useState(false);
  const [isRejected, reject] = useState(false);

  let notifcication_part;

  return (
    <div>
      <div className={css.required_notification}>
        <img
          src={props.image}
          alt='Provided by user'
          className={css.notification_image}
        ></img>
        <div className={css.data_container}>
          <div className={css.nickname}>{props.nickname}</div>
          <div className={css.date_sended}>
            {props.date === 0
              ? 'Sened: today'
              : `Sended ${props.date} days ago`}
          </div>
          {/*  {message} */}
          <button
            type='button'
            className={css.friendship_request}
            style={props.hideRequest}
          >
            <i className='fas fa-check'></i> Accept friendship invitation
          </button>
          <button
            type='button'
            className={`${css.friendship_request} ${css.reject_notification}`}
            style={props.hideRequest}
          >
            <i className='fas fa-times'></i> Reject friendship invitation
          </button>
          <div className={css.acceptance_message}>
            Invitation has been accepted <i className='fas fa-check-circle'></i>
          </div>
          <div className={css.rejection_message}>
            Invitation has been rejected <i className='fas fa-times-circle'></i>
          </div>
        </div>
      </div>
      <div className={css.border}></div>
    </div>
  );
}

export default Notification;
