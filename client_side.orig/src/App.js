import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';
import Notifications from './Components/Notifications';
import Friends from './Components/Friends';
import Comments from './Components/Comments';
import Autenticattion from './Components/Autenticattion';
import NewRecordPage from './Components/NewRecord/NewRecordPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      roomRoute: `/personalRoom/`,
    };
  }

  setId = (id) => {
    this.setState({
      id: id,
    });
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
          <Route exact path='/personalRoom/:id' render={(props) => <PersonalRoom {...props} setId={this.setId} />} />
          <Route
            path={'/personalRoom/:id/new-record'}
            component={NewRecordPage}
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
