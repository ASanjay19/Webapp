import './Header.css'
import React from 'react'
import Home from '../Home';
import About from '../About'
import Services from '../Services';

import { Link, Routes } from 'react-router-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
         <div className='menuMain'>

     <div className='leftMenu'>
     <h5>Pages</h5>&nbsp;&nbsp;
<a  href='https://www.facebook.com'>
<img className='fimg' src={require('../images/facebook1.png')}  />&nbsp;
</a>
<a  href='https://www.linkedin.com'>
<img className='fimg' src={require('../images/linkedin1.png')}  />&nbsp;
</a>
<a  href='https://www.twitter.com'>
<img className='fimg' src={require('../images/twitter1.png')}  />
</a>
</div>

<div className='rightMenu'>
 <a href=''>Home</a> 
 <a href=''>About</a> 
 <a href=''>Services</a> 
 <a href=''>Contact</a> 
 <a href=''>Cart</a> 
{/* <h5>Home</h5>&nbsp;
<h5>About</h5>&nbsp;
<h5>Services</h5>&nbsp;
<h5>Contact</h5>&nbsp;
<h5>Cart</h5>&nbsp; */}
<div style={{backgroundColor:'yellow',color:'black',height:30,justifyContent:'center',alignItems:'center',display:'flex'}}>
  <p style={{fontSize:14,paddingRight:5,paddingLeft:5}}>Order Today</p>
</div>

</div>
</div>
<div className='articalView'>    
 <h3 >{props.title}</h3>
 <div style={{backgroundColor:'yellow',width:100,justifyContent:'center'}}></div>
 <p style={{fontSize:15}}>There are many variations of passages of Lorem ipsum available,
   have suffered alteration in some form.</p>
 </div>
</div>
  )
}
