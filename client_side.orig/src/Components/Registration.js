import React, { Component } from 'react';
import css from './Registration.module.css';
import { Link, Redirect } from 'react-router-dom';
import Quote from './Quote';
import RegistrationMessage from './RegistrationMessage';
import axios from 'axios';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      nickname: '',
      something: '',
      email: '',
      password: '',
      passwordAgain: '',
      message: null,
      isRegistrated: false,
    };
  }
  handleNicknameChange = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  };
  handleSomethingChange = (e) => {
    this.setState({
      something: e.target.value,
    });
  };
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
  handlePasswordAgainChange = (e) => {
    this.setState({
      passwordAgain: e.target.value,
    });
  };
  submitRegistration = (e) => {
    e.preventDefault();
    if (
      this.state.nickname === '' ||
      this.state.something === '' || // checking if any field is empty
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.passwordAgain === ''
    ) {
      this.setState({
        message: (
          <RegistrationMessage
            style={{
              position: 'absolute',
              left: '32%',
              bottom: '1%',
              color: '#f30b0b',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Georgia',
            }}
            message='Fill in all fields!'
          />
        ),
      });
    } else if (this.state.password !== this.state.passwordAgain) {
      // checking if password and password again aint match
      this.setState({
        message: (
          <RegistrationMessage
            style={{
              position: 'absolute',
              left: '25%',
              bottom: '1%',
              color: '#f30b0b',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Georgia',
            }}
            message='Passwords has to match!'
          />
        ),
      });
    } else {
      axios
        .post('http://localhost:4000/registration', this.state) // send request
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.setState({
              id: response.data.insertId,
              isRegistrated: true,
              message: (
                <RegistrationMessage
                  style={{
                    position: 'absolute',
                    left: '25%',
                    bottom: '1%',
                    color: '#00ff00',
                    fontWeight: '700',
                    fontSize: '18px',
                    fontFamily: 'Georgia',
                  }}
                  message='Successfully registrated. Check your email'
                />
              ),
            });
          } else {
            this.setState({
              message: (
                <RegistrationMessage
                  style={{
                    position: 'absolute',
                    left: '25%',
                    bottom: '1%',
                    color: '#f30b0b',
                    fontWeight: '700',
                    fontSize: '18px',
                    fontFamily: 'Georgia',
                  }}
                  message='Email has already taken'
                />
              ),
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    let comp;
    if (this.state.isRegistrated) {
      let route = this.props.openRoom(this.state.id); // getting personal route for user
      return <Redirect to={route} />;
    } else {
      comp = (
        <div className={css.intro}>
          <div className={css.book}>
            {' '}
            {/* // diary animation */}
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={`${css.page} ${css.turn}`}></span>
            <span className={css.cover}></span>
            <span className={css.page}></span>
            <span className={`${css.cover} ${css.turn}`}></span>
          </div>
          <div className={css.transition}>
            <button onClick={this.props.act}>
              <Link to='/'>
                Main page{' '}
                <i className={`fas fa-laptop-house ${css.transition_icon}`}></i>
              </Link>
            </button>
          </div>
          <h3 className={css.title}>
            It is time to become a better version of yourself
          </h3>
          <div className={css.quotes}>
            <Quote
              img='https://i.guim.co.uk/img/media/7a770bbbaaf6ca9d56022829c6d31977b1d6f646/0_261_2520_1511/master/2520.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=db925f9d71adde000f2fff5aca7ffb3e'
              quote='“I never travel without my diary. One should always have something sensational to read in the train.”'
              author='Oscar Wilde'
            />
            <Quote
              img='https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/07/belle_nineties_1934_botnt-fsct005-h_2019.jpg'
              quote={"“I always say, keep a diary and someday it'll keep you”"}
              author='Mae West'
            />
          </div>

          <form
            className={css.auten_form}
            onSubmit={this.authenticate}
            method='post'
            onSubmit={(e) => this.submitRegistration}
          >
            <input
              type='text'
              placeholder='Create you nickname'
              required
              className={css.field}
              value={this.state.nickname}
              onChange={this.handleNicknameChange}
            />
            <textarea
              type='text'
              placeholder='Tell something about yourself'
              required
              className={css.field}
              value={this.state.something}
              onChange={this.handleSomethingChange}
            ></textarea>
            <input
              type='email'
              placeholder='Write down your email here'
              required
              className={css.field}
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <input
              type='password'
              placeholder='Create your password'
              required
              className={css.field}
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <input
              type='password'
              placeholder='Type your password again'
              required
              className={css.field}
              value={this.state.passwordAgain}
              onChange={this.handlePasswordAgainChange}
            />

            <button onClick={this.submitRegistration} className={css.submit}>
              Registrate now
            </button>
            {this.state.message}
          </form>
        </div>
      );
    }
    return comp;
  }
}

export default Registration;
