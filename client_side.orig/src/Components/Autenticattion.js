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
              left: '45%',
              bottom: '3%',
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
        .post('http://localhost:4000', this.state)
        .then((response) => {
          response.status == 200
            ? this.setState({
                message: (
                  <RegistrationMessage
                    style={{
                      position: 'absolute',
                      left: '41%',
                      bottom: '3%',
                      color: '#00ff00',
                      fontWeight: '700',
                      fontSize: '18px',
                      fontFamily: 'Georgia',
                    }}
                    message={response.data}
                  />
                ),
              })
            : this.setState({
                message: (
                  <RegistrationMessage
                    style={{
                      position: 'absolute',
                      left: '44%',
                      bottom: '3%',
                      color: '#f30b0b',
                      fontWeight: '700',
                      fontSize: '18px',
                      fontFamily: 'Georgia',
                    }}
                    message={response.data}
                  />
                ),
              });
        })
        .catch((error) => {});
    }
  };

  render() {
    return (
      <div>
        <TransitionButton
          act={this.props.act}
          label='Main page'
          icon='fas fa-laptop-house'
        />
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
                Still haven't got an account?
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
    );
  }
}

export default Autenticattion;
