import st from './styles/App.module.css';
import React, { Component } from 'react';

class App extends Component {
  authenticate = (e) => {
    e.preventDefault();
    alert(`Checked!`);
  };

  render() {
    return (
      <div>
        <div className={st.App}>
          <div className={st.App_intro}>
            <div className={st.title}>
              <i className={`${st.logos} fas fa-book`}></i>
              <h1>U'R Diary</h1>
              <i className={`${st.logos} fas fa-pencil-alt`}></i>
            </div>
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
                
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
