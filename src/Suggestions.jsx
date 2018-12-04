import React, { Component } from 'react';
import dateFormat from './dateFormat';
import SearchForm from './SearchForm';

let pro = <SearchForm/>;

const Suggestions = (pro) => {
    <div class="questions-summary">
    <div class="h2-questions">
        <h2>Questions</h2>
    </div>
    const options = pro.questions.reverse().map(question =>(
        <div>
        <h3 class="question-title">{question.title}</h3>
        <p className="question-content">{question.body}</p>
        <span class="question-tags">
            <p class="question-author">Author:{question.user.username}</p>
            <p class="question-creation-date">Created at:{dateFormat(question.date_created)}</p>
            <p class="question-author">{question.answers.length} Answers</p>
        </span>
    </div>
    ))
    </div>
    return {options}
  }
  
  export default Suggestions