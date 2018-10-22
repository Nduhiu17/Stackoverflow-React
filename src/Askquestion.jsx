import React, { Component } from 'react';
import Question from './Question';
import Header from './Header';
import API from './api';

export default class Askquestion extends Component {
  constructor (props) {
    super(props);
    this.state = {
        formData: {},
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(formData) {
    this.setState({ formData: formData});
    API.post(`/api/v1/questions`, formData)
    .then(res => {
        this.props.history.push('/home');
    });
}

  render() {
    return (
      <div>
        <Header/>
        <Question submitForm={this.handleFormSubmit}/>
      </div>
    )
  }
}
