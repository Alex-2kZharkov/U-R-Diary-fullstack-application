import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';
import Notifications from './Components/Notifications';
import Friends from './Components/Friends';
import Comments from './Components/Comments';

class App extends Component {
  authenticate = (e) => {
    e.preventDefault();
    alert(`Checked!`);
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/registration' component={Registration} />
        <Route exact path='/personalRoom' component={PersonalRoom} />
        <Route path='/personalRoom/notifications' component={Notifications} />
        <Route path='/personalRoom/friends' component={Friends} />
        <Route path='/personalRoom/comments' component={Comments} />
        {/*    <Route path='/personalRoom' component={} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
