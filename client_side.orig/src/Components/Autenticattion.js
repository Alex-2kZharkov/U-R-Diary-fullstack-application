import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import st from './Autentication.module.css';
import TransitionButton from './TransitionButton';
import RegistrationMessage from './RegistrationMessage';
import axios from 'axios';

class Autenticattion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      email: '',
      password: '',
      message: null,
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  submitToServer = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({
        message: (
          <RegistrationMessage
            style={{
              position: 'absolute',
              left: '32%',
              bottom: '9%',
              color: '#f30b0b',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Georgia',
            }}
            message='Fill in all fields!'
          />
        ),
      });
    } else {
      axios
        .post('http://localhost:4000/login', this.state)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.setState({
              id: response.data.id,
            });
            this.props.history.push(`/personalRoom/${response.data.id}`);
          } else {
            this.setState({
              message: (
                <RegistrationMessage
                  style={{
                    position: 'absolute',
                    left: '31%',
                    bottom: '9%',
                    color: '#f30b0b',
                    fontWeight: '700',
                    fontSize: '18px',
                    fontFamily: 'Georgia',
                  }}
                  message={response.data}
                />
              ),
            });
          }
        })
        .catch((error) => {});
    }
  };

  render() {
    return (
      <div className={st.intro}>
        <TransitionButton
          route='/'
          label='Main page'
          icon='fas fa-laptop-house'
        />
        <div className={st.form_container}>
          <form className={st.auten_form}>
            <fieldset>
              <legend>Authentication</legend>
              <input
                type='email'
                placeholder='Type your email here'
                required
                className={st.field}
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <input
                type='password'
                placeholder='Type your password'
                required
                className={st.field}
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <button onClick={this.submitToServer} className={st.submit}>
                Sign in
              </button>
              <div className={st.registration}>
                <div>
                  Still haven't got an account? The time has come!
                  <i className={`fas fa-arrow-circle-down ${st.down}`}></i>
                </div>
                <Link to='/registration'>
                  Click here to get absolutely free account
                </Link>
              </div>
              {this.state.message}
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Autenticattion;
