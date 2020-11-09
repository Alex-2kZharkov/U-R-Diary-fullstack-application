import React from 'react';
import css from './FriendRecord.module.css';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';

function FriendRecord(props) {
  return (
    <div className={css.record}>
      <img
        src={props.image}
        alt='Provided by user'
        className={css.record_image}
      ></img>
      <div className={css.data_container}>
        <div className={css.title}>
          <span className={css.date}> {props.date}</span>
        </div>
        <div className={css.content}>{parse(props.content)}</div>
      </div>
    </div>
  );
}

export default FriendRecord;
