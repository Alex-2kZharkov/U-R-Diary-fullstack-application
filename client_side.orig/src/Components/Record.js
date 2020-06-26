import React from 'react';
import css from './Record.module.css';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';

function Record(props) {
  const downloadRecord = () => {
    axios({
      url: `http://localhost:4000${props.url}/download/${props.id}`, // at first server will create pdf file, so it need data
      method: 'POST',
      data: props,
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        window.open(`http://localhost:4000/record${props.id}.pdf`); // open link to download file
      }
    });
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
          <span className={css.date}> {props.date}</span>
        </div>
        <div className={css.content}>{parse(props.content)}</div>
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
