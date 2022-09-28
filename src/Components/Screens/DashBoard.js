import React,{useState, useEffect} from 'react';
import './DashBoard.css';
import Header from '../Header';
import Device from '../Device';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {Auth} from 'aws-amplify';


function DashBoard() {
  const [receivedData, setReceivedData]=useState([]);



  useEffect (()=>{

    async function fetchAllData(){
      const user = await Auth.currentAuthenticatedUser();
     
      try{
        const qrdata = await API.graphql(graphqlOperation(queries.listAppData,{
          filter:{
            createdBy: {contains:user.attributes.email}
          }
        }));
        setReceivedData(qrdata.data.listAppData.items);
        console.log(user.attributes.email);
        console.log(qrdata)
    
       
      }catch(err){
        console.log(err);
      }
    };


    fetchAllData();

    const interval = setInterval(() => {
          
      fetchAllData();
    }, 10000);

    return ()=>clearInterval(interval)
 
  },[]);


  return (
    <div className='DashBoard'>
      <Header/>
      {
        receivedData.map((item, index)=> <Device key={index} Name={item.qrcode}/>)
      }
    </div>
  )
}

export default DashBoard;