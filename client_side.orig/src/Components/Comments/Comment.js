import React from 'react';
import css from './Comment.module.css';
import { Link } from 'react-router-dom';

function Comment(props) {
  return (
    <div className={css.comment}>
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
          </Link>{' '}
          wrote at{' '}
          <span className={css.join_date}>
            {' '}
            {new Date(props.date).toLocaleString()}
          </span>{' '}
          :<div className={css.comment_content}>{`\t${props.content}`}</div>
        </div>
        <button
          className={css.delete}
          onClick={() => props.deleteSideUserComment(props.commentId)}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        {/* {days === 0 ? 'Joined today' : `Joined ${days} days ago`} */}
      </div>
    </div>
  );
}

export default Comment;
