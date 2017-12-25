import React from 'react';

const MapDisplay = (props) => {
  const { mainLocation } = props
  console.log (`map display component is receiving main location: `+mainLocation)
  return (
    <div>map will be here</div>
  )
}


export default MapDisplay;