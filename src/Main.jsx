import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Askquestion from './Askquestion';
import Home from './Home';
import Register from './Register';
import Login from './Login';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/askquestion' component={Askquestion}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
      </div>
    )
  }
}
