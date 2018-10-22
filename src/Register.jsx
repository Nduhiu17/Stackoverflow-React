import React, { Component } from 'react'
import RegisterForm from './RegisterForm';
import API from './api';



export default class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
        formData: {},
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(formData) {
    this.setState({ formData: formData});
    API.post(`api/v1/auth/signup`, formData)
    .then(res => {
        if(res.status===201){
            this.props.history.push('/home');
        }
    });
}

  render() {
    return (
      <div>
        <div class="reg-main-body-container">
          <div class="reg-left-main-body">
          </div>
          <div class="reg-main-body">
             <RegisterForm submitForm={this.handleFormSubmit}/>
          </div>
          <div class="reg-right-main-body">
          </div>
        </div>
      </div>
    )
  }
}