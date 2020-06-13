import React, { Component } from 'react';
import css from './Registration.module.css';
import TransitionButton from './TransitionButton';
import Autenticattion from './Autenticattion';
class Registration extends Component {
  render() {
    return (
      <div className={css.intro}>
        <h3 className={css.title}>
          It is time to become better version of yourself
        </h3>
        <form
          className={css.auten_form}
          onSubmit={this.authenticate}
          method='post'
        >
          <input
            type='text'
            placeholder='Create you nickname'
            required
            className={css.field}
          />
          <input
            type='text'
            placeholder='Write down your email here'
            required
            className={css.field}
          />
          <input
            type='password'
            placeholder='Create your password'
            required
            className={css.field}
          />
          <input
            type='password'
            placeholder='Type your password again'
            required
            className={css.field}
          />
          <button className={css.submit}>Registrate now</button>
          <div className={css.registration}></div>
        </form>
      </div>
    );
  }
}

export default Registration;
