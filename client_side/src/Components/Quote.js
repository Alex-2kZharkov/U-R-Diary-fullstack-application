import React from 'react';
import css from './Quote.module.css';
export default function Quote(props) {
  return (
    <div className={css.reviews__item}>
      <img
        className={css.reviews__photo}
        src={props.img}
        alt=''
        width='145'
        height='145'
      ></img>

      <div className={css.wrapper}>
        <div className={`${css.reviews__text} text`}>{props.quote}</div>
        <div className={css.reviews__author}>{props.author}</div>
      </div>
    </div>
  );
}
