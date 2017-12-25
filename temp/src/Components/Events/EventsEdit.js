import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header2';
import Footer from '../Footer';
import axios from 'axios';

class EventsEdit extends Component {
    constructor() {
        super();
          this.state = {
              event: {},
              fireRedirect: false,
            };
          this.handleInputChange = this.handleInputChange.bind(this);
          this.eventFormSubmit = this.eventFormSubmit.bind(this);
        }

  componentDidMount() {
    let id = this.props.id
    console.log(this.props.params)
    debugger
    axios({ 
        method:'POST',
        url: `http://localhost:3001/event/${this.props.id}`,
        data: {id} 
      })
      .then(res => {
        console.log(res)
        this.setState({
          event: res.data.data,
          eventApiDataLoaded: true,
          })
        }).catch(err => console.log(err))
    }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  eventFormSubmit(event){
    event.preventDefault();
  axios
    .put(`http://localhost:3001/event/${this.props.match.params.id}`, {
        title: this.state.title,
        address: this.state.address,
        event_date: this.state.event_date, 
        event_time: this.state.event_time,
        genre: this.state.genre,
        description: this.state.description,
        zip_code: this.state.zip_code,
      })
      .then(res => {
          console.log(res);
          this.setState({
              newId: res.data.data.id,
              fireRedirect: true,
          });
        })
      .catch(err => console.log(err));
      event.target.reset();
    }

   render(){
         return (
          <div>
         
           <div className="eventEdit">
           <form onSubmit={(event)=> {this.eventFormSubmit(event)}}>
             <label>
                 <h5>Title</h5>
                <input 
                 type="text"
                 placeholder="title"
                 name="title"
                 required
                 value={this.state.title}
                 onChange={(event)=> {this.handleInputChange(event)}}
                 />
            </label><br/>
            <label>
                 <h5>Address</h5>
                 <input 
                 type="text"
                 placeholder="Address"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={(event)=> {this.handleInputChange(event)}}
                 />
            </label><br/>
            <label>
                <h5>Zip Code</h5>
                <input 
                type="number"
                placeholder="zip code"
                name="zip_code"
                pattern="[0-9]{5}"
                required
                value={this.state.zip_code}
                onChange={(event)=> {this.handleInputChange(event)}}
                />
            </label><br/>
            <label>
                <h5>Date</h5>
                <input 
                type="date"
                name="event_date"
                required
                value={this.state.event_date}
                onChange={(event)=> {this.handleInputChange(event)}}
                />
                <h5>Start Time</h5>
                <input type="time"
                name="event_time"
                pattern="[0-9]{2}:[0-9]{2}"
                required
                value={this.state.event_time}
                onChange={(event)=> {this.handleInputChange(event)}}
                />
            </label><br/>
            <label>
                <h5>Genre</h5>
                <input 
                type="text"
                placeholder="Genre"
                name="genre"
                value={this.state.genre}
                onChange={(event)=> {this.handleInputChange(event)}}
                />
            </label><br/>
            <label>
                <h5>Description</h5>
                <input 
                type="text"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <input type="submit" value="Submit!"/>
            </form>
            {this.state.fireRedirect
             ? <Redirect push to={`/EventsShow/${this.state.newId}`} />
             : ''}
          </div>  
          <Footer />
        </div> 
         );
        }
      }

export default EventsEdit;