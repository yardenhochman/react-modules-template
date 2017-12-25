/* 
this file isn't used at this time and was superceded by genreSelect. 
I'm keeping it here for reference in case we need it. 
This file is intended for API calling music information
*/


import React, { Component } from 'react';

class Music extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }
  handleChange(event) {
    event.preventDefault();
    let input = event.target.value;
    this.setState({searchTerm: input})
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchTerm =! '')
        this.getMusic()
  }
  getMusic() {
    fetch(``/* music api and key */)
    .then ( response => response.json())
    .then ( (jsonRes) => {
        let musicalTaste = {
            /* place relevent data into object */
        }
        this.props.updateMusic(musicalTaste);
    }).catch( error => console.log(error))
  }

  render() {
    <div className='Music Search'>
        <h2>{this.props.name}</h2>
        <input type="text" onChange = {this.handleChange} value = {this.state.searchTerm}></input>
        <button onClick = {this.handleSubmit} >Submit</button>
      </div>
  }

}

export default Music;
