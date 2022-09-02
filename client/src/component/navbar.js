import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import { onLogout } from "../api/auth"
import Button from '@mui/material/Button';
export const Navbar=(props)=>{
    const {isAuth}=useSelector(state=>state.auth)
   
    const page=localStorage.getItem('page')
    return(
        <nav className='navbar navbar-light bg-light'>
            <div className='container'>
                  
                  {isAuth ?(
                    <div class="nav">
                        <NavLink to={page} className='mx-3'>
                            <span>Home</span>
                        </NavLink>
                      
                       
                    
                    </div>
                  ):(
                    <div>
                        <NavLink to='/login' >
                            <span>Login</span>
                        </NavLink>
                        <NavLink to='/register' className='mx-3'>
                            <span>Register</span>
                        </NavLink>
                    </div>

                  )}
                   <Button onClick={props.logout} variant="contained" className='btn  '>déconnecter</ Button>
            </div>
        </nav>
    )
}
export default Navbar