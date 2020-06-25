import React, { Component } from 'react';
import axios from 'axios';
import PersonalRoomHeader from '../PersonalRoomHeader';
import NewRecord from './NewRecord';

export class NewRecordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000${this.props.location.pathname}`) // path
      .then((response) => {
        console.log(response);
        this.setState({
          nickname: response.data[0].nickname,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <PersonalRoomHeader
          user={this.state.nickname}
          id={this.props.match.params.id}
        />
        <NewRecord id={this.props.match.params.id} />
      </div>
    );
  }
}

export default NewRecordPage;
