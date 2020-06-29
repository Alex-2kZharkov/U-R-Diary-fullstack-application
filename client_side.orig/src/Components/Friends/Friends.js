import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Friends.module.css';
import SearchResult from './SearchResult';
import Axios from 'axios';
export class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiredNickname: '',
      users: [],
    };
  }
  findUsers = () => {
    Axios.get(
      `http://localhost:4000/personalRoom/${this.props.match.params.id}/communications/required-users`,
      {
          params: {
              requiredNickname: this.state.requiredNickname
          }
      }
    )
      .then((response) => {})
      .catch((error) => console.log(error));
  };
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
              value={this.state.requiredNickname}
              onChange={(event) =>
                this.setState({
                  requiredNickname: event.target.value,
                })
              }
            />{' '}
            <button
              type='button'
              className={`${css.submit} ${css.search_modif}`}
              onClick={this.findUsers}
            >
              <i className={`fas fa-search ${css.search_icon}`}></i>
            </button>
            <button
              onClick={(event) =>
                this.setState({
                  requiredNickname: '',
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
