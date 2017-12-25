import React from 'react';

const automatic = () => {
  return
}

const Location = ({name , handleZipcodeInput , setLocation}) => 
      <div className='Please enter your zipcode'>
        <h2>{name}</h2>
        <input type="number" onChange = {handleZipcodeInput} value = {setLocation}></input>
        <button onClick = {automatic} >Use your current location</button>
      </div>

export default Location;
      /* coords: '' */

    /* this.automatic = this.automatic.bind(this)
    this.success = this.success.bind(this) */

  
 /*  success (position) {
    let coords = position.coords
    this.setState({coords:position.cords})
    console.log(this.state.coords)
  }
  automatic() { 
    //this function returns a variable which we will refer to as "position" for convenience. see success
    if (!navigator.geolocation)
      return
    const error = (err) => {console.log(err)}
    const options = () => {enableHighAccuracy: true}
    navigator.geolocation.getCurrentPosition(this.success, error, options);
    //the get currentposition function needs predefined success, error, options functions. see above functions
  } */



    

/*
orig
https://www.zipcodeapi.com/rest/${API_KEY}/info.json/${this.state.zipcode}/degrees
returns a list of close zip codes. see ending 
https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/radius.json/32131/5/km
returns information for zipcode
 https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/info.json/11233/degrees 

*/