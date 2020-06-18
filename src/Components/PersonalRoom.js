import React, { Component } from 'react';
import css from './PersonalRoom.module.css';
import PersonalRoomHeader from './PersonalRoomHeader';
import Records from './Records';
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
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
