import React, { Component } from 'react';
import css from './Registration.module.css';
import TransitionButton from './TransitionButton';
import Autenticattion from './Autenticattion';
import { Link } from 'react-router-dom';
import Quote from './Quote';
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
