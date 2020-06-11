import React, { Component } from 'react';
import st from './Reason.module.css';

export class Reason extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={st.item}>
        <img
          src={`${this.props.img}`}
          alt='3434r34r'
          className={st.item_img}
        ></img>
        <div className={st.item_title}>{this.props.title}</div>
        <p className={st.item_text}>{this.props.content}</p>
      </div>
    );
  }
}

export default Reason;
