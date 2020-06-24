import React, { Component } from 'react';
import css from './PersonalRoom.module.css';
import PersonalRoomHeader from './PersonalRoomHeader';
import Records from './Records';
import TransitionButton from './TransitionButton';
import Profile from './Profile';
import axios from 'axios';
class PersonalRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      email: '',
      aboutSelf: '',
      imageAddres:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUq71y6yGEk94T1hyj89lV-khy9OMkgZt0Dl1hecguJxUpLU6a&usqp=CAU',
      searchStatus: false,
      requiredTitle: '',
      records: [
        {
          title: 'Title2',
          content: 'Content2',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title3',
          content: 'Content3',
          date: new Date().toString(),
          image: '',
        },
      ], // records from data base
    };
    this.searchField = React.createRef();
  }
  handleRequiredTitleChange = (e) => {
    this.setState({
      requiredTitle: e.target.value,
    });
    this.setState({
      searchStatus: false,
    });
  };
  addRecord = () => {};

  setSearchStatus = () => {
    this.setState({
      searchStatus: true,
    });
  };
  findRecord = () => {
    return this.state.records.filter(
      (record) => record.title === this.state.requiredTitle
    );
  };

  cancelSearch = () => {
    this.setState({
      searchStatus: false,
      requiredTitle: '',
    });
    this.searchField.current.value = '';
  };
  // fetching data from DB through server
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/personalRoom/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          nickname: response.data[0].nickname,
          email: response.data[0].email,
          aboutSelf: response.data[0].about_self,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.props.id);
  }
  render() {
    let records;
    if (this.state.searchStatus) {
      let searchResults = this.findRecord();

      if (searchResults.length > 0) {
        console.log(searchResults);
        records = <Records records={searchResults} />;
      } else {
        records = (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '2%',
              padding: '0 20%',
              fontSize: '80px',
              fontFamily: 'Cambria, Times New Roman',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            We were searching everywhere, but we couln't find anything...
            <div>Please, try again</div>
          </div>
        );
      }
    } else {
      records = (
        <Records
          searchStatus={this.state.searchStatus}
          searchResultStatus={this.searchResultStatus}
          records={this.state.records}
        />
      );
    }

    return (
      <div className={css.intro}>
        <div className={css.darker}>
          <PersonalRoomHeader
            user={this.state.nickname}
            requiredTitle={this.state.requiredTitle}
            handleRequiredTitleChange={this.handleRequiredTitleChange}
            setSearchStatus={this.setSearchStatus}
            cancelSearch={this.cancelSearch}
            searchField={this.searchField}
          />
          {records}
          <Profile
            nickname={this.state.nickname}
            email={this.state.email}
            about={this.state.aboutSelf}
            image={this.state.imageAddres}
          />

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
