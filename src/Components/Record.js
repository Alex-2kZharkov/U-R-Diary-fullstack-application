import React from 'react';
import css from './Record.module.css';
import { Link } from 'react-router-dom';
function Record(props) {
  return (
    <div className={css.record}>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.record_image}
      ></img>
      <div className={css.data_container}>
        <div className={css.title}>
          {props.title}
          <span className={css.date}> - {props.date}</span>
        </div>
        <div className={css.content}>{props.content}</div>
        <Link to='/personalRoom/record1' className={css.edit}>
          {' '}
          <i class='fas fa-edit'></i>
        </Link>
      </div>
    </div>
  );
}

export default Record;
