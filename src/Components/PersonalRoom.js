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

      records: [], // records from data base
      requiredTitle: '',
    };
  }
  handleRequiredTitleChange = (e) => {
    this.setState({
      requiredTitle: e.target.value,
    });
  };
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
          <div className={css.search_container}>
            <input
              type='text'
              value={this.state.requiredTitle}
              onChange={this.handleRequiredTitleChange}
              placeholder='Type required title here'
              className={css.search_field}
            />
            <button className={css.search}>
              <i class='fas fa-search'></i>
            </button>
            <button className={css.cancel_search}>
              <i class='fas fa-window-close'></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
