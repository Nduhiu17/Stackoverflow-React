import React, { Component } from 'react'
import Registerheader from './Registerheader';
import Registerbody from './Registerbody';



export default class Register extends Component {
  render() {
    return (
      <div>
        <div class="header">
           <Registerheader/>
        </div>
        <div class="reg-main-body-container">
          <div class="reg-left-main-body">
          </div>
          <div class="reg-main-body">
             <Registerbody/>
          </div>
          <div class="reg-right-main-body">
          </div>
        </div>
      </div>
    )
  }
}