import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
    <div className="container">

    <div className='social'>
          <h3>Pages</h3>&nbsp;&nbsp;
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

    {/* Column1 */}
    <div className='col'>
      <h4 >Explore</h4>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Appointments</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact Us</a></li>   
    </div>

    {/* Column2 */}
    <div className='col'>
      <h4>Utility Pages</h4>
      <ui>
        <li><a href='#'>Start here</a></li>
        <li><a href='#'>Style guide</a></li>
        <li><a href='#'>404 not found</a></li>
        <li><a href='#'>Password protected</a></li>
        <li><a href='#'>License</a></li>
        <li><a href='#'>Changelog</a></li>
      </ui>
    </div>

    {/* Column3 */}
    <div className='col'>
      <h4>Keep in Touch</h4>
      {/* <ui >
        <li><b>Address :</b>24A Kingstorn St,Los Vegas NC 2802,USA.</li>
        <li><b>Mail :</b>support@doctors.com</li>
        <li><b>Phone :</b>(+22)133-4567-900</li>
      </ui> */}
      <p><b style={{color:'white'}}>Address: </b> 24A Kingstorn St,Los Vegas NC 2802,USA.</p>
      <p><b  style={{color:'white'}}>Mail: </b> support@doctors.com.</p>
      <p><b  style={{color:'white'}}>Phone: </b> (+22)133-4567-900</p>
    </div>

    </div>

    <div className='line'/>
        <div className='powerBy'>
          <p>
           Drafted by <b>Victorflow</b>-Powered by <b>Webflow</b>
          </p>
        </div>

    </div>

  )
}
