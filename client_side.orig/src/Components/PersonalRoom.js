import React, { Component } from 'react';
import css from './PersonalRoom.module.css';
import PersonalRoomHeader from './PersonalRoomHeader';
import Records from './Records';
import { Link } from 'react-router-dom';
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
      substring: '',
      records: [], // records from data base
    };
    this.searchField = React.createRef();
  }
  handleSubstringChange = (e) => {
    this.setState({
      substring: e.target.value,
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
    return this.state.records.filter((record) => {
      if (record.content.search(this.state.substring) != -1) {
        // if substing found at record , then it goes to result array
        return record;
      }
    });
  };

  cancelSearch = () => {
    this.setState({
      searchStatus: false,
      substring: '',
    });
    this.searchField.current.value = ''; // empty search field
  };
  // fetching data from DB through server
  componentDidMount() {
    const id = this.props.match.params.id; // parameters of current url
    this.props.setId(this.props.match.params.id);
    axios
      .get(`http://localhost:4000/personalRoom/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status === 202) {
          this.setState(
            {
              nickname: response.data[response.data.length - 1].nickname,
              email: response.data[response.data.length - 1].email,
              aboutSelf: response.data[response.data.length - 1].about_self,
              records: response.data.map((item) => {
                let record = {
                  id: item.id,
                  content: item.content,
                  image: item.image,
                  date: new Date(item.date).toLocaleString(),
                  url: this.props.match.url,
                };
                return record;
              }),
            },
            () => console.log(this.state.records[0].content)
          );
        } else {
          this.setState(
            {
              nickname: response.data[response.data.length - 1].nickname,
              email: response.data[response.data.length - 1].email,
              aboutSelf: response.data[response.data.length - 1].about_self,
            },
            () => console.log(this.state.records)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            id={this.props.match.params.id}
            user={this.state.nickname}
            substring={this.state.substring}
            handleSubstringChange={this.handleSubstringChange}
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
              <Link
                to={`/personalRoom/${this.props.match.params.id}/new-record`}
                className={css.new_record}
              >
                Add record
                <i className={`fas fa-plus-circle ${css.autenticate_icon}`}></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
