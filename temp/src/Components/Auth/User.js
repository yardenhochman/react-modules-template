import React, {Component} from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            user: {},
            ready: false,
            userEvents: null,
            eventsAttending: null,
            propsLoaded: false
        }
        this.userEventData = this.userEventData.bind(this);
        this.renderUserEvents = this.renderUserEvents.bind(this)
        this.renderUserAttendingEvents = this.renderUserAttendingEvents.bind(this)
    }

    componentDidMount(){
        this.setState({
            user: this.props.user,
            propsLoaded: true
        })   
    }   
    
    userEventData(){
        let id = this.props.user.id;
        axios({
            method: 'POST',
            url: `http://localhost:3001/profile/${this.props.user.id}`,
            data: { id }
        })
        .then(rez =>{
            this.setState({
                userEvents: rez.data.data,
                eventsAttending: rez.data.eventsAttending,
                ready: true,
                propsLoaded: false
            })
        }).catch(err =>{
            console.log(err)
        })
    }

    renderUserEvents(data){
        return data.map((event, index) =>{
            return(
                <div>
                    <h3 key={`${index}`}>
                        {event.title}
                    </h3>
                    <p>{event.address}</p>
                    <p>{event.event_date}</p>
                    <p>{event.event_time}</p>
                    <p>{event.genre}</p>
                    <p>{event.description}</p>
                    <p>Created by: {event.createdby}</p>
                    <p>{event.zip_code}</p>
                </div>
            )
        })
    }

    renderUserAttendingEvents(data){
        return data.map((event, index) =>{
            return(
                <div>
                    <h3 key={`${index}`}>
                        {event.title}
                    </h3>
                    <p>{event.address}</p>
                    <p>{event.event_date}</p>
                    <p>{event.event_time}</p>
                    <p>{event.genre}</p>
                    <p>{event.description}</p>
                    <p>Created by: {event.createdby}</p>
                    <p>{event.zip_code}</p>
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>
                    welcome {this.state.propsLoaded ? this.state.user.name : ''}
                </h1>
                <div>
                    <h2>
                    Your created events
                    </h2>
                    {this.state.propsLoaded ? this.userEventData() : " "}
                    {this.state.ready?this.renderUserEvents(this.state.userEvents):''}
                    <h2>
                    Your attending events
                    </h2>
                    {this.state.ready?this.renderUserAttendingEvents(this.state.eventsAttending):''}
                </div>
            </div>
        )
    }
}
export default Profile;