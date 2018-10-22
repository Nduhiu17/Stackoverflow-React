import React, { Component } from 'react';
import Question from './Question';
import Header from './Header';

export default class Askquestion extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Question />
      </div>
    )
  }
}
