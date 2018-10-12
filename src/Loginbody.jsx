import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Loginbody extends Component {
  render() {
    return (
        <div>
            <div class="form-login-r">
                <div class="reg-title">
                    <h2>Login</h2>
                </div>
                <div-reg-form-div>
                    <input type="text" class="username" placeholder="username"  id="name"/>
                    <input type="password" class="password" placeholder="password"  id="password"/>
                    <div class="s-button">
                        <button id="reg-submit-button" class="reg-submit-button"><NavLink to='/home'>Login</NavLink></button>
                    </div>
                </div-reg-form-div>
            </div>
            <div class="signin-here">
                <i>Don't have an account yet ? Please click <NavLink to='/'>here...</NavLink></i>
            </div>
        </div>
    )
  }
}





