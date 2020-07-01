import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Notifications.module.css';
import Notification from './Notification'

export class Notifications extends Component {
  componentDidMount() {
    this.props.setUserNickname('notifications', this.props.match.params.id);
  }
  render() {
    return (
      <div className={css.container}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.external_container}>
          <div className={css.inner_container}>
            <Notification image='' nickname='Alex_007' days='12'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
