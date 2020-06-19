import React, { Component } from 'react';
import css from './Records.module.css';
import Record from './Record';
class Records extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let records =
      !this.props.searchStatus || (this.props.searchStatus && this.props.searchResultStatus) ||  this.props.searchResultStatus  ? (
        this.props.records.map((item) => {
          return (
            <Record
              date={item.date}
              content={item.content}
              image={item.image}
              title={item.title}
            />
          );
        })
      ) : (
        <div
          style={{
            fontSize: '40px',
            fontFamily: 'Cartoonish',
            color: '#d7d7f6',
            textAlign: 'center',
          }}
        >
          We were searching everywhere, but we couln't find anything...
        </div>
      );
    return <div className={css.container}>{records}</div>;
  }
}

export default Records;
