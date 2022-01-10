import React from 'react';
import Navbar from './components/Navbar/Navbar'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './components/Home/Home';
import Features from './components/pages/Features/Features';
import Pricing from './components/pages/Pricing/Pricing';
import SignIn from './components/pages/SignIn/SingIn';
import SignUp from './components/pages/SignUp/SignUp';
import Profile from './components/pages/Profile/Profile';

  
const App = () => {
    return (
        <div>
           <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
export default App
