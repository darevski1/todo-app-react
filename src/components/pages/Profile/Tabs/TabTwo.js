import React, {useState, useEffect} from 'react';
import "./profile.css"
import { VscChecklist, VscArchive, VscNote, VscAdd, VscEdit, VscChromeClose, VscRecord, VscHeart } from "react-icons/vsc";
import moment from 'moment';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

const TabOne = ({tabtoogle, tabId}) => {
    const id = 1;
    const URL = `http://127.0.0.1:8000/api/get-status/0/user/${id}`;
    const [activeTodo, setActiveTodo] = useState([]);
    const [isLoadingActive, setIsLoadingActive] = useState(false)
  
    const fetchActive = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json();
            setActiveTodo(data)
            setIsLoadingActive(false);
            console.log(activeTodo);
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchActive();
    }, [])


    const deleteTodo = async (id) => {
        const DELETE_URL = `http://127.0.0.1:8000/api/delete/${id}`
        const response = await fetch(DELETE_URL, { method: 'DELETE' });

        response.status === 200
        ? setActiveTodo(activeTodo.filter((item) => item.id !== id))
        : alert('Error Deleting This Task')

    }
    const [edit, SetEdit] = useState(true)

    const EditTodo = (id) => {
        SetEdit(false)
    }

    const closeTodo = async (id) => {
    
        const CLOSE_URL = `http://127.0.0.1:8000/api/closeTodo/${id}`
        const response = await fetch(CLOSE_URL, {method: 'PATCH'});

        response.status === 200
        ? setActiveTodo(activeTodo.filter((item) => item.id !== id))
        : alert('Error Deleting This Task')
    }

    return (
        <div className={tabtoogle === tabId ? "row__block active_content inner" : "row__block"}>
                  <ul>
                    {isLoadingActive ? "Loading" : activeTodo.map(item => {
                        return (
            <FlipMove>

                        <li key={item.id}>
                            <div className={edit === true ? 'task__list-da' : "hider"} >
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                <div>
                                    <p className='date'><b>Created:</b> {moment((item.created_at)).format("DD.MM.YYYY")}</p>
                                </div>
                               
                            </div>
                            <div className={edit === false ? 'edit__todos' : 'hider'}>
                                    edit
                                </div>
                        
                            <div className='btn__group_r'>
                                <Link to="" onClick={() => EditTodo(item.id)} >
                                    <Icons><VscEdit/> </Icons>
                                    Edit
                                </Link>
                                <Link to="" onClick={() => closeTodo(item.id)} >
                                    <Icons><VscRecord /> </Icons>
                                        Done
                                </Link>
                                <Link to="" onClick={() => deleteTodo(item.id)}>
                                    <Icons><VscChromeClose/></Icons>
                                        Delete
                                </Link>
                            </div>
                            </li>
                 </FlipMove>

                        )
                    })}
                 </ul>

        </div>
    )
}

export default TabOne;
const Icons = styled.svg `
width: 17px;
padding: 0;
height: 17px;
margin-right: 7px;
color:#F7725E;
`

const customEnterAnimation = {
    from: { transform: 'scale(0.5, 1)' },
    to:   { transform: 'scale(1, 1)' }
  };