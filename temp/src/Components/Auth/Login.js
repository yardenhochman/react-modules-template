import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password_digest: '',
      fireRedirect: false,
      user: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
      event.preventDefault();
      let data = {
        username: this.state.username,
        password: this.state.password_digest
      }
      axios({
        method: 'POST',
        url: 'http://localhost:3001/auth/login',
        data: data
      })
      .then(res => {
        console.log(res)
        this.props.userDataForState(res);
        if(res.data.auth){
          this.setState({
            user: res,
            fireRedirect: true
          })
        } else{
        alert('Inccorect username or password!')
        event.target.reset();
        }
        
      }).catch(err => console.log(err));
        
    } 
    


  render() {
    return(
      <div className="login-register">

        <div className="top">
          <img className="profile-icon" alt="radio"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"/>
          <h3>Login</h3>
        </div>

        <div className="form">
          <form onSubmit={(event)=> {this.handleFormSubmit(event)}}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={(event)=> {this.handleInputChange(event)}}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6" required 
              value={this.state.password_digest}
              onChange={(event)=> {this.handleInputChange(event)}}
            />
            <input className="submit"
              type="submit"
              value="Log In"
            />
          </form>
          {this.state.fireRedirect
          ? <Redirect push to={`/profile/${this.state.user.data.user.id}`} />
          : ''}
        </div>
        <p><Link to={`/auth/register`}>Don't have an account? Register here!</Link></p>
      </div>
    )
  }
}


export default Login;