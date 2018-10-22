import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Left extends Component {
  render() {
    return (
      <div>
        <div class="left-container">
            <div class="home-button">
            <NavLink to='/home'><p>Home</p></NavLink>
            </div>
            <div class="left-sub-bars">
                <div class="my-questions">
                <NavLink to='/home'> <p>All Questions</p></NavLink>
                </div>
                <div class="all-questions">
                <NavLink to='/home'><p>My Questons</p></NavLink>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
