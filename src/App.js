import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
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
      </BrowserRouter>
    );
  }
}

export default App;
