import React, { Component } from 'react';
import css from './Records.module.css';
import Record from './Record';
class Records extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    let records = this.props.records.map((item) => {
      return (
        <Record
          date={item.date}
          content={item.content}
          image={item.image}
          title={item.title}
        />
      );
    });

    return <div className={css.container}>{records}</div>;
  }
}

export default Records;
