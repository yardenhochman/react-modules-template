import React, { Component } from 'react';

class GenreDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Rock'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      //submit must be redirected to DB
        handleSubmit(event) {
          event.preventDefault();
          this.props.updateMusic(this.state.value)
        }
      
        render() {
            return (
              <form onSubmit={this.handleSubmit}>
                <label>
                <h2>{this.props.name}</h2>
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="RnB">RnB</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Pop">Pop</option>
                    <option value="Country">Country</option>
                    <option value="EDM">EDM</option>
                    <option value="Christian/Gospel">Christian/Gospel</option>
                    <option value="Seasonal">Seasonal</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Heavy Metal">Heavy Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Oldies">Oldies</option>
                    <option value="Folk">Folk</option>
                    <option value="Soul">Soul</option>
                    <option value="Punk Rock">Punk Rock</option>
                    <option value="Grunge">Grunge</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Opera">Opera</option>
                    <option value="Bluegrass">Bluegrass</option>
                    <option value="Disco">Disco</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            );
          }
        }

export default GenreDown;

/* 
after failing to merge gary's work I'm resorting to 
old school copy paste. Credits go to Gary for this code
*/