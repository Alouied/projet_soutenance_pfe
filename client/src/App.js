import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter ,Routes,Route,Link ,Outlet,Navigate} from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import Superviseur from "./pages/superviseur";
import Jury from "./pages/jury";
import Admin from "./pages/admin";
import { onLogin } from "./api/auth";
import Editpv from "./pages/editpv";
import Navbar from "./component/navbar";
import Jurynotes from  "./pages/jurynotes"
import { useSelector } from "react-redux/es/exports";
 export const PrivateRoute=()=>{
  const {isAuth}=useSelector(state=>state.auth)
 
 
  return <>{isAuth ? <Outlet/> :<Navigate to='/login'/>}</>
}

export const RestrictedRoute=()=>{

  const page=localStorage.getItem('page');

  const {isAuth}=useSelector(state=>state.auth)

  
  return <>{!isAuth ? <Outlet/> :<Navigate to={page}/>}</>


  


}
 

 


function App() {
 
  const page=localStorage.getItem('page')
    return(
      <BrowserRouter>
      
      
      
      <div className="container mt-3">
        <Routes>
        <Route element={<PrivateRoute/>} >
        <Route  path={"/dashboard"} element={<Dashboard/>} />
    
        <Route  path={"/jury"} element={ (page==="/jury")&&(<Jury/>)} />

        <Route  path={"/editpv"} element={(page==="/jury")&&(<Editpv/>)} /> 
       
        <Route  path={"/superviseur"} element={(page==="/superviseur")&&(<Superviseur/>)} />
      
          <Route>
        <Route  path={"/jurynotes"} element={(page==="/admin")&&(<Jurynotes/>)} />
        <Route  path={"/admin"} element={(page==="/admin")&&(<Admin/>) }/></Route>
        </Route>
        <Route  path={"/"} element={<Home/>} />
        <Route element={<RestrictedRoute/>} >
         
          <Route  path={"/login"} element={<Login/>} />
          <Route  path={"/register"} element={<Register/>} />
        </Route>
        <Route path={"/"} element={<Home/>}/>
        </Routes>
      </div>
    
    </BrowserRouter>
 ); 

}

export default App;
