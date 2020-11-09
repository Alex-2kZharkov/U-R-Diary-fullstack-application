import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import css from './FriendProfile.module.css';
class FriendProfile extends Component {
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
        {
          this.state.isProfileClicked ? (
            <div className={css.sub_profile_container}>
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
                  <CopyToClipboard
                    text={this.props.email}
                    onCopy={this.props.copyEmail}
                  >
                    <div className={css.sub_profile_email}>
                      {this.props.email}
                    </div>
                  </CopyToClipboard>

                  <div className={css.sub_profile_about}>
                    {this.props.about}
                  </div>
                </div>

                {this.props.isCopied ? (
                  <div className={css.copied}>Copied</div>
                ) : null}
              </div>
            </div>
          ) : null // if sub profile has to be hided , but i don't know what else put here
        }
      </div>
    );
  }
}

export default FriendProfile;
