import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { VscChecklist, VscArchive, VscNote, VscAdd, VscEdit, VscChromeClose, VscRecord, VscHeart } from "react-icons/vsc";
import "./profile.css"
import styled from 'styled-components'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import moment from 'moment';



const Profile = () => {
    // Delete Todo

    // useEffect(() => {
    //     // DELETE request using fetch with set headers
    //     const requestOptions = {
    //         method: 'DELETE',
    //         headers: { 
    //             'Authorization': 'Bearer my-token',
    //             'My-Custom-Header': 'foobar'
    //         }
    //     };
    //     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
    //         .then(() => setStatus('Delete successful'));
    // }, []);

    const deleteTodo = async (id) => {
        

        const DELETE_URL = `http://127.0.0.1:8000/api/delete/${id}`
        const response = await fetch(DELETE_URL, { method: 'DELETE' });
        return ('Delete successful');


        setFetchAll()
    }
  

    // Create Todo
    const POST_URL = "http://127.0.0.1:8000/api/create-new"; 
    const postTodo = async (val) => {
        fetch(POST_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
             body: JSON.stringify(val)
          })
            .then(res => res.json())
            .then(data => {
            })
            .catch(error => {
            // enter your logic for when there is an error (ex. error toast)
             console.log(error)
            })  
    };

 
    const number = 1;

    const [tabToggle, setTabToggle] = useState(1);
    const [modal, setModal] = useState(false);
    
    const schema = Yup.object({
        title: Yup.string()
        .required('The name is Required'),
        
        description: Yup.string()
        .min(5, 'The min is 5 characters')
        .required('The name is Required'),
        user_id: Yup.string()
        .required('The name is Required'),
    })
    const {handleBlur, handleSubmit, handleChange, touched, values, errors} = useFormik({
        initialValues:{
            title:'',
            description:'',
            user_id: number

        },
        validationSchema:schema,

        onSubmit: values => {
            postTodo(values)
        },
    })
    const setActive = (index) => {
        setTabToggle(index)
    }
    useEffect(() => {
        postTodo();
    }, [])

    // Fetch all posts
    const user_id = 1;
    const [fetchAll, setFetchAll] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const BASE_URL = `http://127.0.0.1:8000/api/get-by-user-id/${user_id}`;

    const fetchData = async () => {
            try {
                setIsloading(true)
                const url = BASE_URL;      
                const response = await fetch(url)
                const data = await response.json();
                setFetchAll(data)
         
            } 
            catch (error) {
                console.log(error)           
            } 
            finally{
                console.log(fetchAll)

                setIsloading(false)
            }
        }
    useEffect(() => {
        fetchData();
    }, [])


    // Fetch active post

    const URL = "http://127.0.0.1:8000/api/get-by-user-id/1";
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

// Validation on edit
 
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
                <div className={ modal === true ? "showme modal" : "hideme "}>
                    modal
                </div>
                <div className='profile__section-container'>
                    <div className={tabToggle === 1 ? "row__block active_content" : "row__block"}>
                        <h2>Create todo</h2>
                        <div className='divider'></div>
                        <div className='form__creattor '>
                            <form onSubmit={handleSubmit}>
                                <input
                                    id="title"
                                    name='title'
                                    className='form-input'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                {touched.title && errors.title ? (
                                    <div className='error-form'>{errors.title}</div>
                                ) : null}   
                                <div className='form__group'>
                                    <textarea 
                                        id="description"
                                        name='description'
                                        onBlur={handleBlur}
                                        value={values.description}
                                        onChange={handleChange}
                                        className='form-input' >
                                    </textarea>
                                    {touched.description && errors.description ? (
                                    <div className='error-form'>{errors.description}</div>
                                ) : null}
                                </div>
                            <button type="submit" className="btn btn-outline-s mt-50"> Create Todo</button>
                            </form>
                        </div>

                    </div>
                    <div className={tabToggle === 2 ? "row__block active_content" : "row__block"}>

                        <ul>
                            {isLoadingActive ? "Loading" : activeTodo.map(item => {
                               return (
                                        <li key={item.id}>
                                            
                                            <div className='task__list-da'>
                                                 <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <div>
                                                    <p className='date'><b>Created:</b> {moment((item.created_at)).format("DD.MM.YYYY")}</p>
                                                </div>
                                            </div>
                                            <div className='form__creattor hideme'>
                                                <form onSubmit={handleSubmit}>
                                                    <div className='form__group'>
                                                        <input
                                                            id='title'
                                                            name='title'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.title}
                                                        />
                                                        <textarea 
                                                            id="todo"
                                                            name='todo'
                                                            onBlur={handleBlur}
                                                            value={values.description}
                                                            onChange={handleChange}
                                                            className='form-input' >
                                                        </textarea>
                                                        {touched.description && errors.description ? (
                                                        <div className='error-form'>{errors.description}</div>
                                                    ) : null}
                                                    </div>
                                            <button type="submit" className="btn btn-outline-s mt-50"> Create Todo</button>
                                                </form>
                                            </div>
                                            <div className='btn__group_r'>
                                                <Link to="" >
                                                    <Icons><VscEdit/> </Icons>
                                                    Edit
                                                </Link>
                                                <Link to="" >
                                                    <Icons><VscRecord /> </Icons>
                                                        Done
                                                </Link>
                                                <Link to="" onClick={() => deleteTodo(item.id)}>
                                                    <Icons><VscChromeClose/></Icons>
                                                        Delete
                                                </Link>
                                            </div>
                                            </li>
                                )
                            })}
            
                             
                        </ul>


                    </div>
                    <div className={tabToggle === 3 ? "row__block active_content" : "row__block"}>
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
                                <Icons><VscHeart/> </Icons>
                                Closed
                            </div>
                         </li>
                           )
                        })
                            
                        }

                     
                             
                        </ul>

                    </div>
                </div>
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