import React, { Component } from 'react';
import st from './Autentication.module.css';
class Autenticattion extends Component {
  render() {
    return (
      <div>
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
            <div>
              Still haven't got an account?
              <a href='/registration'>
                Click here to get absolutely free account
              </a>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Autenticattion;
