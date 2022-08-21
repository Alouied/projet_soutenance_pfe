import React, { useState} from "react";
import axios from "axios";
import Login from "./login";
import {  BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import Layout from "../component/layout";
import onRegistration from "../api/auth"


function Register()

{   
    const [values,setValues]=useState({
    nom:'',
    email:'',
    password:'',
    jury:'',
    sup:'',
    adm:'',
    })
    const [error,setError]=useState(false)
    const[success,setSuccess]=useState(false)
    const[jury,setJury]=useState(false)
    const[sup,setSup]=useState(false)
    const[adm,setadm]=useState(false)
    
   
    const onChange=(e)=>{
       setValues({...values,[e.target.id]:e.target.value})
      
       
    }
    values.jury=jury
    values.adm=adm
    values.sup=sup
   
    console.log(values)
    const onSubmit=async(e)=>{
      e.preventDefault()
      try{
  
        const { data }= await onRegistration(values)
        setError('')
        setSuccess(data.message)
       
       
        setValues({nom:'',
                  email:'',
                  password:'',
                  jury:false,
                  sup:false,
                  adm:false,})

  
    } 
    catch(error)
    {  
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
 }
   
 
    return(
        <Layout>
        <div className="text-center" >
        <div className="logo">register</div>
      
        <div className="login-form-1">
            <form onSubmit={(e)=>onSubmit(e)} id="register-form" className="text-left">
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                    <div className="login-group">
                        <div className="form-group">
                            <label htmlFor="nom" className="sr-only">username</label>
                            <input type="text" id="nom" name="nom" onChange={(e)=>onChange(e)} className="form-control" value={values.nom} placeholder="username" 
                             required/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="text" id="email" name="email"className="form-control" value={values.email} placeholder="email" onChange={(e)=>onChange(e)} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" name="password" className="form-control" value={values.password} placeholder="password" onChange={(e)=>onChange(e)}required/>
                        </div>
                       
                        
                        <div className="form-group login-group-checkbox">
                        <div className="form-group login-group-checkbox">
                            <input type="radio" className="" name="reg_statut" id="superviseur" placeholder="username" onChange={(e)=>{
                                setSup(e.target.value);
                                setadm(false);
                                setJury(false);
                            }}/>
                            <label htmlFor="superviseur">superviseur</label>
                            
                            <input type="radio" className="" name="reg_statut" id="jury" placeholder="username" onChange={(e)=>{
                                setJury(e.target.value);
                                setSup(false)
                                setadm(false)
                            }}/>
                            <label htmlFor="jury">jury</label>
                            <input type="radio" className="" name="reg_statut" id="admin" placeholder="username" onChange={(e)=>{
                                setJury(false);
                                setSup(false);
                                setadm(e.target.value);
                            }}/>
                            <label htmlFor="admin">administration</label>
                        </div>
                    
                  
                        </div>
                        
                        
                    </div>
                    <button  type='submit' className="login-button"><i className="fa fa-chevron-right"></i></button>
                </div>
                <div style={{color:'red',margin:'10px 0'}}>{error}</div>
                <div style={{color:'green',margin:'10px 0'}}>{success}</div>
                <div className="etc-login-form">
                    <p>already have an account? <Link to={"/login"}>login here</Link></p>
                </div>
            </form>
        </div>
       
    </div>
        
    </Layout> 
   
    );

}
export default Register;
