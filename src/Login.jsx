import React, { Component } from 'react'
import LoginForm from './LoginForm';
import API from './api';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
        formData: {},
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(formData) {
  this.setState({ formData: formData});
  API.post(`api/v1/auth/login`, formData)
  .then(res => {
      localStorage.setItem('token', res.data.access_token);
      this.props.history.push('/home');
  });
}

  render() {
    return (
      <div>
         <div class="reg-main-body-container">
            <div class="reg-left-main-body">
            </div>
                <LoginForm submitForm={this.handleFormSubmit}/>
            <div class="reg-right-main-body">
            </div>
         </div>
    </div>
    )
  }
}

LoginForm.propTypes = {
  submitForm: PropTypes.func,
};
