import React from 'react';
import css from './MyComment.module.css';
import { Link } from 'react-router-dom';

function MyComment(props) {
  return (
    <div className={css.comment}>
      <div className={css.data_container}>
        <div className={css.nickname}>
          <span className={css.nickname_name}>{props.nickname}</span> wrote at{' '}
          <span className={css.join_date}>
            {' '}
            {props.date.toLocaleString()}
          </span>{' '}
          <div className={css.comment_content}>{`\t${props.content}`}</div>
        </div>

        {/* {days === 0 ? 'Joined today' : `Joined ${days} days ago`} */}
      </div>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.user_image}
      ></img>
    </div>
  );
}

export default MyComment;
