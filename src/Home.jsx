import React, { Component } from 'react'
import Results from './Results';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

import './App.css';

export default class Main extends Component {
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
              <Results />
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