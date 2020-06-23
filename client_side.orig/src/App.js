import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';
import Notifications from './Components/Notifications';
import Friends from './Components/Friends';
import Comments from './Components/Comments';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomRoute: `/personalRoom/`,
    };
  }

  openRoom = (id) => {
    this.setState({
      roomRoute: `/personalRoom/:${id}`,
    });
    console.log(this.state.roomRoute);
    return `${this.state.roomRoute}:${id}`; // cause setState is async
  };
  render() {
    console.log(`App ID ${this.state.roomRoute}`);
    return (
      <BrowserRouter>
        <Route
          exact
          path='/'
          render={(props) => <Home {...props} openRoom={this.openRoom} />} // passing callback to change state. After it App.js will fetch data from server and pass it to PersonalRoom
        />
        <Route
          path='/registration'
          render={(props) => (
            <Registration {...props} openRoom={this.openRoom} /> // passing callback to change state. After it App.js will fetch data from server and pass it to PersonalRoom
          )}
        />
        <Route exact path={this.state.roomRoute} component={PersonalRoom} />
        <Route path='/personalRoom/notifications' component={Notifications} />
        <Route path='/personalRoom/friends' component={Friends} />
        <Route path='/personalRoom/comments' component={Comments} />
        {/*    <Route path='/personalRoom' component={} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
