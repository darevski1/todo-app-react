import React from 'react';
import "./signup.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
// Yup validation schema

const schema = Yup.object({
    name: Yup.string()
    .max(15, 'Must be 15 characters od less')
    .required('The name is Required'),
    email: Yup.string().email('Invalid email address').required('The email is Required'),
    password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password must contain at least one lowercase letter, one uppercase letter, one number and at least 8 characters!"
    )
    .required("Password is required"),
    retypepassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
    });


 //formik 

 const {handleChange, handleSubmit, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
        name:'',
        email:'',
        password:'',
        retypepassword:'',
    },

    validationSchema:schema,

    onSubmit: values => {
            alert(JSON.stringify(values));
 
    },
})

    return (
        <div>
            <div className='sign__section'>
               <div className='form__box-container'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form__group'>
                            <label htmlFor="name">Name:</label>
                            <input 
                                id="name"
                                name="name"
                                type="text" 
                                className="form-input" 
                                onChange={handleChange}
                                onBlur= {handleBlur}
                                value = {values.name}
                                />
                                {touched.name && errors.name ? (
                                    <div className='error-form'>{errors.name}</div>
                                ) : null}
                        </div>
                   
                        <div className='form__group'>
                            <label htmlFor="email">Email</label>
                            <input 
                                id='email'
                                name='email'
                                type="email" 
                                className="form-input" 
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                />
                                  {touched.email && errors.email ? (
                                    <div className='error-form'>{errors.email}</div>
                                ) : null}
                        </div>
                        <div className='form__group'>
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password"
                                name="password"
                                type="password" 
                                className="form-input" 
                                placeholder="Your Password" 
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                />
                                   {touched.password && errors.password ? (
                                    <div className='error-form'>{errors.password}</div>
                                ) : null}
                        </div>
                        <div className='form__group'>
                            <label htmlFor="retypepassword">Password Again</label>
                            <input 
                                id="retypepassword"
                                name="retypepassword"
                                type="password" 
                                className="form-input" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.retypepassword}
                                />
                                 {touched.retypepassword && errors.retypepassword ? (
                                    <div className='error-form'>{errors.retypepassword}</div>
                                ) : null}
                        </div>
                
                            <button type='submit' className="btn btn-sign btn-wide mt-30"> Register</button>
                     
                    </form>
               </div>
            </div>
        
        </div>
    )
}
export default SignUp;