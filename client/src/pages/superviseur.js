import Layout from "../component/layout"
import './superviseur.css'
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
const Superviseur=()=>{
    const dispatch=useDispatch()
    const [hide,setHide]=useState(false)
    const [note,setNote]=useState(false)
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
     const  open=()=>{
        
        setHide(!hide);
      }
      const  opennote=()=>{
        
        setNote(!note);
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
                <button onClick={()=>logout()} className='btn btn-primary '>Logout</button>
                <h1>superviseur</h1>
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
                     <tr>
                        <td></td>
                        <td> <button onClick={()=>open()} className='btn btn-primary '>Visite 1</button></td>
                        <td><button onClick={()=>open()} className='btn btn-primary '>Visite 2</button></td>
                        <td><button onClick={()=>opennote()} className='btn btn-primary '>Note</button></td>
                       </tr>
                    </tbody>
                </table>       
                <div className="visite" >
                    {hide &&(
                    <form id="sup-form">
                        <div className="intro " >
                            <a>Stagiaire(s): ...</a>
                            <a>Etablissement d'accueil: ..</a>
                            <a>Superviseur: ....</a>
                            <a>N sujet: ....</a>
                            <a>Sujet: ....</a>
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
                    </form>)}
                

                
                    {note &&(
                    <form id="note-form">
                        <div className="intro " >
                            <a>Stagiaire(s): ...</a>
                            <a>Etablissement d'accueil: ..</a>
                            <a>Superviseur: ....</a>
                            <a>N sujet: ....</a>
                            <a>Sujet: ....</a>
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
                    </form>)}
                </div>
            </Layout>

        </div>
    )
}
export default Superviseur