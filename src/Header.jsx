import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div>
          <div class="header">
            <div class="container-header">
                <div class="left-sideheader">
                    <div class="logo-header">
                        <p class="p-logo"><NavLink to='/home'>Stack Overflow Lite</NavLink></p>
                    </div>
                    <div class="search-header">
                        <form id="search-form" class="search-form"/>
                            <input type="text" class="header-search" placeholder="search ...."/>
                    </div>
                </div>
                <div class="right-sideheader">
                    <div class="login-header">
                        <a href="profile.html">Profile</a>
                    </div>
                    <div class="logout-header">
                    <NavLink to='/'>Logout</NavLink>
                    </div>
                    <div class=" add-question-header">
                        <div><NavLink to='/askquestion'>Ask a Question</NavLink></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    
    )
  }
}
