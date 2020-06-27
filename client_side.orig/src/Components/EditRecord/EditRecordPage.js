import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import './EditRecord.css';
import axios from 'axios';

export class EditRecordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      content: '',
      image: '',
      roomId: '',
    };
  }
  handleImageAddressChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };
  updateRecord = async () => {
    // request to update current opened post
    return axios
      .put(`http://localhost:4000${this.props.location.pathname}`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    // get user data and single record
    axios
      .get(`http://localhost:4000${this.props.location.pathname}`) // path
      .then((response) => {
        console.log(response);
        this.setState({
          nickname: response.data[0].nickname,
          roomId: response.data[0].id,
          content: response.data[0].content,
          image: response.data[0].image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='intro'>
        <PersonalRoomHeader user={this.state.nickname} id={this.state.roomId} />

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
        <div className='update_container'>
          <button onClick={async() => await this.updateRecord()}>
            {' '}
            {/*  callback function */}
            <Link to={`/personalRoom/${this.state.roomId}`} className='update'>
              Update
              <i className={`fas fa-edit update_icon`}></i>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default EditRecordPage;
