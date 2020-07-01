import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Notifications.module.css';
import Notification from './Notification';
import Axios from 'axios';

export class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.props.setUserNickname('notifications', this.props.match.params.id);
    Axios.get(
      `http://localhost:4000/personalRoom/${this.props.match.params.id}/notificatios/all`
    ).then((response) => {
      console.log('NOTIFICATIONS ',response);
    });
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
            <Notification image='' nickname='Alex_007' date='12' />
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
