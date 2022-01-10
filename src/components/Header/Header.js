import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./header.css"

const Header = () => {
    return (
        <>
        <Navbar/>
        <div className='main__header-section'>
            <div className="container">
                <div>
                    <h1>Stay Organized <br />Stay Creative With Our <span className='todo_title'>TodoAPP</span></h1>
                    <p>Join millions of people to capture ideas, <br />
                        organize life, and do something creative everyday.
                    </p>
                    
                </div>
                <img src='./../../assets/main.svg' alt="main-img"/>
            </div>
        </div>
        
        <div className='aboutus__section'>
            <div className="container">
                <h2>Sync across multiple platforms</h2>
                <p>30+ features work seamlessly across 10+ platforms. <br/>Getting things done has never been this easy.</p>
                <img src='./../../assets/second.svg' alt="section-img"/>
            </div>
        </div>
        <div className='footer__block'>
            <div className='container'>
                <div className='block__sm'>
                <img src='./../../assets/logo.svg' alt="section-img"/>

                </div>
                <div className='block__sm'>
                    <ul>
                        <p>Features</p>
                        <li><a href="">How It Works</a></li>
                        <li><a href="">For Teams</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>
                <div className='block__sm'>
                    <ul>
                        <p>Resources</p>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Refer a friend</a></li>
                        <li><a href="">Developer API</a></li>
                        <li><a href="">Productivity Methods</a></li>
                    </ul>
                </div>
                <div className='block__sm'>
                    <ul>
                        <p>Company</p>
                        <li><a href="">About Us</a></li>
                        <li><a href="">We are hiring!</a></li>
                    </ul>
                </div>
                 
            </div>
        </div>
        
        </>
    );
}

export default Header;