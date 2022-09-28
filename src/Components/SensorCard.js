import React from 'react';
import './SensorCard.css';
import kind from '../assets/kind.png';
import thermometer from '../assets/thermometer.png';
import water from '../assets/water-drop-icon.png'

const SensorCard=({Name="",
    moisture="Loading..",
    ec="Loading..",
    temperature= "Loading..",
    status="1"
})=> {
    
  return (
    <div className='mainCont'>
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
            <div style={{backgroundImage:`url(${water})`, height:50, width:50,  backgroundRepeat:'no-repeat', backgroundSize:'contain', marginLeft:10,marginBottom:20, marginTop:30}}>
            </div>
            <div style={{backgroundImage:`url(${kind})`, height:50, width:50,  backgroundRepeat:'no-repeat', backgroundSize:'contain',   marginBottom:20}}>
            </div>
            <div style={{backgroundImage:`url(${thermometer})`, height:50, width:50,  backgroundRepeat:'no-repeat', backgroundSize:'contain', marginBottom:20}}>
            </div>
        </div>

        <div className='ParamNames'>
           <div> <div> Moisture</div></div>
           <div> <div> Ec</div></div>
           <div> <div> Temeparature</div></div>
        </div>

        <div className='Holders'>
            <div className='Holder1'><div>{moisture}</div></div>
            <div className='Holder2'> <div>{ec}</div></div>
            <div className='Holder3'> <div>{temperature}</div></div>
        </div>

        <div className='ParamNames'>
           <div> <div> %</div></div>
           <div> <div> Us</div></div>
           <div> <div> C</div></div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SensorCard;