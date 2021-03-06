import React, { Component } from 'react';
import css from './PersonalRoomHeader.module.css';
import { NavLink, Link } from 'react-router-dom';
export class PersonalRoomHeader extends Component {
  
  render() {
    return (
      <header className={css.header}>
        <div className={css.user_link_container}>
          <Link to={`/personalRoom/${this.props.id}`} className={css.user_link}>
            {' '}
            {this.props.user} {"'s"} Diary
          </Link>
        </div>
        <div className={css.nav}>
          <NavLink
            to={`/personalRoom/${this.props.id}/notifications`}
            activeClassName={css.active}
            className={css.link}
          >
            <i className='fas fa-bell'></i> Notifications
          </NavLink>
          <NavLink
            to={`/personalRoom/${this.props.id}/friends`}
            activeClassName={css.active}
            className={css.link}
          >
            <i className='fas fa-users'></i> Friends
          </NavLink>
          <NavLink
            to={`/personalRoom/${this.props.id}/comments`}
            activeClassName={css.active}
            className={css.link}
          >
            <i className='fas fa-comments'></i> Comments
          </NavLink>
        </div>
        <div className={css.search_container}>
          <input
            ref={this.props.searchField}
            type='text'
            value={this.props.substring}
            onChange={this.props.handleSubstringChange}
            placeholder='Type required title here'
            className={css.search_field}
          />
          <div onClick={this.props.setSearchStatus} className={css.icon}>
            <i className='fas fa-search'></i>
          </div>
          <div onClick={this.props.cancelSearch} className={css.icon}>
            <i className='fas fa-times'></i>
          </div>
        </div>
      </header>
    );
  }
}

export default PersonalRoomHeader;
