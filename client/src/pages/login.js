import React, { Component ,useState,useEffect} from "react";

import {  BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import axios from "axios";
import Layout from "../component/layout";

import { onLogin } from "../api/auth";
import {useDispatch} from 'react-redux'
import{authenticateUser} from '../redux/slices/authSlice'
import { Navbar } from "../component/navbar";





function Login(){

	const [values,setValues]=useState({
	
		email:'',
		password:'',
		
	})
	const [error,setError]=useState(false)
	const [page,setPage]=useState('')

       
    const onChange=(e)=>{
		setValues({...values,[e.target.id]:e.target.value})
	
		
	}

	
	
	const dispatch=useDispatch()
	
	const onSubmit=async(e)=>{
	  e.preventDefault()
	  try{
		
	   const {data}= await onLogin(values)
	 console.log(data)
	
	 if (data.user.adm){
		localStorage.setItem('page','/admin')
		
	 }
	 else{
		if(data.user.jury){
			localStorage.setItem('page','/jury')
		}
		else{
			localStorage.setItem('page','/superviseur')
		
		}
	 }
	
	    dispatch(authenticateUser())
	   localStorage.setItem('isAuth','true')
	   localStorage.setItem('nom',data.user.nom)
	   localStorage.setItem('id',data.user.user_id)
	  
   
	}
	
	   catch(error)
	   {
	    console.log(error.response.data.errors[0].msg)
	    setError(error.response.data.errors[0].msg)
	 
	   }
	 }
	 
    const logout=()=>{
		
	}

    
    return(
		<>
		<Navbar ></Navbar>
        <Layout>
<div className="text-center" >
   
	<div className="logo"><h1>login</h1></div>
	
	<div className="login-form-1">
		<form onSubmit={(e)=>onSubmit(e)} id="login-form" className="text-left">
			<div className="login-form-main-message"></div>
			<div className="main-login-form">
				<div className="login-group">
					<div className="form-group">
						<label htmlFor="lg_username" className="sr-only">Email</label>
						<input type="text"  className="form-control" id="email" placeholder="email" onChange={(e)=>onChange(e)
                            }/>
					</div>
					<div className="form-group">
						<label htmlFor="lg_password" className="sr-only">Password</label>
						<input type="password" className="form-control"  id="password" placeholder="password" onChange={(e)=>onChange(e)}/>
					</div>
					
				</div>
				<button type="submit" className="login-button"><i className="fa fa-chevron-right"></i></button>
				<div style={{color:'red',margin:'10px 0'}}>{error}</div>
				
			</div>
			<div className="etc-login-form" >
           
				<p>new user? <Link to={"/register"}>create new account</Link></p>
			</div>
            
		</form>
	
    
		
	</div>
	

	
</div>
</Layout>
</>
    );
}
export default Login;


