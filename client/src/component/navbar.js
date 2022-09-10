import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import { onLogout } from "../api/auth"
import Button from '@mui/material/Button';
export const Navbar=(props)=>{
    const {isAuth}=useSelector(state=>state.auth)
  
    const page=localStorage.getItem('page')
    const test=(page==="/admin")
    return(
        <nav className='navbar navbar-light bg-light'>
            <div className='container'>
                  
                  {isAuth ?(
                    <div class="nav">
                        <NavLink to={page} className='mx-3'>
                            <Button>Home</Button>
                        </NavLink>
                        {test &&(
                                 <NavLink to='/jurynotes' className='mx-3'>
                                 <Button>Resultat</Button>
                             </NavLink>
                        )

                        }
                       
                    
                    </div>
                  ):(
                    <div>
                        <NavLink to='/login' >
                            <Button>Login</Button>
                        </NavLink>
                        <NavLink to='/register' className='mx-3'>
                            <Button>Register</Button>
                        </NavLink>
                    </div>

                  )}
                   <Button onClick={props.logout} className='btn  '>déconnecter</ Button>
            </div>
        </nav>
    )
}
export default Navbar