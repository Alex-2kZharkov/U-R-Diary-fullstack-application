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
    // this.updateNotification = this.updateNotification.bind(this);
  }

  componentDidMount() {
    this.props.setUserNickname('notifications', this.props.match.params.id);
    Axios.get(
      `http://localhost:4000/personalRoom/${this.props.match.params.id}/notificatios/all`
    ).then((response) => {
      console.log('NOTIFICATIONS ', response);
      this.setState({
        notifications: response.data,
      });
    });
  }
  updateNotification = (user_id, author_id, notif_id, status) => {
    Axios.put(
      `http://localhost:4000/personalRoom/${user_id}/notification/${notif_id}`,
      { status: status, author_id: author_id }
    ).then((response) => {
      console.log(response);
      console.log(this.state);
      let requiredIndex;
      this.state.notifications.find((item, index, array) => {
        if (item.id == response.data[response.data.length - 1].id)
          requiredIndex = index;
      });
      this.state.notifications[requiredIndex] =
        response.data[response.data.length - 1];
      this.setState({
        notifications: this.state.notifications,
      });
    });
  };
  render() {
    return (
      <div className={css.container}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.external_container}>
          <div className={css.inner_container}>
            {this.state.notifications.length ? (
              <>
                <div className={`${css.entry_message} ${css.modification}`}>
                  {' '}
                  Here comes your notifications
                </div>
                {this.state.notifications.map((item, index) => (
                  <Notification
                    key={index}
                    user_id={this.props.match.params.id}
                    author_id={item.id}
                    nickname={item.nickname}
                    image={item.image}
                    notif_id={item.notif_id}
                    date={item.date}
                    isAccepted={item.is_accepted}
                    updateNotification={this.updateNotification}
                  />
                ))}
              </>
            ) : (
              <div className={`${css.entry_message} ${css.modification}`}>
                {' '}
                You haven't got any notifications yet. You'll see them as soon
                as another user will send to you friendship request
              </div>
            )}
          </div>
        </div>
        <div className={`${css.bell} fa fa-bell`}></div>
      </div>
    );
  }
}

export default Notifications;
