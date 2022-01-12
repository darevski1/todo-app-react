import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import "./profile.css"

const TabOne = ({tabtoogle, tabId}) => {
// Create Todo


        const [tasks, setTasks] = useState([])
        const POST_URL = "http://127.0.0.1:8000/api/create-new"; 

        const addTask = async (task) => {
            const res = await fetch(POST_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
            })

            const data = await res.json()

            setTasks([...tasks, data])

        }

        const number = 1;
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
                addTask(values)
            },
        })
 
    return (
        <div className={tabtoogle === tabId ? "row__block active_content" : "row__block"}>
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

                            {tasks.map(task => {
                                return (
                                    <div key={task.id}>{task.title}</div>
                                )
                            })}
                        </div>
        </div>
    )
}

export default TabOne;