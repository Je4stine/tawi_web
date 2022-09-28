import React from 'react';
import './SensorCard.css';
import kind from '../assets/kind.png';
import thermometer from '../assets/thermometer.png';
import water from '../assets/water-drop-icon.png'

const Phsensor=({Name="Ph Sensor",
        PHvalue="Loading..",
        status="1"
})=> {
    
  return (
    <div className='mainCont' style={{marginBottom:50}}>
    <div className='SensorCard'>
    <div className='mainDiv'>
        <div className='head'>
            <div className='Indicators'>
            {
                status==="1"? (<span id='indicator1'></span>): <span id='indicator2'></span>
            }
            <span id='indicator2'></span>
           {
            status==="0"? <span id='indicator3'></span>:  <span id='indicator2'></span>
           }
            
            </div>

            <div>
            <div style={{color:"#fff"}}>{Name}</div>
            </div>
            <div className='Depth'> 
                <div style={{color:"#fff"}}> 10cm</div>
             </div>
        </div>
    </div>
        <div className='Lables'>
        <div style={{ alignItems:'center', justifyContent:'space-around'}} >
          
            <div style={{backgroundImage:`url(${kind})`, height:50, width:50,  backgroundRepeat:'no-repeat', backgroundSize:'contain',  marginLeft:20, marginTop:20}}>
            </div>
            
        </div>

        <div className='ParamNames'>
           <div> <div> PHvalue</div></div>
        </div>

        <div className='Holders'>
            <div className='Holder1'><div>{PHvalue}</div></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Phsensor;