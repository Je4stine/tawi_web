import React from 'react';
import './Device.css';
import {  useNavigate } from "react-router-dom";

const Device =({Name="Loading..."}) =>{
    const navigate = useNavigate()


    const handleClick =async()=>{
        console.log('Clicked');
        navigate('/Sensors', {state:{Name}});
    }
  return (
    <div className='Device1' onClick={()=>{handleClick()}}>
        <div className='deviceContent'>
            
            <span id='indicator1'></span>
            <span id='indicator2'></span>
            <span id='indicator3'></span>
            <div className='nodeId'>
                <p1> Node ID:</p1>
            </div>
            <div className='actualId'>
                <p1>{Name}</p1>
            </div>
        </div> 
    </div>
  )
}

export default Device;