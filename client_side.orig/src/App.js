import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';
import Notifications from './Components/Notifications/Notifications';
import Friends from './Components/Friends/Friends';
import Comments from './Components/Comments/Comments';
import Autenticattion from './Components/Autenticattion';
import NewRecordPage from './Components/NewRecord/NewRecordPage';
import EditRecordPage from './Components/EditRecord/EditRecordPage';
import Axios from 'axios';
import FriendRoom from './Components/FriendRoom/FriendRoom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      userNickname: '',
      userImage: '',
    };
  }
  setUserNickname = (section, id) => {
    Axios.get(`http://localhost:4000/personalroom/${id}/${section}`, {
      params: {
        requiredNickname: this.state.requiredNickname,
      },
    })
      .then((response) => {
        this.setState(
          {
            userNickname: response.data[response.data.length - 1].nickname,
            userImage: response.data[response.data.length - 1].image
          },
          () => this.state.userNickname
        );
      })
      .catch((error) => {
        console.log();
      });
  };

  setId = (id) => {
    this.setState({
      id: id,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={Home} // passing callback to change state. After it App.js will fetch data from server and pass it to PersonalRoom
          />
          <Route path='/login' component={Autenticattion} />
          <Route
            path='/registration'
            render={(props) => (
              <Registration {...props} openRoom={this.openRoom} /> // passing callback to change state. After it App.js will fetch data from server and pass it to PersonalRoom
            )}
          />
          <Route
            exact
            path='/personalRoom/:id'
            render={(props) => <PersonalRoom {...props} setId={this.setId} />}
          />
          <Route
            path={'/personalRoom/:id/new-record'}
            component={NewRecordPage}
          />
          <Route
            path='/personalRoom/:id/edit-record/:rec_id'
            component={EditRecordPage}
          />
          <Route
            path='/personalRoom/:id/notifications'
            render={(props) => (
              <Notifications
                {...props}
                setUserNickname={this.setUserNickname}
                userNickname={this.state.userNickname}
              />
            )}
          />
          <Route
            exact
            path='/personalRoom/:id/friends'
            render={(props) => (
              <Friends
                {...props}
                setUserNickname={this.setUserNickname}
                userNickname={this.state.userNickname}
              />
            )}
          />
          <Route
            path='/personalRoom/:id/friends/friend-room/:friend_id'
            render={(props) => (
              <FriendRoom
                {...props}
                setUserNickname={this.setUserNickname}
                userNickname={this.state.userNickname}
              />
            )}
          />
          <Route
            path='/personalRoom/:id/comments'
            render={(props) => (
              <Comments
                {...props}
                setUserNickname={this.setUserNickname}
                userNickname={this.state.userNickname}
                userImage={this.state.userImage}
              />
            )}
          />
          {/*    <Route path='/personalRoom' component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
