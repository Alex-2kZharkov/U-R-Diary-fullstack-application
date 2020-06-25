import React from 'react';
import css from './Record.module.css';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
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
          <span className={css.date}> {props.date}</span>
        </div>
        <div className={css.content}>{parse(props.content)}</div>
        <Link to='/personalRoom/record1' className={css.edit}>
          {' '}
          <i className='fas fa-edit'></i>
        </Link>
        <button className={`${css.edit} ${css.download_modif}`}>
          <i className='fas fa-file-download'></i>
        </button>
      </div>
    </div>
  );
}

export default Record;
