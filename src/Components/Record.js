import React from 'react';
import css from './Record.module.css';

function Record(props) {
  return (
    <div className={css.record}>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.record_image}
      ></img>
      <div>
        <div className={css.title}>
          {props.title}
          <span className={css.date}> - {props.date}</span>
        </div>
        <div className={css.content}>{props.content}</div>
      </div>
    </div>
  );
}

export default Record;
