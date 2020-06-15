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
          <NavLink to='/personalRoom/notifications'>Notifications</NavLink>
          <NavLink to='/personalRoom/friends'>Friends</NavLink>
          <NavLink to='/personalRoom/comments'>Comments</NavLink>
        </div>
      </header>
    );
  }
}

export default PersonalRoomHeader;
