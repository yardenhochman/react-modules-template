import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import Header from '../Header2';
//import Footer from '../Footer';
import axios from 'axios';

class EventsShow extends Component {
    constructor() {
      super();
        this.state = {
            event: null,
            eventApiDataLoaded: false,
            fireRedirect: false,
          };
        this.deleteEvent = this.deleteEvent.bind(this);
        this.renderEventOrLoad = this.renderEventOrLoad.bind(this)
      }

      componentDidMount() { 
        let id =this.props.match.params.id
          axios({
              method:'POST',
              url: `http://localhost:3001/event/${this.props.match.params.id}`,
              data: {id} 
          })
          .then(res => {
              console.log(res)
              this.setState({
                event: res.data.data,
                eventApiDataLoaded: true,
                })
              }).catch(err => console.log(err));
            }

      deleteEvent(){
        let id =this.props.match.params.id
        axios({
            method:'DELETE',
            url: `http://localhost:3001/event/${this.props.match.params.id}`,
            data: {id} 
        })
        .then(() => {
            this.setState({
            fireRedirect: true,  
            });
        }).catch(err => {
            console.log(err);
        });
    }

        renderEventOrLoad(data){
            if(this.state.eventApiDataLoaded) {
            return(
             <div className="eventinside">
              <h4>{this.state.event.title}</h4>
              <h5>{this.state.event.address}</h5>
              <p>{this.state.event.event_date}</p>
              <p>{this.state.event.event_time}</p>
              <p>{this.state.event.description} </p>
              <Link to={`/edit/${this.props.match.params.id}`} params ={{id: this.props.match.params.id}} >Edit Event
              </Link>
              <button className="delete" onClick={this.deleteEvent} >Delete Event</button>
              {this.state.fireRedirect
                ? <Redirect push to="/list" />
                : ''}
            </div>
            )
           } else return <p className="eventloading">Loading Events</p>
        }

        render(){
            return (
                <div className="eventshow"> 
                    {this.state.eventApiDataLoaded ? this.renderEventOrLoad() : " "}
                </div>
            )
          }
        }

        export default EventsShow;