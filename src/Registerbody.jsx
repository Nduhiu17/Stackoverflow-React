import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Registerbody extends Component {
  render() {
    return (
      <div>
        <div class="form-signin-r">
            <div class="reg-title">
                <h2 class="h2-register">Register</h2>
            </div>
            <div-reg-form-div>
                <input type="text" class="username" placeholder="username"  id="name"/>
                <input type="text" class="email" placeholder="email"  id="email"/>
                <input type="password" class="password" placeholder="password"  id="password"/>
                <input type="password" class="repeat-password" placeholder="repeat password"  id="repeat-password"/>
                <div class="r-button">
                    <button id="reg-submit-button" class="reg-submit-button">Register</button>
                </div>
            </div-reg-form-div>
        </div>
        <div class="login-here">
        <i> Already have an account? <NavLink to='/login'>login here...</NavLink></i>
        </div>
    </div>
    )
  }
}