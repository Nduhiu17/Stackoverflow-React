import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password:'',
            repeatpassword:'',
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
        <div>
        <div class="form-signin-r2">
        <div class="reg-title2">
        Please sign up
        </div>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input value={this.state.username} name="username" onChange={this.handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                    <small id="emailHelp" class="form-text text-muted"></small>
                    <label for="exampleInputEmail1">Email</label>
                    <input value={this.state.email} name="email" onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={this.state.password} name="password" onChange={this.handleChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Repeat password</label>
                    <input value={this.state.repeatpassword} name="repeatpassword" onChange={this.handleChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Repeat password"/>
                </div>
                <div class="form-check">
                    <small id="emailHelp" class="form-text text-muted">Already have an account?<NavLink to='/'>Sign in here</NavLink></small>
                </div>
                <input type="submit" class="btn btn-primary" value="Sign up"/>
            </form>
        </div>
        </div>
    </div>
    )
  }
}


