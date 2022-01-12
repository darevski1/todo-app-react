import React, {useState, useEffect} from 'react';
import "./profile.css"
import { VscChecklist, VscArchive, VscNote, VscAdd, VscEdit, VscChromeClose, VscRecord, VscHeart } from "react-icons/vsc";
import moment from 'moment';
import styled from 'styled-components'
import { AiTwotoneHeart } from "react-icons/ai";

const TabOne = ({tabtoogle, tabId}) => {
    const user_id = 1;
    const [fetchAll, setFetchAll] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const BASE_URL = `http://127.0.0.1:8000/api/get-by-user-id/${user_id}`;

    const fetchData = async () => {
            try {
                setIsloading(false)
                const url = BASE_URL;      
                const response = await fetch(url)
                const data = await response.json();
                setFetchAll(data)
                console.log(fetchAll)
            } 
            catch (error) {
                console.log(error)           
            } 
            finally{
                setIsloading(false)
            }
        }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className={tabtoogle === tabId ? "row__block active_content inner" : "row__block"}>
            <ul>
                {isLoading ? "Loading" : fetchAll.map(item => {
                    return (
                    <li key={item.id}>
                    <div className='task__list-da'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div>
                                <p className='date'><b>Created:</b> {moment((item.created_at)).format("DD.MM.YYYY")}</p>

                            </div>
                    </div>
                    <div className='btn__group_r'>

                        {item.status === 0 
                            ? <Icons><VscHeart/> </Icons> 
                            : <IconFav><AiTwotoneHeart/></IconFav>
                        }
                    </div>
                    </li>
                    )
                })
                    
                }         
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
`;
const IconFav = styled.svg `
    width: 17px;
    padding: 0;
    height: 17px;
    margin-right: 7px;
    color:#F7725E;
`

