import React, { Component } from 'react';
import PersonalRoomHeader from './PersonalRoomHeader';

export class Comments extends Component {
  componentDidMount() {
    this.props.setUserNickname('comments', this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <PersonalRoomHeader user={this.props.userNickname} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Comments;
