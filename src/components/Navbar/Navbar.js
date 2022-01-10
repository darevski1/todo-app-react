import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    
    return (
        <>
          <div className='main__navbar'>
             <div className="container">
                <div className='logo__container'>
                    <img src='./../../assets/logo.svg' alt="logo"/>
                </div>
                <div className='navbar__lists'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                    </ul>
                </div>
                <div className='navbar__btn-group'>
                        <Link to='/profile' className='btn btn-sign-up-outline'>darevski</Link> 
                        <Link to='/sign-in' className='btn btn-sign-up-outline'>Sign In</Link> 
                        <Link to='/sign-up' className='btn btn-sign'>Sign Up</Link> 
                </div>
             </div>   
           </div>  
        </>
    )
}

export default Navbar;