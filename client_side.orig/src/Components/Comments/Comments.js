import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Comments.module.css';
import Comment from './Comment';
import MyComment from './MyComment';
import axios from 'axios';
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideUsercomments: [],
      myComments: [],
    };
  }

  deleteSideUserComment = (commentId) => {
    axios
      .delete(
        `http://localhost:4000/personalRoom/${this.props.match.params.id}/comments/delete-comment/${commentId}`
      )
      .then((response) => {
        console.log(response.data);
        let index = this.state.sideUsercomments.indexOf(
          this.state.sideUsercomments.find(
            (item) => item.comment_id == commentId
          )
        );
        this.state.sideUsercomments.splice(index, 1);
        this.setState({
          sideUsercomments: this.state.sideUsercomments,
        });
      });
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/personalRoom/${this.props.match.params.id}/comments/my-comments`
      )
      .then((response) => {
        this.setState(
          {
            myComments: response.data,
          },
          () => console.log(this.state.myComments)
        );
      });
    axios
      .get(
        `http://localhost:4000/personalRoom/${this.props.match.params.id}/comments/side-user-comments`
      )
      .then((response) => {
        this.setState(
          {
            sideUsercomments: response.data,
          },
          () => console.log(this.state.sideUsercomments)
        );
      });
    this.props.setUserNickname('comments', this.props.match.params.id);
  }
  render() {
    let myComments = null,
      sideUserComments = null,
      entryMsg = null;
    if (this.state.myComments.length && this.state.sideUsercomments.length) {
      myComments = this.state.myComments.map((item, index) => (
        <MyComment
          key={index}
          image={this.props.userImage}
          nickname='You'
          to={item.nickname}
          date={item.date_created}
          content={item.content}
        />
      ));
      sideUserComments = this.state.sideUsercomments.map((item, index) => (
        <Comment
          commentId={item.comment_id}
          key={index}
          image={item.image}
          nickname={item.nickname}
          date={item.date_created}
          content={item.content}
          deleteSideUserComment={this.deleteSideUserComment}
        />
      ));
      entryMsg = (
        <div className={`${css.entry_message} ${css.modification}`}>
          {' '}
          Uh, your friends left comments for you. Here they come!
        </div>
      );
    } else if (
      this.state.myComments.length &&
      !this.state.sideUsercomments.length
    ) {
      myComments = this.state.myComments.map((item, index) => (
        <MyComment
          key={index}
          image={this.props.userImage}
          to={item.nickname}
          nickname='You'
          date={item.date_created}
          content={item.content}
        />
      ));
      entryMsg = (
        <div className={`${css.entry_message} ${css.modification}`}>
          {' '}
          Uh, your friends left comments for you. Here they come!
        </div>
      );
    } else if (
      !this.state.myComments.length &&
      this.state.sideUsercomments.length
    ) {
      sideUserComments = this.state.sideUsercomments.map((item, index) => (
        <Comment
          commentId={item.comment_id}
          key={index}
          image={item.image}
          nickname={item.nickname}
          date={item.date_created}
          content={item.content}
          deleteSideUserComment={this.deleteSideUserComment}
        />
      ));
      entryMsg = (
        <div className={`${css.entry_message} ${css.modification}`}>
          {' '}
          Uh, your friends left comments for you. Here they come!
        </div>
      );
    } else {
      entryMsg = (
        <div className={`${css.entry_message} ${css.modification}`}>
          Looks like you haven't got any comments. Go to <span>friends</span>{' '}
          section, fing some good friends, and we sure they will share their
          thoughts about your diary
        </div>
      );
    }
    return (
      <div className={css.intro}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.comments_container}>
          <div className={`${css.icon} ${css.left}`}>
            <i className='fas fa-comments'></i>
          </div>
          <div className={`${css.icon} ${css.right}`}>
            <i className='fas fa-comments'></i>
          </div>
          {entryMsg}
          {sideUserComments}
          {myComments}
        </div>
      </div>
    );
  }
}

export default Comments;
