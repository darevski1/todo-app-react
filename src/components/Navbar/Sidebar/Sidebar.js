import React, {useState} from 'react';

import { VscChecklist, VscArchive, VscNote, VscAdd, VscEdit, VscChromeClose, VscRecord, VscHeart } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const [tabToggle, setTabToggle] = useState(1);
    const [modal, setModal] = useState(false);
    
    const setActive = (index) => {
        setTabToggle(index)
    }

    return (
        <div>
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
        </div>
    )
}

export default Sidebar;