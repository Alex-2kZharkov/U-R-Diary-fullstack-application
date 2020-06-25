import React from 'react';
import css from './Record.module.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

function Record(props) {
  const downloadRecord = () => {
    axios
      .post(`http://localhost:4000${props.url}/download/${props.id}`, props)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };
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
          <span className={css.date}> {props.date}</span>
        </div>
        <div className={css.content}>{props.content}</div>
        <Link to={`${props.url}/edit-record/${props.id}`} className={css.edit}>
          {' '}
          <i className='fas fa-edit'></i>
        </Link>
        <button
          className={`${css.edit} ${css.download_modif}`}
          onClick={downloadRecord}
        >
          <i className='fas fa-file-download'></i>
        </button>
      </div>
    </div>
  );
}

export default Record;
