import React, { Component } from 'react';
import axios from 'axios';
import dateFormat from './dateFormat';
import API from './api';

export default class Results extends Component {
    state = {
        questions: []
      }

    componentDidMount() {
        this.getQuestions()
      }

      getQuestions() {
        API.get(`api/v1/questions`)
        .then(res => {
          const questions = res.data.data;
          console.log(res.data.data);
          this.setState({ questions });                 
        })
      }
  render() {
    return (
        <div>
            <div class="questions-summary">
                <div class="h2-questions">
                    <h2>Questions</h2>
                </div>
                { this.state.questions.reverse().map(question =>
                <div>
                    <h3 class="question-title">{question.title}</h3>
                    <p className="question-content">{question.body}</p>
                    <span class="question-tags">
                        <p class="question-author">Author:{question.user.username}</p>
                        <p class="question-creation-date">Created at:{dateFormat(question.date_created)}</p>
                        <p class="question-author">{question.answers.length} Answers</p>
                    </span>
                </div>
                )}
            </div>
        </div>
    )
  }
}
