import Layout from "../component/layout"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
const Jury=()=>{
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
  
    return loading ? (
        <Layout>
            <h1>loading ...</h1>
        </Layout>
    ):(
        <div>
            <Layout>
                <h1>jury</h1>
                <h2>{protectedData}</h2>
                <button onClick={()=>logout()} className='btn btn-primary'>Logout</button>
            </Layout>

        </div>
    )
}
export default Jury