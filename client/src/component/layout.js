import { Nav, Navbar } from "react-bootstrap";


const Layout=({children})=>{
    return(
        <div>
          
            <div className='container'>
                 {children}
            </div>
        </div>
    )
}
export default Layout