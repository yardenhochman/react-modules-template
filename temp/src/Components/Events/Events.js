import React, { Component } from 'react';
//connecting to react routes
import { Link } from 'react-router-dom';
class Events extends Component {

    componentDidMount(){
        console.log(this.props.aEvent)
    }
    render(){
    return (
        <div className="eventshowlist">
            
            <h4>{this.props.event.title}</h4>
            <h5>{this.props.event.address}</h5>
            <p>{this.props.event.date}</p>
            <Link to={`/show/${this.props.event.id}`}>More Info
            </Link>
        </div>
        )
       }
    }
     

export default Events;