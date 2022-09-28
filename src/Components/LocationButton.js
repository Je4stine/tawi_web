import React from 'react';
import './Location.css';

const LocationButton=({Name="View Node Location"})=> {
  return (
    <div className='LButton'>
     {Name}
    </div>
  )
}

export default LocationButton;