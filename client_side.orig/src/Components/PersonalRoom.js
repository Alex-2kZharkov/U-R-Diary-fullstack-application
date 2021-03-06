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
      imageAddres: '',
      newImage: '',
      searchStatus: false,
      substring: '',
      records: [], // records from data base
      isCopied: false,
    };
    this.searchField = React.createRef();
  }

  copyEmail = () => {
    this.setState({
      isCopied: true,
    });
    setTimeout(this.hideCopiedMessage, 500);
  };
  hideCopiedMessage = () => {
    this.setState({
      isCopied: false,
    });
  };
  handleNewImageChange = (e) => {
    this.setState({
      newImage: e.target.value,
    });
  };

  changeUserImage = (callback) => {
    if (this.state.newImage) {
      axios
        .put(
          `http://localhost:4000${this.props.match.url}/image-change`,
          this.state
        )
        .then((response) => {
          console.log(response);
          this.setState(
            {
              imgUpdForceQuit: true,
              newImage: '',
              imageAddres: response.data[response.data.length - 1].image,
            },
            () => callback()
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
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
        // if substring found at record , then it goes to result array
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
  download_all = () => {
    axios
      .post(
        `http://localhost:4000${this.props.match.url}/download-all`,
        this.state.records
      )
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          window.open(`http://localhost:4000/all_records.pdf`); // open link to download file
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteRecord = (rec_id) => {
    axios
      .delete(`http://localhost:4000${this.props.match.url}/delete/${rec_id}`)
      .then((result) => {
        console.log(result);
        let index = this.state.records.indexOf(
          this.state.records.find((item) => item.id == rec_id)
        );
        this.state.records.splice(index, 1);
        this.setState({
          records: this.state.records,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // fetching data from DB through server
  componentDidMount() {
    console.log('COMPONENT DID');
    const id = this.props.match.params.id; // parameters of current url

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
              imageAddres: response.data[response.data.length - 1].user_image,
              records: response.data
                .map((item) => {
                  let record = {
                    id: item.id,
                    content: item.content,
                    image: item.image,
                    date: new Date(item.date).toLocaleString(),
                    url: this.props.match.url,
                  };
                  return record;
                })
                .reverse(),
            },
            () => console.log(this.state.records[0].content)
          );
        } else {
          this.setState(
            {
              nickname: response.data[response.data.length - 1].nickname,
              email: response.data[response.data.length - 1].email,
              aboutSelf: response.data[response.data.length - 1].about_self,
              imageAddres: response.data[response.data.length - 1].image,
            },
            () => console.log(this.state.records)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate() {
    console.log('UPDATING');
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
          deleteRecord={this.deleteRecord}
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
            newImage={this.state.newImage}
            handleNewImageChange={this.handleNewImageChange}
            changeUserImage={this.changeUserImage}
            isCopied={this.state.isCopied}
            copyEmail={this.copyEmail}
          />
          <div className={css.download_all} style={this.props.style}>
            <button
              className={css.download_all_button}
              onClick={this.download_all}
            >
              Download all
              <i className={`fas  fa-file-archive ${css.autenticate_icon}`}></i>
            </button>
          </div>

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
