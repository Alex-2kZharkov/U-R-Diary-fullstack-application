import React, { Component } from 'react';
import css from './PersonalRoomHeader.module.css';
import { NavLink, Link } from 'react-router-dom';
export class PersonalRoomHeader extends Component {
  render() {
    return (
      <header className={css.header}>
        <div>
          <Link to='/personalRoom' className={css.user_link}>
            {' '}
            {this.props.user} {"'s"} Diary
          </Link>
        </div>
        <div className={css.nav}>
          <NavLink
            to='/personalRoom/notifications'
            activeClassName={css.active}
            className={css.link}
          >
            <i class='fas fa-bell'></i> Notifications
          </NavLink>
          <NavLink
            to='/personalRoom/friends'
            activeClassName={css.active}
            className={css.link}
          >
            <i class='fas fa-users'></i> Friends
          </NavLink>
          <NavLink
            to='/personalRoom/comments'
            activeClassName={css.active}
            className={css.link}
          >
            <i class='fas fa-comments'></i> Comments
          </NavLink>
        </div>
      </header>
    );
  }
}

export default PersonalRoomHeader;
