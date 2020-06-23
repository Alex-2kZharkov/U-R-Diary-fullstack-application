import React, { Component } from 'react';
import css from './Profile.module.css';
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProfileClicked: false,
    };
  }

  toggle = () => {
    this.state.isProfileClicked // for hidig and showing sub profile
      ? this.setState({
          isProfileClicked: false,
        })
      : this.setState({
          isProfileClicked: true,
        });
  };
  render() {
    return (
      <div>
        <div className={css.container} onClick={this.toggle}>
          <div className={css.nickname}>{this.props.nickname}</div>
          <img
            className={css.image}
            src={this.props.image}
            alt={"User's avatar"}
          ></img>
          {this.state.isProfileClicked ? (
            <div className={css.list_icon} onClick={this.toggle}>
              <i className='fas fa-chevron-down'></i>
            </div>
          ) : (
            <div className={css.list_icon} onClick={this.toggle}>
              <i className='fas fa-chevron-up'></i>
            </div>
          )}
        </div>
        {this.state.isProfileClicked ? (
          <div className={css.sub_profile}>
            <img
              className={css.image}
              src={this.props.image}
              alt={"User's avatar"}
            ></img>
            <div className={css.sub_profile_info}>
              <div className={css.sub_profile_nickname}>
                {this.props.nickname}
              </div>
              <div className={css.sub_profile_email}>{this.props.email}</div>
              <div className={css.sub_profile_about}>{this.props.about}</div>
            </div>
          </div>
        ) : (
          '' // if sub profile has to be hided , but i don't know what else put here
        )}
      </div>
    );
  }
}

export default Profile;
