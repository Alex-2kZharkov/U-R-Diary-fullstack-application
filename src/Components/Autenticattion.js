import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import st from './Autentication.module.css';
import TransitionButton from './TransitionButton';
class Autenticattion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TransitionButton
          act={this.props.act}
          label='Main page'
          icon='fas fa-laptop-house'
        />
        <form
          className={st.auten_form}
          onSubmit={this.authenticate}
          method='post'
        >
          <fieldset>
            <legend>Authentication</legend>
            <input
              type='text'
              placeholder='Type your email here'
              required
              className={st.field}
            />
            <input
              type='password'
              placeholder='Type your password'
              required
              className={st.field}
            />
            <button className={st.submit}>Sign in</button>
            <div className={st.registration}>
              <div>
                Still haven't got an account?
                <i className={`fas fa-arrow-circle-down ${st.down}`}></i>
              </div>
              <Link to='/registration'>
                Click here to get absolutely free account
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Autenticattion;
