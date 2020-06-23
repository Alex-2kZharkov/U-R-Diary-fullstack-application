import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';
import Notifications from './Components/Notifications';
import Friends from './Components/Friends';
import Comments from './Components/Comments';
import Autenticattion from './Components/Autenticattion';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      roomRoute: `/personalRoom/`,
    };
  }

  openRoom = (id) => {
    this.setState({
      id: id,
      roomRoute: `/personalRoom/${id}`,
    });
    console.log(this.state.roomRoute);
    return `${this.state.roomRoute}${id}`; // cause setState is async
  };
  render() {
    console.log(`App ID ${this.state.roomRoute}`);
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
            component={PersonalRoom}
          />
          <Route path='/personalRoom/notifications' component={Notifications} />
          <Route path='/personalRoom/friends' component={Friends} />
          <Route path='/personalRoom/comments' component={Comments} />
          {/*    <Route path='/personalRoom' component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
