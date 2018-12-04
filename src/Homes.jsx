import React, { Component } from 'react'
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';
import './App.css';
import Suggestions from './Suggestions';

export default class Homes extends Component {
  render() {
    return (
      <div>
        <div class="header">
           <Header />
        </div>
        <div class="main-container">
          <div class="left-body-container">
            <Left />
          </div>
          <div class="middle-body-container">
            <div class="middle-body-main">
              <Suggestions />
            </div>
          </div>
          <div class="right-body-container">
            <div class="right-main-bar-contents">
              <Right />
            </div>
          </div>
        </div>
        <div class="footer-home">
           <Footer/>
        </div>
      </div>
    )
  }
}