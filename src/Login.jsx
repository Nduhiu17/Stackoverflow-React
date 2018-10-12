import React, { Component } from 'react'
import Loginheader from './Loginheader';
import Footer from './Footer';
import Loginbody from './Loginbody';


export default class Login extends Component {
  render() {
    return (
      <div>
         <div class="header">
            <Loginheader/>
         </div>
         <div class="reg-main-body-container">
            <div class="reg-left-main-body">
            </div>
            <div class="reg-main-body2">
            <Loginbody/>
            </div>
            <div class="reg-right-main-body">
            </div>
         </div>
    </div>
    )
  }
}