import Layout from "../component/layout"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import Navbar from "../component/navbar"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FileUploader }from "./files"
import {getpv } from "../api/jury";
import { SubscriptionsOutlined } from "@mui/icons-material"
export const Preview=({files})=>{
    
    console.log("len:",files)
  
}


const Jurynotes=()=>{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    const [protectedData,setProtectedData]=useState(null)
    const [files,setFiles]=useState([])
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
    const getpv=async()=>{
        try{
            const response= await fetch('http://localhost:8000/api/getpv')
            const jsonData= await response.json()
            
           setFiles(jsonData)
      
        }catch(err)
        {
            console.error(err.message)
        }
    }
    console.log("files",files)
    useEffect(()=>{
        protectedInfo();

    },[])
    useEffect(()=>{
      getpv()

    },[])
   
    
    return loading ? (
        <Layout>
            <h1>loading ...</h1>
        </Layout>
    ):(
        <div>
            <Navbar logout={logout}/>
            <Layout>
                <br></br>
                <h1 align="center" style={{color:'grey'}}>les PV :</h1>
                <br></br>
               {files.map(file=>{

                 
                   return  <tr><td><img src="pdflogo.png" style={{width:"20px"}} /><a>     </a><a href={`http://localhost:8000/${file.pvurl}`}>{file.pvurl}</a></td></tr>
                                   

               } )}
                
               <ToastContainer></ToastContainer>
            </Layout>

        </div>
    )
}
export default Jurynotes