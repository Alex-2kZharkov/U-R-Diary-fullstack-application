import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Comments.module.css';
class Comments extends Component {
  componentDidMount() {
    this.props.setUserNickname('comments', this.props.match.params.id);
  }
  render() {
    return (
      <div className={css.intro}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.comments_container}>
          <div className={`${css.icon} ${css.left}`}><i class="fas fa-comments"></i></div>
          <div className={`${css.icon} ${css.right}`}><i class="fas fa-comments"></i></div>
        </div>
      </div>
    );
  }
}

export default Comments;
