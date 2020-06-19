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
      searchStatus: false,
      records: [
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
        {
          title: 'Title',
          content:
            'Contentdldlldlflflflflllflflprlpfpelrferkpgkeropkgoprkeopkgkerkgekgoperkgerkgkeprkgoperkgkoerkgoekrpgkerkgpeorvfklmdmvkdfmkvdmfkvkmdfkmvmdfvkdfmvmdfkmvmdkfmvkmdfmvmdfkmvmdfkmvkfmkmvkfmkvmkfmvmfkmvmfmvfkmvkfmmvkfmmkvfkmvfkm',
          date: new Date().toString(),
          image: '',
        },
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
      requiredTitle: '',
    };
    this.searchField = React.createRef();
    this.searchResultStatus = false;
  }
  handleRequiredTitleChange = (e) => {
    this.setState({
      requiredTitle: e.target.value,
    });
  };
  addRecord = () => {};
  findRecord = () => {
    let result = this.state.records.filter(
      (record) => record.title === this.state.requiredTitle
    );
    if (result.length) {
      this.searchResultStatus = true;
    } else {
      this.searchResultStatus = false;
    }
    return result;
  };
  setSearchStatus = () => {
    this.setState({
      searchStatus: true,
    });
  };
  cancelSearch = () => {
    this.setState({
      searchStatus: false,
      requiredTitle: '',
    });
    this.searchField.current.value = '';
  };
  render() {
    return (
      <div className={css.intro}>
        <div className={css.darker}>
          <PersonalRoomHeader user='Alex' />
          <Records
            searchStatus={this.state.searchStatus}
            searchResultStatus={this.searchResultStatus}
            records={
              this.state.searchStatus ? this.findRecord() : this.state.records
            }
          />

          <div className={css.autenticate} style={this.props.style}>
            <button onClick={this.props.act}>
              {' '}
              {/*  callback function */}
              Add record
              <i className={`fas fa-plus-circle ${css.autenticate_icon}`}></i>
            </button>
          </div>
          <div className={css.search_container}>
            <div>
              <input
                ref={this.searchField}
                type='text'
                value={this.state.requiredTitle}
                onChange={this.handleRequiredTitleChange}
                placeholder='Type required title here'
                className={css.search_field}
              />
              <button onClick={this.setSearchStatus} className={css.search}>
                <i class='fas fa-search'></i>
              </button>
              <button onClick={this.cancelSearch} className={css.cancel_search}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalRoom;
