import React, { Component } from 'react';
import css from './Records.module.css';
import Record from './Record';
class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      ],
    };
  }
  render() {
    let records = this.state.records.map((item) => {
      return (
        <Record
          date={item.date}
          content={item.content}
          image={item.image}
          title={item.title}
        />
      );
    });
    return <div className={css.container}>{records}</div>;
  }
}

export default Records;
