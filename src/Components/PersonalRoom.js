import React, { Component } from 'react';
import css from './PersonalRoom.module.css';
import PersonalRoomHeader from './PersonalRoomHeader';
class PersonalRoom extends Component {
  render() {
    return (
      <div className={css.intro}>
        <div className={css.darker}>
           <PersonalRoomHeader user='Alex'/>
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
