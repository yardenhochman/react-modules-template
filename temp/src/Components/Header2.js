import React, {Component} from 'react';

import { Link , Redirect} from 'react-router-dom';

import axios from 'axios';

class Header2 extends Component {
  
  constructor(){
    super();
    this.state = {
      user: {},
      dataLoaded: false,
    }
    this.renderAccountLink = this.renderAccountLink.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  logOut() {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/auth/logout'
      })
      .then ((res)=>{
        if (res.data.loggedOut) {
          this.props.loggedOut();
          <Redirect push to={'/'} />
        }
      })
    }
  

  componentDidMount(){
      this.setState({
        user: this.props.user,
        dataLoaded: true
      })
  }

  logOut() {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/auth/logout'
    })
    .then ((res)=>{
      if (res.data.loggedOut) {
        this.props.loggedOut();
        <Redirect push to={'/'} />
      }
    })
  }

  renderAccountLink(){
    return(
      <Link to={`/profile/${this.props.user.id}`} className="nav-button">Account </Link> 
    )
  }

  render(){
    return (
      <div className="nav">

        <div className="lock-up">
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png" alt=""/>
          <Link to={`/`}> <h4>soundland</h4> </Link>
        </div>

        <div className="nav-buttons-align">
          {this.state.dataLoaded ? this.renderAccountLink() : " " }
          <Link onClick={this.logOut} to={"/"} className="nav-button">Log Out</Link>
          <Link to={"/list"} className="nav-button">Events</Link>
          </div>


      </div>
    )
  }
}

export default Header2;