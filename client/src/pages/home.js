import { Navbar} from "../component/navbar"

import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom"
import Layout from "../component/layout"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"

const Home=()=>{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    const [protectedData,setProtectedData]=useState(null)
    const logout=async ()=>{
        try{
            await onLogout()
            dispatch(unauthenticateUser())
            localStorage.removeItem('isAuthenticated')
        }catch(error)
        {
            console.log(error)
        }}
      const protectedInfo=async()=>{
        try{
            const {data}=await fetchProtectedInfo()
            setProtectedData(data.info)
            setLoading(false)
        }catch(error)
        {
            logout()
        }
      }  
    useEffect(()=>{
        protectedInfo()
    },[])
    return(
        <>
        <Navbar logout={logout}></Navbar>
        <Layout>
            <br></br>
            <h1>Bienvenue</h1>
            <img src="graduationimg.png" style={{marginTop:'-50px',marginLeft:'-119px',width:'1496.99px',height:'550.5px'}}></img>
        </Layout>
        </>
    )
}
export default Home