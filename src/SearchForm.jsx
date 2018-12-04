import React, { Component } from 'react';
import Suggestions from './Suggestions';
import axios from 'axios';



class SearchForm extends Component {
  state = {
    query: '',
    questions: []
  }

  getInfo = () => {
    axios.get(`api/v1/questions?&prefix=${this.state.query}&limit=7`)
      .then(({ res }) => {
        this.setState({
          questions: res.data.data 
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
        <div class="search-header">
        <form id="search-form" class="search-form">
            <input type="text" class="header-search" placeholder="search ...." ref={input => this.search = input} onChange={this.handleInputChange}/>
            <p>{this.state.query}</p>
            <Suggestions results={this.state.results} />
        </form>
    </div>
    )
  }
}

export default SearchForm

