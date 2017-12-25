import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Footer'

class EventsAdd extends Component {
    constructor() {
      super();
        this.state = {
            title: '',
            address: '',
            event_date: '',
            event_time: '',
            genre: '',
            description: '',
            zip_code: '',
            fireRedirect: false,
          };
        this.eventFormChange = this.eventFormChange.bind(this);
        this.eventFormSubmit = this.eventFormSubmit.bind(this);
        this.handleGenreChoice =  this.handleGenreChoice.bind(this)
      }
      componentDidMount(){
        console.log(this.state)
        console.log('Loaded the component on the events form page')
      }

      eventFormChange(event) {
        event.preventDefault();
        if (event.target.name==="zip_code"&&isNaN(Number(event.target.value)))
          return 
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value});
      }
      handleGenreChoice(event) {
        event.preventDefault();
        this.setState({genre: event.target.value});
      }

      eventFormSubmit(event){
          event.preventDefault();

          let info = {
              title: this.state.title,
              address: this.state.address,
              zip_code: this.state.zip_code, //user zipcode insert here
              event_date: this.state.date,
              event_time: this.state.time,
              genre: this.state.genre,
              description: this.state.description,
              createdby: this.props.user.id||0
          }
          console.log(info);
          axios({
              method: 'POST',
              url: `http://localhost:3001/event`,
              data: {info}
            })
            .then(res => {
                console.log(res);
                this.setState({
                    fireRedirect: true,
                });
              })
            .catch(err => console.log('error in eventsform'));
            event.target.reset();
          }
        render(){
         return (
           
          <div>
            {/* <Header2 />   */}
           <div className="eventsAdd">
             <h1>Plan a party <u>tonight</u>!</h1>
            <form onSubmit={(event)=> {this.eventFormSubmit(event)}}>

             <label>
                 <h5>Title</h5>
                <input 
                 type="text"
                 placeholder="title"
                 name="title"
                 required
                 value={this.state.title}
                 onChange={(event)=> {this.eventFormChange(event)}}
                 />
            </label>
            <label>
                 <h5>Address</h5>
                 <input 
                 type="text"
                 placeholder="Place of Venue"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={(event)=> {this.eventFormChange(event)}}
                 />
            </label>
            <label>
                <h5>Zipcode</h5>
                <input 
                type="number"
                placeholder="zip code"
                name="zip_code"
                required
                value={this.state.zip_code}
                onChange={(event) => {this.eventFormChange(event)}}
                />
            </label>
            <label>
                <h5>Date</h5>
                <input 
                type="date"
                name="date"
                min="2017-09-21" 
                max="2050-01-01"
                required
                //value={this.state.event_date}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label>
            <label>
                <h5>Time</h5>
                <input type="time"
                name="time" 
                //pattern="[0-9]{2}:[0-9]{2}" //https://stackoverflow.com/questions/19670943/html-regex-pattern-first-digit-1-9-second-digit-0-9
                required
                //value={this.state.event_time}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label>
            <label>
                <h5>Genre</h5>
                <select className="event-form" value={this.genre} onChange={this.handleGenreChoice}>
                <option value="" disabled selected>SELECT A GENRE</option>
                <option value="1">Rock</option>
                <option value="2">Alternative</option>
                <option value="3">RnB</option>
                <option value="4">Hip Hop</option>
                <option value="5">Pop</option>
                <option value="6">Country</option>
                <option value="7">EDM</option>
                <option value="8">Christian/Gospel</option>
                <option value="9">Seasonal</option>
                <option value="10">Jazz</option>
                <option value="11">Classical</option>
                <option value="12">Heavy Metal</option>
                <option value="13">Blues</option>
                <option value="14">Oldies</option>
                <option value="15">Folk</option>
                <option value="16">Soul</option>
                <option value="17">Punk Rock</option>
                <option value="18">Grunge</option>
                <option value="19">Reggae</option>
                <option value="20">Industrial</option>
                <option value="21">Opera</option>
                <option value="22">Bluegrass</option>
                <option value="23">Disco</option>
              </select>
            </label>
            <label>
                <h5>Description</h5>
                <input 
                type="text"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label>

            <input className="submit" type="submit" value="Submit!"/>
            
            </form>

            {this.state.fireRedirect
             ? <Redirect push to={`/List`} />
             : ''}
             <Link to={`/List`}>Back to Event List</Link>
             </div>
             <Footer /> 
          </div>  
         );
        }
      }

export default EventsAdd;