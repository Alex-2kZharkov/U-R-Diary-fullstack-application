import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import st from './TransitionButton.module.css';

class TransitionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={st.autenticate} style={this.props.style}>
        <Link to={this.props.route} className={st.link}>
          {this.props.label}
          <i className={`${this.props.icon} ${st.autenticate_icon}`}></i>
        </Link>
      </div>
    );
  }
}

export default TransitionButton;
