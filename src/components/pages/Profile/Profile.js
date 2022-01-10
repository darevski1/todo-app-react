import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { VscChecklist, VscArchive, VscNote, VscAdd, VscEdit, VscChromeClose, VscRecord, VscHeart } from "react-icons/vsc";
import "./profile.css"
import styled from 'styled-components'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import moment from 'moment';
import TabOne from './Tabs/TabOne';
import TabTwo from './Tabs/TabTwo';
import TabThree from './Tabs/TabThree';



const Profile = () => {
    
    const [modal, setModal] = useState(false);
    const [tabToggle, setTabToggle] = useState(1);

    const setActive = (index) => {
        setTabToggle(index)
    }
    return (
        <div>
            <div className='profile__container'>
                <div className='side__nav-container'>
                    <div className='heading__container'>
                        <button className='btn btn-outline-s' onClick={ () => setModal(true)}> <VscAdd/>   Create Todo</button>
                    </div>
                    <ul>
                        <li>
                            <VscArchive />
                            <Link to="" className={tabToggle === 1 ? "active_tab" : ""} onClick={()=>setActive(1) }>Home</Link>
                        </li>
                        <li>
                            <VscChecklist />
                            <Link to="" className={tabToggle === 2 ? "active_tab" : ""} onClick={()=>setActive(2) }>Active Task</Link>
                        </li>
                        <li>
                            <VscNote />
                            <Link to="" className={tabToggle === 3 ? "active_tab" : ""} onClick={()=>setActive(3) }>Task List</Link>
                        </li>
                    </ul>
                </div>
             
                    <TabOne tabtoogle = {tabToggle} tabId={1}/>
                    <TabTwo tabtoogle = {tabToggle} tabId={2}/>
                    <TabThree tabtoogle = {tabToggle} tabId={3}/>
              
                </div>
            </div>
        
        
       
    )
}

export default Profile;
 
 const Icons = styled.svg `
    width: 17px;
    padding: 0;
    height: 17px;
    margin-right: 7px;
    color:#F7725E;
 `