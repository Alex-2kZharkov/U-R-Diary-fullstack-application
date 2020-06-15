import React, { Component } from 'react';
import css from './PersonalRoomHeader.module.css';
import { NavLink } from 'react-router-dom';
export class PersonalRoomHeader extends Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.user}>
          {this.props.user} {"'s"} Diary
        </div>
        <div className={css.nav}>
          <NavLink to='/personalRoom/notifications'>
            <i class='fas fa-bell'></i> Notifications
          </NavLink>
          <NavLink to='/personalRoom/friends'>
            <i class='fas fa-users'></i> Friends
          </NavLink>
          <NavLink to='/personalRoom/comments'>
            <i class='fas fa-comments'></i> Comments
          </NavLink>
        </div>
      </header>
    );
  }
}

export default PersonalRoomHeader;
