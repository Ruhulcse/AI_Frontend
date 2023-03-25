import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [categoryOpne, setCategoryOpen] = useState(true)
  useEffect ( ( )=>{
    if(window.innerWidth < 768){
      setCategoryOpen(false)
    }
    },[]);
  return (
    <div className='container'>
      <div className='text-end mt-2'>
      <Link to={'/login'}><p style={{display: categoryOpne ? 'none' : 'block'}}>My Account</p></Link>
      </div>
        <div className="header">
            <div className="header-text">
            <p>About Kaiser's List</p>
            <p className='business'>Business of the Week</p>
            <p className='commitment'>MY COMMITMENT TO A FREE AMERICA</p>
            </div>
        </div>
        <div className="header-city" style={{display: categoryOpne ? 'block' : 'none'}}>
            <h3 className='city'>Seattle - Tacoma</h3>
            <div className="city-link">
            <button type="button" class="btn city-link-btn">Seattle</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            <button type="button" class="btn city-link-btn">Primary</button>
            </div>
        </div>
    </div>
  )
}

export default Header