import React from 'react';
import Logo from '../assets/logo.png';
import './Header.css'

const Header=({Name="Loading.."})=> {
  return (
    <div className='HeaderContainer'>
        <div style={{backgroundImage:`url(${Logo})`, height:200, width:150, backgroundRepeat:'no-repeat', position:'absolute', left:20, top:20}}>
        </div>
        <h1 id='Title'>
            TawiOT
        </h1>
      
    </div>
  )
}

export default Header;