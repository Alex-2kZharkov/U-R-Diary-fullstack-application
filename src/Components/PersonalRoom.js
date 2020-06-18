import React, { Component } from 'react';
import css from './PersonalRoom.module.css';
import PersonalRoomHeader from './PersonalRoomHeader';
import Records from './Records';
import TransitionButton from './TransitionButton';
class PersonalRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      email: '',
      aboutSelf: '',
      imageAddres: '',
      searchTitle: '',
      records: [], // records from data base
    };
  }
  handleSearchtitleChange = (e) => {};
  addRecord = () => {};
  findRecord = () => {};
  render() {
    return (
      <div className={css.intro}>
        <div className={css.darker}>
          <PersonalRoomHeader user='Alex' />
          <Records />

          <div className={css.autenticate} style={this.props.style}>
            <button onClick={this.props.act}>
              {' '}
              {/*  callback function */}
              Add record
              <i className={`fas fa-plus-circle ${css.autenticate_icon}`}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
