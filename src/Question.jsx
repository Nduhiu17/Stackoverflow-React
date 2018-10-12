import React, { Component } from 'react';
import Right from './Right';
import Left from './Left';

export default class Question extends Component {
  render() {
    return (
      <div>
        <div class="main-container">
          <div class="left-body-container">
              <Left />
          </div>
          <div class="middle-body-container">
              <div class="add-question-container">
                  <h2>Ask your question</h2>
                  <div class="question-title">
                      Title
                      <input type="text" name="title" id="question-title"/>
                  </div>
                  <div class="question-body">
                      Content
                      <textarea name="question-body" id="question-body" cols="30" rows="10"></textarea>
                  </div>
                  <div id="post-question-button-div" class="post-question-button-div">
                      <button id="post-question-button" class="post-question-button">Post</button>
                  </div>
              </div>
          </div>
          <div class="right-question-container">
          <div class="right-main-bar-contents-question">
             <Right />
          </div>
          </div>
        </div>
      </div>
    )
  }
}