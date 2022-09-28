import React, { useState, useEffect } from 'react';
import './Sensors.css';
import Header from './Header';
import SensorCard from './SensorCard';
import {useLocation} from 'react-router-dom';
import TDSCard from './TDS';
import Phsensor from './PHsensor';
import Button from './Button';
import LocationButton from './LocationButton';
import Data from './Data';

const Sensors=()=> {
  const[sensorData, setSensorData]=useState([]);

  const baseUrl = 'https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/';
  const location = useLocation()

  const partUrl = location.state.Name;
  console.log(partUrl);


  async function getdata2(){
    const response = await fetch ( baseUrl+partUrl,{
      headers :{
        'Cache-Control':'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires':'0'
      }
    });

    const responseData = await response.json();
    console.log(responseData)
    setSensorData(responseData);

  };


  useEffect(()=>{
      
    getdata2();
    const interval = setInterval(() => {
      
      getdata2();
    }, 10000);

    return ()=>clearInterval(interval);
},[]);



  return (
    <div className='SensorMain'>
        <Header/>
       
        {
          sensorData.Moisture == null? (<div></div>):  <SensorCard Name="Moisture sensor" moisture={sensorData.Moisture.moisture} ec={sensorData.Moisture.conductivity} temperature={sensorData.Moisture.temperature} status={sensorData.Moisture.status} />
        }
        {
          sensorData.TdsSensor == null? (<div></div>): <TDSCard conductivity={sensorData.TdsSensor.conductivity } tds={sensorData.TdsSensor.tds} temperature={sensorData.TdsSensor.temperature} status={sensorData.TdsSensor.status}/>
        }
        {
          sensorData.PhTramsmitter== null ? (<div></div>): <Phsensor PHvalue={sensorData.PhTramsmitter.phValue} status={sensorData.PhTramsmitter.status}/>
        }

        <LocationButton/>
        <Button Name='View Data'/>
        <Data/>
    
    </div>
  ) 
}

export default Sensors;