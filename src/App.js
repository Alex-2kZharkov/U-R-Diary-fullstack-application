import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import PersonalRoom from './Components/PersonalRoom';

class App extends Component {
  authenticate = (e) => {
    e.preventDefault();
    alert(`Checked!`);
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={PersonalRoom} />
        <Route path='/registration' component={Registration} />
        {/*    <Route path='/personalRoom' component={} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
