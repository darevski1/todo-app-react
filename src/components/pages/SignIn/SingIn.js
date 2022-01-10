import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import "./signin.css";



const SignIn = () => {
    // yup validation scema
    const schema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('The email is Required'),
        password: Yup.string()
            .required("Password is required"),
    })
    const {handleChange, handleSubmit, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email:'',
            password:''
        },
    
        validationSchema:schema,
    
        onSubmit: values => {
                alert(JSON.stringify(values));
     
        },
    })

    return (
        <>
            <div className='sign__section'>
               <div className='form__box-container'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form__group'>
                            <label>Email</label>
                            <input 
                                id="email"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type="text" 
                                class="form-input" 
                                />
                                   {touched.email && errors.email ? (
                                    <div className='error-form'>{errors.email}</div>
                                ) : null}
                        </div>
                        <div className='form__group'>
                            <label>Password</label>
                            <input 
                            id='password'
                            name='password'
                            type='password'
                            class="form-input" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            />
                               {touched.password && errors.password ? (
                                    <div className='error-form'>{errors.password}</div>
                                ) : null}
                        </div>
                        <button class="btn btn-sign btn-wide mt-30" type='submit'> Sign In</button>
                    </form>
               </div>
            </div>
        
        </>
    )
}
export default SignIn;