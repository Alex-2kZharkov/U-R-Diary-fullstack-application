import React, { Component } from 'react';
import css from './FriendRoom.module.css';
import { Link } from 'react-router-dom';
import FriendProfile from './FriendProfile';
import axios from 'axios';
import PersonalRoomHeader from '../PersonalRoomHeader';
import FriendRecords from './FriendRecords';

export class FriendRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      email: '',
      aboutSelf: '',
      imageAddres: '',
      newImage: '',
      searchStatus: false,
      substring: '',
      records: [], // records from data base
      isCopied: false,
      comment: '',
      isCommentBoxOpen: false,
      isCommentSended: false,
    };
    this.searchField = React.createRef();
  }
  handleSubstringChange = (e) => {
    this.setState({
      substring: e.target.value,
    });
    this.setState({
      searchStatus: false,
    });
  };

  setSearchStatus = () => {
    this.setState({
      searchStatus: true,
    });
  };

  findRecord = () => {
    return this.state.records.filter((record) => {
      if (record.content.search(this.state.substring) != -1) {
        // if substring found at record , then it goes to result array
        return record;
      }
    });
  };

  cancelSearch = () => {
    this.setState({
      searchStatus: false,
      substring: '',
    });
    this.searchField.current.value = ''; // empty search field
  };
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  openCommentBox = () => {
    if (this.state.isCommentBoxOpen) {
      this.setState({
        isCommentBoxOpen: false,
      });
    } else {
      this.setState({
        isCommentBoxOpen: true,
      });
    }
  };
  closeCommentBox = () => {
    this.setState({
      isCommentBoxOpen: false,
      isCommentSended: false,
    });
  };
  addComment = () => {
    if (this.state.comment != '') {
      axios
        .post(
          `http://localhost:4000/personalRoom/${this.props.match.params.id}/friends/friend-room/${this.props.match.params.friend_id}`,
          { comment: this.state.comment }
        )
        .then((response) => {
          console.log(response);
          this.setState({
            isCommentBoxOpen: false,
            isCommentSended: true,
            comment: '',
          });
          setTimeout(this.closeCommentBox, 1500);
        });
    }
  };
  componentDidMount() {
    this.props.setUserNickname('friends', this.props.match.params.id);
    console.log('COMPONENT DID');
    const id = this.props.match.params.id; // parameters of current url

    axios
      .get(
        `http://localhost:4000/personalRoom/${this.props.match.params.friend_id}`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 202) {
          this.setState(
            {
              nickname: response.data[response.data.length - 1].nickname,
              email: response.data[response.data.length - 1].email,
              aboutSelf: response.data[response.data.length - 1].about_self,
              imageAddres: response.data[response.data.length - 1].user_image,
              records: response.data
                .map((item) => {
                  let record = {
                    id: item.id,
                    content: item.content,
                    image: item.image,
                    date: new Date(item.date).toLocaleString(),
                    url: this.props.match.url,
                  };
                  return record;
                })
                .reverse(),
            },
            () => console.log(this.state.records[0].content)
          );
        } else {
          this.setState(
            {
              nickname: response.data[response.data.length - 1].nickname,
              email: response.data[response.data.length - 1].email,
              aboutSelf: response.data[response.data.length - 1].about_self,
              imageAddres: response.data[response.data.length - 1].image,
            },
            () => console.log(this.state.records)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let records, commentBox, msgAfterComSending;
    if (this.state.searchStatus) {
      let searchResults = this.findRecord();

      if (searchResults.length > 0) {
        console.log(searchResults);
        records = <FriendRecords records={searchResults} />;
      } else {
        records = (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '2%',
              padding: '0 20%',
              fontSize: '80px',
              fontFamily: 'Cambria, Times New Roman',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            We were searching everywhere, but we couln't find anything...
            <div>Please, try again</div>
          </div>
        );
      }
    } else {
      records = (
        <FriendRecords
          searchStatus={this.state.searchStatus}
          searchResultStatus={this.searchResultStatus}
          records={this.state.records}
          deleteRecord={this.deleteRecord}
        />
      );
    }
    // deciding if comment box have to be rendered
    if (this.state.isCommentBoxOpen) {
      commentBox = (
        <div className={css.comment_box}>
          <div className={css.comment_field_box}>
            <textarea
              rows={10}
              className={css.comment_field}
              value={this.state.comment}
              onChange={this.handleCommentChange}
              placeholder='Write you comment about diary here'
            ></textarea>
          </div>
          <div
            className={`${css.send_comment} ${css.comment_button}`}
            onClick={this.addComment}
          >
            <i className='far fa-paper-plane'></i>
          </div>
          <div
            className={`${css.close_comment_box} ${css.comment_button}`}
            onClick={this.closeCommentBox}
          >
            <i className='fas fa-times'></i>
          </div>
        </div>
      );
    } else commentBox = null;

    if (this.state.isCommentSended) {
      msgAfterComSending = (
        <div className={css.msgAfterComSending}>
          Your comment was sended <div>to {this.state.nickname}</div>
        </div>
      );
    }
    return (
      <div className={css.intro}>
        <div className={css.darker}>
          <PersonalRoomHeader
            user={this.props.userNickname}
            id={this.props.match.params.id}
            substring={this.state.substring}
            handleSubstringChange={this.handleSubstringChange}
            setSearchStatus={this.setSearchStatus}
            cancelSearch={this.cancelSearch}
            searchField={this.searchField}
          />
          <h3 className={css.title}>
            Welcome to <span>{this.state.nickname}'s Diary</span>. We hope
            reading this will hope better understand this person. Don't forget
            to write a couple of kinds workd at comments below
          </h3>
          {records}
          <FriendProfile
            nickname={this.state.nickname}
            email={this.state.email}
            about={this.state.aboutSelf}
            image={this.state.imageAddres}
            newImage={this.state.newImage}
            handleNewImageChange={this.handleNewImageChange}
            changeUserImage={this.changeUserImage}
            isCopied={this.state.isCopied}
            copyEmail={this.copyEmail}
          />
          <div className={css.add_comment_container}>
            {' '}
            {/*  callback function */}
            <button className={css.add_comment} onClick={this.openCommentBox}>
              Write comment
              <i className={`fas fa-comment ${css.comment_icon}`}></i>
            </button>
          </div>
          {commentBox}
          {msgAfterComSending}
        </div>
      </div>
    );
  }
}

export default FriendRoom;
