import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import './NewRecord.css';
import axios from 'axios';
export class NewRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      image:
        'https://www.themorgan.org/sites/default/files/images/exhibitions/hawthorne-sophia.jpg', // default image
    };
  }
  handleImageAddressChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };
  saveRecord = () => {
    console.log(this.state.content);
    axios
      .post(
        `http://localhost:4000/personalRoom/${this.props.id}/new-record`,
        this.state
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className='intro'>
        <div className='editor'>
          <CKEditor
            editor={ClassicEditor}
            data={this.state.content}
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({
                content: data,
              });
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <div className='image_address'>
            <input
              value={this.state.image}
              onChange={this.handleImageAddressChange}
              placeholder='Please, type image address here'
            />
          </div>
        </div>
        <div className='save_container'>
          {' '}
          {/*  callback function */}
          <Link
            onClick={this.saveRecord}
            to={`/personalRoom/${this.props.id}`}
            className='save'
          >
            Save record
            <i className={`fas fa-save save_icon`}></i>
          </Link>
        </div>
        <div className='blink'>
          Change image address at field above to update image of note
        </div>
      </div>
    );
  }
}

export default NewRecord;
