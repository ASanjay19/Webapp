import './Card.css'
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Colors } from '../utils/constants';

export default function Card() {
  return (
    <div className='center-images'>
        <img src={require('../images/Biryani.jpg')}></img>
        <h3 style={{color:Colors.primary}}>Significant reading has more info number</h3>
        <p>The point of using Lorem Opsumhiter of that using making it look like others readable willget end.</p>
        <div className='readmore'>
            <Link to="/about">
            <a >Read more</a>
            </Link> 
            <p>Author - 23.05.2022</p>
        </div>
      </div>
  )
}
