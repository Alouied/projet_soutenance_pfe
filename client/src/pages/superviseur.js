import Layout from "../component/layout"
import './superviseur.css'
import { Fragment, useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import getEtudiant from "../api/superviseur"
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
const Visite1=(props)=>{
    const nom=localStorage.getItem('nom')

    const [open,setOpen]=useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    
    return ( 
        <Fragment>
            <Button variant="outlined" id='note' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Visite</Button>
                 <Dialog open={open} id="page" maxWidth="lg" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="sup-form ml-15">
                 <h2>Fiche 1</h2>
                        <div className="intro " >
                        
                            <a>Stagiaire(s):{ props.nom }</a>
                            <a>Etablissement d'accueil:{props.organisme}</a>
                            <a>Superviseur: {nom}</a>
                            <a>N sujet: {props.sujet}</a>
                            <a>Sujet:{props.ns}</a>
                          
                        
                        </div>
                        
                        <h5>Conception :</h5>
                    <div className="form-group">
						<label htmlFor="" className="">situation</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Methode</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Rapport</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarque</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <h5>Réalisation</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Situation</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Matériel/systéme</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">langage</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <h5>Divers</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Niveau</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Assiduité</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Relations humaines</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <button type="submit" className="btn btn-primary">Valider</button>
                    </form>
        
        </Dialog>
        </Fragment>
    
    )
      
}
const Note=(props)=>{
    const nom=localStorage.getItem('nom')

    const [open,setOpen]=useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    
    return ( 
        <Fragment>
            <Button variant="outlined" id='note' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Note</Button>
                 <Dialog open={open} id="page" maxWidth="lg" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="note-form ml-15">
                    <h2>Note</h2>
                        <div className="intro " >
                        
                        <a>Stagiaire(s):{ props.nom }</a>
                        <a>Etablissement d'accueil:{ props.organisme }</a>
                        <a>Superviseur: {nom}</a>
                        <a>N sujet: {props.ns}</a>
                        <a>Sujet: {props.sujet}</a>
                      
                    
                    </div>
                      
                    <div className="form-group2">
						<label htmlFor="" className="">Assiduité et sérieux......</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group2">
						<label htmlFor="" className="">Conception et adéquation de la solution......</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group2">
						<label htmlFor="" className="">Rapport et respect des délais................</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group2">
						<label htmlFor="" className="">Réalisation.........................</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                  
                    <div className="form-group2">
						<label htmlFor="" className="">Note finale</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group2">
						<label htmlFor="" className="">Justification de la note</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    
                    <button type="submit" className="btn btn-primary">Valider</button>
                    </form>
                 </Dialog>
           </Fragment>
    )
}

const Visite2=(props)=>{
    const nom=localStorage.getItem('nom')

    const [open,setOpen]=useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    
    return ( 
        <Fragment>
            <Button variant="outlined" id='note' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Visite 2</Button>
                 <Dialog open={open} id="page" maxWidth="lg" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="sup-form ml-15">
                        <h2>Fiche 2</h2>
                        <div className="intro " >
                        
                            <a>Stagiaire(s):{ props.nom }</a>
                            <a>Etablissement d'accueil:{props.organisme}</a>
                            <a>Superviseur: {nom}</a>
                            <a>N sujet: {props.sujet}</a>
                            <a>Sujet:{props.ns}</a>
                          
                        
                        </div>
                        
                        <h5>Conception :</h5>
                    <div className="form-group">
						<label htmlFor="" className="">situation</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Methode</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Rapport</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarque</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <h5>Réalisation</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Situation</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Matériel/systéme</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">langage</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <h5>Divers</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Niveau</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Assiduité</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Relations humaines</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="" placeholder="............" />
					</div>
                    <button type="submit" className="btn btn-primary">Valider</button>
                    </form>
        
        </Dialog>
        </Fragment>
    
    )
      
}
const Table=(props)=>{
    const [etudiants,setEtudiants]=useState([])
    const [hide,setHide]=useState(false)
  
    const [nom,setnom]=useState('')
    const [organisme,setorganisme]=useState('')
    const [sujet,setsujet]=useState('')
    const [ns,setns]=useState(0)

   const id=props.ide;
 
    const getetudiant=async(id)=>{
        try{
         
            
            const response= await getEtudiant(id)
          
            setEtudiants(response.data)
            setnom(etudiants[0].nom)
            setorganisme(etudiants[0].organisme)
            setsujet(etudiants[0].sujet)
            setns(etudiants[0].ns)

        }catch(err)
        {
            console.error(err.message)
        }
     }
     useEffect(()=>{
        getetudiant(id)
        
    })
    
   
    return(
        <Fragment>
        <tr>   
        <td>{etudiants[0] && etudiants[0].nom}</td>
        <td><Visite1  organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Visite1></td>
        <td><Visite2  organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Visite2></td>
        <td><Note  organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Note></td>
       </tr>
      
      </Fragment>
    )
}
const Superviseur=()=>{
    const dispatch=useDispatch()
    const [hide,setHide]=useState(false)
    const [note,setNote]=useState(false)
    const [nom,setnom]=useState('')
   
    const [sup,setSup]=useState([])
    const [e,sete]=useState([])
    const [etudiant,setEtudiant]=useState([])
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
  
    
     const getetudiant=async(id)=>{
        try{
          
            
            const response= await getEtudiant(id)
           
            //setEtudiant(response.data)
            return response.data

        }catch(err)
        {
            console.error(err.message)
        }
     }
      
      const  opennote=()=>{
        
        setNote(!note);
      }
   

    
    useEffect(()=>{
        protectedInfo();
 
        getsuperviseur();
        
    },[])
    const getsuperviseur=async()=> {
        try{
            const id=localStorage.getItem('id')
            const response= await fetch(`http://localhost:8000/api/superviseur/${id}`)
            const jsonData=await response.json()
            
            setSup(jsonData)
          
           
        }catch(err)
        {
            console.error(err.message)
        }
       }
   
   
     

  
   
    return loading ? (
        <Layout>
            <h1>loading ...</h1>
        </Layout>
    ):(
        <div>
            
            <Layout>
                <button onClick={()=>logout()} className='btn btn-primary '>Logout</button>
               

              
                <table class="table">
                   <thead>
                      <tr>
                         <th>Nom de l'étudiant </th>
                         <th>Visite 1</th>
                         <th>Visite 2</th>
                         <th>Note</th>
                     </tr>
                    </thead>
                    <tbody>
                    
                   
               
                    {sup.map(e => ( 
                    <Table ide={e.e_id}></Table>
                     )) }
                    </tbody>
                </table>       
                
                 
                

                
                   
               
            </Layout>

        </div>
    )
}
export default Superviseur