import React, { Component } from 'react';
import Right from './Right';
import Left from './Left';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:'',
            value:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let form = event.target.name;
        let state = {};
        state[form] = event.target.value;

        this.setState(state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.submitForm(this.state);
    }
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
                  <form onSubmit={this.handleSubmit}>
                  <div class="question-title">
                      Title
                      <input type="text" name="title" id="question-title"  value={this.state.title} onChange={this.handleChange}/>
                  </div>
                  <div class="question-body">
                      Content
                      <textarea name="body" id="question-body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
                  </div>
                  <div id="post-question-button-div" class="post-question-button-div">
                      <input id="post-question-button" class="post-question-button" type="submit" value="Post"/>
                  </div>
                  </form>
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