import React, {useState, useContext} from 'react';
import Background from '../../assets/background.jpg';
import Logo from '../../assets/logo.png'
import './Login.css';
import {  useNavigate } from "react-router-dom";
import { MutatingDots } from  'react-loader-spinner';
import * as mutations from '../../graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {useLocation} from 'react-router-dom';
import { AppContext } from '../../AppContext';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function Rename() {


    const navigate= useNavigate();
    const location = useLocation();
    const [userData, setUserData]=useState({});
    const [loading, setLoading]=useState(false);
    const {currentCode, setCurrentCode}=useContext(AppContext);

  
    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserData(values=>({...values, [name]:value}))
    };


    async function signIn (event){
      event.preventDefault();
      const qrcode = currentCode;
      const {alias} = userData;
      try{
        await API.graphql(
          graphqlOperation(mutations.updateAppData ,{
            input:{qrcode:qrcode, alias: alias}
          })
        );
        navigate(-1);
        console.log(qrcode);
          
      }catch(err){
        console.log(err)
      }
    }



    // async function signIn(event) {
    //     event.preventDefault();
    //    console.log("Rename yaaaay")
    // }

     

  return (
    <>
    <div style={{backgroundImage:`url(${Background})`, display:'flex', flex:1, height:'100vh',backgroundRepeat:'no-repeat', backgroundSize:'cover', justifyContent:'center', alignItems:'center'}}>
        <div style={{backgroundImage:`url(${Logo})`, height:200, width:150, backgroundRepeat:'no-repeat',position:'absolute', top:20}}>
        </div>
        <h1 style={{position:'absolute', top:100}}>Device Rename</h1>
        <div className='FormBox'>
            <form onSubmit={signIn}>
                <label className='formLable'> Enter New A name
                    <input type="text" name='alias' value={userData.alias} onChange={handleChange} className='formInput'/>
                </label>
                <input type='submit' className='Submit'/>
            </form>

            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:50}}>
        {
            loading? 
            <MutatingDots 
            height="100"
            width="100"
            color="green"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
           /> :<div></div>
        }
        </div>
        </div>
    
        
    </div>
    </>
  )
}

export default Rename;