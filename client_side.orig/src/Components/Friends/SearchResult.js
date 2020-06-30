import React from 'react';
import css from './SearchResult.module.css';
import axios from 'axios';

function SearchResult(props) {
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
          {props.days === 0 ? 'Joined today' : `Joined ${props.days} ago`}
        </div>
        <button type='button' className={css.friendship_request}>
          Send friendship invitation
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
