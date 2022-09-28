import React, { useState, useEffect, useContext} from 'react';
import './Sensors.css';
import './Data.css';
import './Location.css';
import './Button.css';
import Header from './Header';
import SensorCard from './SensorCard';
import {useLocation} from 'react-router-dom';
import TDSCard from './TDS';
import Phsensor from './PHsensor';
import CheckList from '../assets/PinClipart.com_menu-clip-art_5328945.png';
import {  useNavigate } from "react-router-dom";
import { AppContext } from '../AppContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Sensors= ()=>{
  const[sensorData, setSensorData]=useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen]= useState(false);
  const {currentCode, setCurrentCode}=useContext(AppContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const baseUrl = 'https://tawi-edge-device-realtime-data.s3.amazonaws.com/tawi-device/tawi_edge_device/';
  const location = useLocation()

  const partUrl = location.state.Name;
  console.log(partUrl);
  const aliasV = sensorData.SerialNumber;


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
    setCurrentCode(responseData.SerialNumber)

  };


  useEffect(()=>{
      
    getdata2();
    const interval = setInterval(() => {
      
      getdata2();
    }, 10000);

    return ()=>clearInterval(interval);
},[]);


async function handleClick (event){
  event.preventDefault();
  console.log("Renama yess");
  navigate("/Rename",{state:{aliasV}})
};

function openModal (){
  setIsOpen(true);
};


function closeModal (){
  setIsOpen(false);
};

  return (
    <div className='SensorMain'>
        <Header/>
        <div className='Rename' onClick={handleClick} >
          <div style={{backgroundImage:`url(${CheckList})`, width:50, height:60, backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
        </div>
        {/* <div className='sensorsn'>{partUrl}</div> */}
       
        {
          sensorData.Moisture == null? (<div></div>):  <SensorCard Name="Moisture sensor" moisture={sensorData.Moisture.moisture} ec={sensorData.Moisture.conductivity} temperature={sensorData.Moisture.temperature} status={sensorData.Moisture.status} />
        }
        {
          sensorData.TdsSensor == null? (<div></div>): <TDSCard conductivity={sensorData.TdsSensor.conductivity } tds={sensorData.TdsSensor.tds} temperature={sensorData.TdsSensor.temperature} status={sensorData.TdsSensor.status}/>
        }
        {
          sensorData.PhTramsmitter== null ? (<div></div>): <Phsensor PHvalue={sensorData.PhTramsmitter.phValue} status={sensorData.PhTramsmitter.status}/>
        }

      


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Time Interval</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Set Interval</Form.Label>
              <Form.Control
                type="email"
                placeholder="5 secs"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='DButton' onClick={handleShow}>
        Set Intervals
       </div>

       <div className='LButton'>
        View Node Location
      </div>
      <div className='Button'>
        View Data
      </div>

    
    </div>
  ) 
}

export default Sensors;