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
      isSearched: false,
      users: [],
    };
  }
  findUsers = () => {
    Axios.get(
      `http://localhost:4000/personalRoom/${this.props.match.params.id}/friends/required-users`,
      {
        params: {
          requiredNickname: this.state.requiredNickname,
        },
      }
    )
      .then((response) => {
        this.setState(
          {
            isSearched: true,
            users: response.data,
          },
          () => console.log(this.state.users)
        );
      })
      .catch((error) => console.log(error));
  };

  sendFriendshipRequest = (recepient_id) => {
    Axios.post(
      `http://localhost:4000/personalRoom/${this.props.match.params.id}/friends/required-user/${recepient_id}`
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.props.setUserNickname('friends', this.props.match.params.id);
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
                  isSearched: false,
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
                  isSearched: false,
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
          {this.state.isSearched ? (
            this.state.users.length ? (
              this.state.users.map((item, index) =>
                this.props.userNickname != item.nickname ? (
                  <SearchResult
                    id={item.id}
                    key={index}
                    image={item.image}
                    nickname={item.nickname}
                    days={item.days}
                    sendFriendshipRequest={this.sendFriendshipRequest}
                  />
                ) : (
                  <SearchResult
                    key={index}
                    image={item.image}
                    nickname={`${item.nickname} (Your account)`}
                    days={item.days}
                    hideRequest={{ display: 'none' }}
                  />
                )
              )
            ) : (
              <div className={css.negative_result}>
                Sorry, but we coun't find anything about{' '}
                <span>{this.state.requiredNickname}</span> . Please, try again
              </div>
            )
          ) : (
            <div className={css.entry_message}>
              Looks like you haven't got any friends. Use search bar above to
              find other users
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Friends;
