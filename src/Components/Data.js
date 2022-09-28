import React from 'react';
import './Data.css';

const Data =({Name="Set Intervals", func}) =>{

  function func (){

  }
  return (
    <div className='DButton' onClick={func}>
        {Name}
    </div>
  )
}

export default Data;