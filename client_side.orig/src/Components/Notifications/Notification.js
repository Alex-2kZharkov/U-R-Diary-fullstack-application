import React from 'react';
import css from './Notifications.module.css';

export class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAccepted: false,
      isRejected: false,
      days: Math.floor(
        Math.abs(
          new Date(new Date().toISOString()) - new Date(this.props.date)
        ) /
          (1000 * 60 * 60 * 24)
      ),
    };
  }

  accept = () => {
    this.setState({
      isAccepted: true,
    });
  };
  reject = () => {
    this.setState({
      isRejected: true,
    });
  };
  render() {
    let block;
    if (this.props.isAccepted === -1) {
      block = (
        <div>
          <button
            type='button'
            className={css.friendship_request}
            onClick={() =>
              this.props.updateNotification(
                this.props.user_id,
                this.props.author_id,
                this.props.notif_id,
                1
              )
            }
          >
            <i className='fas fa-check'></i> Accept friendship invitation
          </button>
          <button
            type='button'
            className={`${css.friendship_request} ${css.reject_notification}`}
          >
            <i className='fas fa-times'></i> Reject friendship invitation
          </button>
        </div>
      );
    } else if (this.props.isAccepted === 0) {
      block = (
        <div className={css.rejection_message}>
          Invitation has been rejected <i className='fas fa-times-circle'></i>
        </div>
      );
    } else {
      block = (
        <div className={css.acceptance_message}>
          Invitation has been accepted <i className='fas fa-check-circle'></i>
        </div>
      );
    }
    return (
      <div>
        <div>
          <div className={css.required_notification}>
            <img
              src={this.props.image}
              alt='Provided by user'
              className={css.notification_image}
            ></img>
            <div className={css.data_container}>
              <div className={css.nickname}>{this.props.nickname}</div>
              <div className={css.date_sended}>
                {new Date(this.props.date).toLocaleString()}
                {this.state.days === 0 ? (
                  <span> (Sended: today)</span>
                ) : (
                  <span> (Sended: {this.state.days} days ago)</span>
                )}
              </div>
              {/*  {message} */}
              {block}
            </div>
          </div>
          <div className={css.border}></div>
        </div>
      </div>
    );
  }
}

export default Notification;
