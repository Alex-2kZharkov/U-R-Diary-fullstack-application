import React, { Component } from 'react';
import st from './TransitionButton.module.css';

class TransitionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.act);
    return (
      <div className={st.autenticate}>
        <button onClick={this.props.act}>
          {this.props.label}
          <i className={`${this.props.icon} ${st.autenticate_icon}`}></i>
        </button>
      </div>
    );
  }
}

export default TransitionButton;
