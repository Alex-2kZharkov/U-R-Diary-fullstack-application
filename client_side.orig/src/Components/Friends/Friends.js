import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Friends.module.css';
import SearchResult from './SearchResult';
export class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requireNickname: '',
    };
  }
  componentDidMount() {
    this.props.setUserNickname(this.props.match.params.id);
  }
  render() {
    return (
      <div className={css.container}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.wrap}>
          <form action='' autoComplete='on'>
            <input
              name='search'
              type='text'
              placeholder='Who are we looking for ?'
              className={css.search_field}
              value={this.state.requireNickname}
              onChange={(event) =>
                this.setState({
                  requireNickname: event.target.value,
                })
              }
            />{' '}
            <button
              type='button'
              className={`${css.submit} ${css.search_modif}`}
            >
              <i className={`fas fa-search ${css.search_icon}`}></i>
            </button>
            <button
              onClick={(event) =>
                this.setState({
                  requireNickname: '',
                })
              }
              type='button'
              className={`${css.submit} ${css.cancel_modification}`}
            >
              <i className={`fas fa-times ${css.search_icon}`}></i>
            </button>
          </form>
        </div>
        <div className={css.result_users}>
   {/*        <SearchResult />
          <SearchResult /> */}
          <div className={css.negative_result}>
            Sorry, but we coun't find anything about <span>ferifjeriferi</span>{' '}
            . Please, try again
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
