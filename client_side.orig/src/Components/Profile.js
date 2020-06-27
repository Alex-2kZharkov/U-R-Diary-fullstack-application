import React, { Component } from 'react';
import css from './Profile.module.css';
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProfileClicked: false,
      isEditButtonClicked: false,
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
  showEditing = () => {
    if (!this.state.isEditButtonClicked) {
      this.setState({
        isEditButtonClicked: true,
      });
    }
  };
  hideEditing = () => {
    if (this.state.isEditButtonClicked) {
      this.setState({
        isEditButtonClicked: false,
      });
    }
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
          <div className={css.sub_profile_container}>
            <div className={css.sub_profile}>
              <img
                className={css.image}
                src={this.props.image}
                alt={"User's avatar"}
              ></img>
              <div className={css.edit_image} onClick={this.showEditing}>
                <i className='fas fa-pencil-alt'></i>
              </div>
              <div className={css.sub_profile_info}>
                <div className={css.sub_profile_nickname}>
                  {this.props.nickname}
                </div>
                <div className={css.sub_profile_email}>{this.props.email}</div>
                <div className={css.sub_profile_about}>{this.props.about}</div>
              </div>
              {this.state.isEditButtonClicked ? (
                <div className={css.editing}>
                  <input
                    className={css.editing_field}
                    type='text'
                    onChange={this.props.handleNewImageChange}
                    value={this.props.newImage}
                  />
                  <div
                    className={css.editing_button}
                    onClick={this.props.changeUserImage}
                  >
                    <i className='fas fa-check-circle'></i>
                  </div>
                  <div
                    className={css.editing_button}
                    onClick={this.hideEditing}
                  >
                    <i className='fas fa-times-circle'></i>
                  </div>
                </div>
              ) : (
                ''
              )}
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
