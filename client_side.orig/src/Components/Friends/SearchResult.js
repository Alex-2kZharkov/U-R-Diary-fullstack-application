import React, { useState } from 'react';
import css from './SearchResult.module.css';
import axios from 'axios';

function SearchResult(props) {
  const [isSended, reactOnSending] = useState(false);
  console.log(isSended);
  let message;
  if (props.isHavingReq) {
    message = (
      <div className={css.reaction_message}>
        Request has sended <i className='fas fa-check-circle'></i>
      </div>
    );
  } else if (isSended) {
    message = (
      <div className={css.reaction_message}>
        Request has sended <i className='fas fa-check-circle'></i>
      </div>
    );
  } else {
    message = (
      <button
        type='button'
        className={css.friendship_request}
        style={props.hideRequest}
        onClick={() => {
          props.sendFriendshipRequest(props.id);
          reactOnSending(true);
        }}
      >
        Send friendship invitation
      </button>
    );
  }
  return (
    <div className={css.required_user}>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.user_image}
      ></img>
      <div className={css.data_container}>
        <div className={css.nickname}>{props.nickname}</div>
        <div className={css.join_date}>
          {props.days === 0 ? 'Joined today' : `Joined ${props.days} days ago`}
        </div>
        {message}
      </div>
    </div>
  );
}

export default SearchResult;
