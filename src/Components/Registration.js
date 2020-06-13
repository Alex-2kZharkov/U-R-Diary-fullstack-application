import React, { Component } from 'react';
import css from './Registration.module.css';
import TransitionButton from './TransitionButton';
import Autenticattion from './Autenticattion';
import { Link } from 'react-router-dom';
class Registration extends Component {
  render() {
    return (
      <div className={css.intro}>
        <div className={css.book}>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={`${css.page} ${css.turn}`}></span>
          <span class={css.cover}></span>
          <span class={css.page}></span>
          <span class={`${css.cover} ${css.turn}`}></span>
        </div>
        <div className={css.transition}>
          <button onClick={this.props.act}>
            <Link to='/personalRoom'>
              Main page{' '}
              <i className={`fas fa-laptop-house ${css.transition_icon}`}></i>
            </Link>
          </button>
        </div>
        <h3 className={css.title}>
          It is time to become better a version of yourself
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
