import Layout from "../component/layout"
import './superviseur.css'
import { Fragment, useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import getEtudiant , {validefiche,getfiche,updatefiche, updatenote, postnote,getnote} from "../api/superviseur"
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Navbar } from "../component/navbar"

const Visite1=(props)=>{
    const nom=localStorage.getItem('nom')
   
 
    const [values,setValues]=useState({
        e_id:0,
        csituation:'',
        cmethode:'',
        crapport:'',
        crq:'',
        rsituation:'',
        rmateriel:'',
        rlangage:'',
        rrq:'',
        dniveau:'',
        dassiduite:'',
        drh:'',
        drq:'',
        numero:1,
        })
    values.e_id=props.id
  values.numero=1
    const e=props.id
    const [error,setError]=useState(false)
    const[success,setSuccess]=useState(false)
    const [fiche,setFiche]=useState([]);
    const [fiche1,setFiche1]=useState({});
    const [open,setOpen]=useState(false);
   
  
    const handleClickOpen = () => {
        setOpen(true);
        setValues({...fiche1})
      };
      const handleClose = () => {
        setOpen(false);
        setValues({...fiche1})
      };
      const onChange=(e)=>{
        setValues({...values,[e.target.id]:e.target.value})
       
        
     }
     
  
     const getFiche=async(id)=>{
        try{
            //const e=values.e_id
            const  response=await getfiche(id)
            setFiche(response.data)
          
            if (fiche[0].numero==1){
                setFiche1(fiche[0])
             
            }
            else{
                setFiche1(fiche[1])
                
              
            }
           

        }catch(err)
        {
            console.error(err.message)
        } 
     }
     useEffect(()=>{
      
        getFiche(values.e_id)
     })
   
   
    
    
     const onSubmit=async(e)=>{
        e.preventDefault()
        try{
         if(fiche1.numero)
          {const { data }= await updatefiche(values)
          setSuccess(data.message)}
          else{
            const { data }= await validefiche(values)
            setSuccess(data.message)
          }
          setError('')
        
    
      } 
      catch(error)
      {  
        console.log(error.response.data.errors[0].msg)
        setError(error.response.data.errors[0].msg)
        setSuccess('')
      }
   }
    
    return ( 
        <Fragment>
            <Button variant="outlined" id='note' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Visite 1</Button>
                 <Dialog open={open} id="page" maxWidth="lg"className="dialogbox" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="sup-form ml-15" onSubmit={(e)=>onSubmit(e)}>
                 
                 <h2>Fiche 1</h2>
                        <div className="intro " >
                        
                            <a>Stagiaire(s):{ props.nom }</a>
                            <a>Etablissement d'accueil:{props.organisme}</a>
                            <a>Superviseur: {nom}</a>
                            <a>N sujet: {props.ns}</a>
                            <a>Sujet:{props.sujet}</a>
                          
                        
                        </div>
                        
                        <h5>Conception :</h5>
                    <div className="form-group">
						<label htmlFor="" className="">situation</label>
						<input type="text"  className="form-control" value={values?.csituation}  onChange={(e)=>{
                           setValues({...values,csituation:e.target.value})}} required  placeholder="............"/ >
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Methode</label>
						<input type="text"  className="form-control"  required onChange={(e)=>setValues({...values,cmethode:e.target.value})} value={values?.cmethode} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Rapport</label>
						<input type="text"  className="form-control" id="crapport" required name="crapport" onChange={(e)=>setValues({...values,crapport:e.target.value})} value={values?.crapport} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarque</label>
						<input type="text"  className="form-control" id="crq" name="crq" required onChange={(e)=>setValues({...values,crq:e.target.value})} value={values?.crq}placeholder="............" />
					</div>
                    <h5>Réalisation</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Situation</label>
						<input type="text"  className="form-control" id="rsituation" required name="rsituation" onChange={(e)=>setValues({...values,rsituation:e.target.value})} value={values?.rsituation} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Matériel/systéme</label>
						<input type="text"  className="form-control" id="rmateriel"required name="rmateriel" onChange={(e)=>setValues({...values,rmateriel:e.target.value})} value={values?.rmateriel} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">langage</label>
						<input type="text"  className="form-control" id="rlangage"required name="rlangage" onChange={(e)=>setValues({...values,rlangage:e.target.value})} value={values?.rlangage} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="rrq" required name="rrq" onChange={(e)=>setValues({...values,rrq:e.target.value})} value={values?.rrq} placeholder="............" />
					</div>
                    <h5>Divers</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Niveau</label>
						<input type="text"  className="form-control" id="dniveau" required name="dniveau" onChange={(e)=>setValues({...values,dniveau:e.target.value})} value={values?.dniveau} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Assiduité</label>
						<input type="text"  className="form-control" required id="dassiduite" name="dassiduite" onChange={(e)=>setValues({...values,dassiduite:e.target.value})} value={values?.dassiduite} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Relations humaines</label>
						<input type="text"  className="form-control"required id="drh" name="drh" onChange={(e)=>setValues({...values,drh:e.target.value})} value={values?.drh} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="drq"required name="drq" onChange={(e)=>setValues({...values,drq:e.target.value})} value={values?.drq} placeholder="............" />
					</div>
                    <div style={{color:'red',margin:'10px 0'}}>{error}</div>
                <div style={{color:'green',margin:'10px 0'}}>{success}</div>
                    <div className="btn">
                    <Button  variant="outlined" style={{width:"flex",borderColor:"grey"}}  type="submit" >Valider</Button>
                   </div>
                    </form>
        
        </Dialog>
        </Fragment>
    
    )
      
}
const Note=(props)=>{
    const nom=localStorage.getItem('nom')
    const [values,setValues]=useState({
        e_id:0,
        assiduite:0,
        conception:0,
        rapport:0,
        realisation:0,
         note:0,
         justification:''
    })
    values.e_id=props.id

    const [open,setOpen]=useState(false);
    const [error,setError]=useState(false)
    const[success,setSuccess]=useState(false)
    const [notes,setnotes]=useState({});
    const handleClickOpen = () => {
        setOpen(true);
        setValues({...notes})
      };
      const handleClose = () => {
        setOpen(false);
        setValues({...notes})
      };
      const getNote=async(id)=>{
        try{
            //const e=values.e_id
            const  response=await getnote(id)
            setnotes(response.data[0])
           

        }catch(err)
        {
            console.error(err.message)
        } 
     }
     useEffect(()=>{
        
        getNote(values.e_id)
     })
  const sum=(a=0,b=0,c=0,d=0)=>{
   
    return a/1+b/1+c/1+d/1
  }
   values.note=sum(values.assiduite,values.conception,values.realisation,values.rapport)  
      const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            if(values.assiduite>=0 && values.assiduite<=5 && values.conception>=0 && values.conception<=5 && values.rapport<=5 && 
                values.rapport>=0 && values.realisation>=0 && values.realisation<=5){
         if(notes )
          {const { data }= await updatenote(values)
          setSuccess(data.message)
        setError('')}
          else{
            const { data }= await postnote(values)
            setSuccess(data.message)
            setError('')
          }

          }else{
            setError("note entre 5 et 0")
          }
          
        
    
      } 
      catch(error)
      {  
        
        setError(error.response.data.errors[0].msg)
        setSuccess('')
      }
   }
    

    
    return ( 
        <Fragment>
            <Button variant="outlined" id='note' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Note</Button>
                 <Dialog open={open} id="page" maxWidth="lg" className="dialogbox" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="note-form ml-15" onSubmit={(e)=>onSubmit(e)}>
                    <h2>Note</h2>
                        <div className="intro " >
                        
                        <a>Stagiaire(s):{ props.nom }</a>
                        <a>Etablissement d'accueil:{ props.organisme }</a>
                        <a>Superviseur: {nom}</a>
                        <a>N sujet: {props.ns}</a>
                        <a>Sujet: {props.sujet}</a>
                      
                    
                    </div>
                      
                    <div className="form-group2">
						<label htmlFor="" className="">Assiduité et sérieux....................................................................</label>
						<input type="number" required value={values?.assiduite}  onChange={(e)=>{
                          setValues({...values,assiduite:e.target.value});
                           
                        } } className="form-control" style={{width:"70px"}}  placeholder="............" />
					    <label>/5</label>
                    </div>
                    <div className="form-group2">
						<label htmlFor="" className="">Conception et adéquation de la solution.................................</label>
						<input type="number" required value={values?.conception}  onChange={(e)=>{
                           setValues({...values,conception:e.target.value})}} className="form-control" style={{width:"70px"}}   placeholder="............" />
                        <label>/5</label>
                    </div>
                    <div className="form-group2">
						<label htmlFor="" className="">Rapport et respect des délais.....................................................</label>
						<input type="number" required value={values?.rapport}  onChange={(e)=>{
                           setValues({...values,rapport:e.target.value})}} className="form-control" style={{width:"70px"}}   placeholder="............" />
                        <label>/5</label>
                    </div>
                    <div className="form-group2">
						<label htmlFor="" className="">Réalisation.....................................................................................</label>
						<input type="number" required value={values?.realisation}  onChange={(e)=>{
                           setValues({...values,realisation:e.target.value})}} className="form-control" style={{width:"70px"}}   placeholder="............" />
                        <label>/5</label>
                    </div>
                  
                    <div className="form-group2">
						<label htmlFor="" className="">Note finale..... ...............................................................................</label>
						
                        <label>{values?.note} /20</label>
                    </div>
                    <div className="form-group">
						<label htmlFor="" className="">Justification de la note.:</label>
						<input type="text"  value={values?.justification}  onChange={(e)=>{
                           setValues({...values,justification:e.target.value})}} className="form-control"   placeholder="........................................................................................................................................" />
					
                    </div>
                    <div style={{color:'red',margin:'10px 0'}}>{error}</div>
                <div style={{color:'green',margin:'10px 0'}}>{success}</div>
                    
                    <div className="btn">
                    <Button  variant="outlined" style={{width:"flex",borderColor:"grey"}}  type="submit" >Valider</Button>
                   </div>
                 
                    </form>
                 </Dialog>
           </Fragment>
    )
}

const Visite2=(props)=>{
    const nom=localStorage.getItem('nom')
    const [error,setError]=useState(false)
    const[success,setSuccess]=useState(false)
    const [fiche,setFiche]=useState([]);
    const [fiche1,setFiche1]=useState({});
    const [values,setValues]=useState({
        e_id:0,
        csituation:'',
        cmethode:'',
        crapport:'',
        crq:'',
        rsituation:'',
        rmateriel:'',
        rlangage:'',
        rrq:'',
        dniveau:'',
        dassiduite:'',
        drh:'',
        drq:'',
        numero:2
        })
    values.e_id=props.id
    values.numero=2
    const onChange=(e)=>{
        setValues({...values,[e.target.id]:e.target.value})
       
        
     }
    
     const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            if(fiche1)
            {const { data }= await updatefiche(values)
            setSuccess(data.message)}
            else{
              const { data }= await validefiche(values)
              setSuccess(data.message)
            }
            setError('')
         
         
        
    
      } 
      catch(error)
      {  
        console.log(error.response.data.errors[0].msg)
        setError(error.response.data.errors[0].msg)
        setSuccess('')
      }
   }
    const [open,setOpen]=useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setValues({...fiche1})
      };
      const handleClose = () => {
        setOpen(false);
        setValues({...fiche1})
      };
      const getFiche=async(id)=>{
        try{
            //const e=values.e_id
            const  response=await getfiche(id)
      
            setFiche(response.data)
            if (fiche[0].numero==2){
                setFiche1(fiche[0])
             
            }
            else{
                setFiche1(fiche[1])
                
              
            }
            
           

        }catch(err)
        {
            console.error(err.message)
        }
        
     }
     

     useEffect(()=>{
      
        getFiche(values.e_id)
     })
   
   
    

    
    return ( 
        <Fragment>
            <Button variant="outlined" id='visite' style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Visite 2</Button>
                 <Dialog open={open} id="page" maxWidth="lg" className="dialogbox" onClose={handleClose}>
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "700px",width:"2px", color:"red"}} >X</Button>
                 <form id="sup-form ml-15" onSubmit={(e)=>onSubmit(e)}>
                        <h2>Fiche 2</h2>
                        <div className="intro " >
                        
                            <a>Stagiaire(s):{ props.nom }</a>
                            <a>Etablissement d'accueil:{props.organisme}</a>
                            <a>Superviseur: {nom}</a>
                            <a>N sujet: {props.ns}</a>
                            <a>Sujet:{props.sujet}</a>
                          
                        
                        </div>
                        
                        <h5>Conception :</h5>
                        <div className="form-group">
						<label htmlFor="" className="">situation</label>
						<input type="text"  className="form-control" id="csituation" required name="csituation" onChange={(e)=>setValues({...values,csituation:e.target.value})} value={values?.csituation} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Methode</label>
						<input type="text"  className="form-control" id="cmethode" required name="cmethode" onChange={(e)=>setValues({...values,cmethode:e.target.value})} value={values?.cmethode} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Rapport</label>
						<input type="text"  className="form-control" id="crapport"required name="crapport" onChange={(e)=>setValues({...values,crapport:e.target.value})} value={values?.crapport} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarque</label>
						<input type="text"  className="form-control" id="crq" name="crq" required onChange={(e)=>setValues({...values,crq:e.target.value})} value={values?.crq}placeholder="............" />
					</div>
                    <h5>Réalisation</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Situation</label>
						<input type="text"  className="form-control" id="rsituation"required  name="rsituation" onChange={(e)=>setValues({...values,rsituation:e.target.value})} value={values?.rsituation} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Matériel/systéme</label>
						<input type="text"  className="form-control" id="rmateriel"required name="rmateriel" onChange={(e)=>setValues({...values,rmateriel:e.target.value})} value={values?.rmateriel} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">langage</label>
						<input type="text"  className="form-control" id="rlangage" required name="rlangage" onChange={(e)=>setValues({...values,rlangage:e.target.value})} value={values?.rlangage} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="rrq" required name="rrq" onChange={(e)=>setValues({...values,rrq:e.target.value})} value={values?.rrq} placeholder="............" />
					</div>
                    <h5>Divers</h5>
                    <div className="form-group">
						<label htmlFor="" className="">Niveau</label>
						<input type="text"  className="form-control" id="dniveau"required name="dniveau" onChange={(e)=>setValues({...values,dniveau:e.target.value})} value={values?.dniveau} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Assiduité</label>
						<input type="text"  className="form-control" id="dassiduite" required name="dassiduite" onChange={(e)=>setValues({...values,dassiduite:e.target.value})} value={values?.dassiduite} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Relations humaines</label>
						<input type="text"  className="form-control" id="drh" name="drh"required  onChange={(e)=>setValues({...values,drh:e.target.value})} value={values?.drh} placeholder="............" />
					</div>
                    <div className="form-group">
						<label htmlFor="" className="">Remarques</label>
						<input type="text"  className="form-control" id="drq" name="drq"  required onChange={(e)=>setValues({...values,drq:e.target.value})} value={values?.drq} placeholder="............" />
					</div>
                    <div style={{color:'red',margin:'10px 0'}}>{error}</div>
                <div style={{color:'green',margin:'10px 0'}}>{success}</div>
                    <div className="btn">
                    <Button  variant="outlined" style={{width:"flex",borderColor:"grey"}}  type="submit" >Valider</Button>
                   </div>
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
    const [ide,setide]=useState(0)
   const id=props.ide;
  
    const getetudiant=async(id)=>{
        try{
         
            
            const response= await getEtudiant(id)
          
            setEtudiants(response.data)
            setnom(etudiants[0].nom)
            setorganisme(etudiants[0].organisme)
            setsujet(etudiants[0].sujet)
            setns(etudiants[0].ns)
            setide(etudiants[0].id)
            

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
        <td><Visite1 id={ide}  organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Visite1></td>
        <td><Visite2  id={ide} organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Visite2></td>
        <td><Note  id={ide} organisme={organisme} nom={nom} sujet={sujet} ns={ns}></Note></td>
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
            <Navbar logout={logout}/>
            <Layout>
               
               
    
             
                
                <table className="table">
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