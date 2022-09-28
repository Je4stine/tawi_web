import React, {useState} from 'react';
import Background from '../../assets/background.jpg';
import Logo from '../../assets/logo.png'
import './Login.css';
import { Auth } from 'aws-amplify';
import {  useNavigate } from "react-router-dom";

function Login() {
    const navigate= useNavigate()
    const [userData, setUserData]=useState({});
    const [user, setUser]=useState('')
    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserData(values=>({...values, [name]:value}))
    }



    async function signIn(event) {
        event.preventDefault();
        const { username, password } = userData;
        try {
           const user = await Auth.signIn(username, password);
            navigate("/DashBoard")
        } 
        catch (e) {
          alert(e)
        }
    }

     

  return (
    <>
    <div style={{backgroundImage:`url(${Background})`, display:'flex', flex:1, height:'100vh',backgroundRepeat:'no-repeat', backgroundSize:'cover', justifyContent:'center', alignItems:'center'}}>
        <div style={{backgroundImage:`url(${Logo})`, height:200, width:150, backgroundRepeat:'no-repeat',position:'absolute', top:20}}>
        </div>
        <h1 style={{position:'absolute', top:100}}>Welcome Back</h1>
        <div className='FormBox'>
            <form onSubmit={signIn}>
                <label className='formLable'> Email
                    <input type="text" name='username' value={userData.username} onChange={handleChange} className='formInput'/>
                </label>
                <label> Password
                    <input type="password" name='password' value={userData.password } onChange={handleChange}/>
                </label>
                <input type='submit' className='Submit'/>
            </form>
        </div>
        <p1 className="Forgot">
            Forgot Password ? Reset
        </p1>
    </div>
    </>
  )
}

export default Login;