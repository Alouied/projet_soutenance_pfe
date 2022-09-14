import Layout from "../component/layout"
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar"
import  Axios  from "axios";
import "./admin.css"
const Admin=()=>{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    const [protectedData,setProtectedData]=useState(null)
    const Navigate = useNavigate();
    const [name,setname] = useState('');
    const [iden, setiden] = useState('');
    const [error,setError] = useState(false);
    const [Numsujet, setNumsujet] = useState('');
    const [sujet, setsujet] = useState('');
    const [organisme, setorganisme]=useState('');
    const [supervisor, setsupervisor]=useState(0);
    const [id, setid]=useState(0);
    const [president,setpresident]=useState('');
    const [first,setfirst]=useState('');
    const [second, setsecond] = useState('');
    const [date, setdate] = useState('');
    const [heure, setheure] = useState('');
    const [list, setlist] = useState([]);
    const [etudiant, setetudiant] = useState([]);
    const [etudiantaffectedjury, setetudiantaffectedjury] = useState([]);
    const [etudiantaffectedsup, setetudiantaffectedsup] = useState([]);
    const [champs,setchamps] = useState([]);
    const [option,setoption] = useState('');
    const [msg, setMsg] = useState('');
    const [msg1, setMsg1] = useState('');
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

    useEffect(() => { 
        const Getsupervisor = async () => {
         const res = await Axios.get("http://localhost:8000/api/getsup",
         );
         setchamps(res.data)
         console.log("updated")
        };
        Getsupervisor();
        console.log("mounted");
      },[]);
  

  
      useEffect(() => { 
        const Getetudiant = async () => {
         const res = await Axios.get("http://localhost:8000/api/getetudiants",
         );
         setetudiant(res.data)
        };
        Getetudiant();
      },[]);
      useEffect(() => { 
        const Getetudiantaffectedjury = async () => {
         const res = await Axios.get("http://localhost:8000/api/getjuryaffected",
         );
         setetudiantaffectedjury(res.data)
        };
        Getetudiantaffectedjury();
      },[]);
      useEffect(() => { 
        const Getetudiantaffectedsup = async () => {
         const res = await Axios.get("http://localhost:8000/api/getsupaffected",
         );
         setetudiantaffectedsup(res.data)
        };
        Getetudiantaffectedsup();
      },[]);
  console.log(etudiantaffectedjury)
      useEffect(() => { 
        const GetList = async () => {
         const result = await Axios.get("http://localhost:8000/api/getjury",
         );
         setlist(result.data)
        };
        GetList();
      },[]);
  // supervisor
      const submit = async (e) => {
        e.preventDefault();
        await Axios.post('http://localhost:8000/api/postsuperviseur', {
          e_id: id,
          sup_id:supervisor
      });
      window.alert("Supervisor has been successfully registered!")
      window.location.reload(false)
    }
  //jury
  const submitjury = async (e) => {
    e.preventDefault();
    await Axios.post('http://localhost:8000/api/postjury', {
      e_id: id,
      president:president,
      membre1:first,
      membre2:second,
      date:date,
      heure:heure,
  });
  window.alert("Jury has been successfully registered!")
  window.location.reload(false)

}
  //etudiant
      const press = async (e) => {
        e.preventDefault();
        try{
        await Axios.post('http://localhost:8000/api/postetudiant', {
          nom: name,
          number:iden,
          opt:option,
         ns:Numsujet,
          organisme:organisme,
          sujet:sujet,
      });
      window.alert("Student has been successfully registered!")
      window.location.reload(false)
    }catch(error)
      {   
        window.alert(error.response.data.error)
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
            <div className="body">
        <form className="myform">
    <div className="card">
        
       
        <h5>Affectation des sujets</h5>
         <input type="text" placeholder="Nom de l'étudiant en autosuggestion"  value={name} onChange={(e) =>{setname(e.target.value)}}required/>
         <input type="text" placeholder="Identifiant de l'Etudiant" value={iden} onChange={(e) =>{setiden(e.target.value)}} required/>
         <input type="text" placeholder="Option" value={option} onChange={(e) =>{setoption(e.target.value)}} required/>
         
        
         <input type="text" placeholder="Numéro du sujet" value={Numsujet} onChange={(e) =>{setNumsujet(e.target.value)}}required/>
         <input type="text" placeholder="Titre du sujet" value={sujet} onChange={(e) =>{setsujet(e.target.value)}} required/>
         
         <input type="text" placeholder="Organisme d'accueil (l'entreprise)" value={organisme} onChange={(e) =>{setorganisme(e.target.value)}} required/>     
       
        <div className="content">
        <button onClick={press} ><a>valider</a></button>
        </div>
      </div>
        </form>
        <form className="myform">
    <div className="card">
        <div id="circle"></div>
        <h5>Affectation des superviseurs</h5>
        <select name="etudiant" id="etudiant" className="supervisor" value={id}
        onChange={(e) =>setid(e.target.value)}>
            <option >--Etudiant--</option>
            {etudiant?.map(item =>{
                var test=true;
                 for(let i=0;i<etudiantaffectedsup.length;i++)
                 { 
                    if (item.id===etudiantaffectedsup[i].e_id)
                {return  test = false;   }
              }
               
               if(test){return <option value={item.id}>{item.nom}</option>}
            
            })}
        </select>
        <select name="supervisor" id="supervisor" className="supervisor" value={supervisor}
        onChange={(e) =>setsupervisor(e.target.value)}>
            <option >--Supervisor--</option>
            {champs.map(item =>(
              <option value={item.user_id}>{item.nom}</option>
            ))}
        </select>
        
        <div className="content">
        <button onClick={submit}><a>valider</a></button>
        </div>
        </div>
        </form>
        <form className="myform">
    <div className="card">
        
       
        <h5>Affectation des jurys</h5>
        <select name="etudiant" id="etudiant" className="supervisor" value={id}
        onChange={(e) =>setid(e.target.value)}>
            <option >--Etudiant--</option>
            {etudiant.map(item =>{
                var test=true;
                 for(let i=0;i<etudiantaffectedjury.length;i++)
                 { 
                    if (item.id===etudiantaffectedjury[i].e_id)
                {return  test = false;   }
              }
               
               if(test){return <option value={item.id}>{item.nom}</option>}
            
            })}</select>
        <div className="myform">
        <select name="president" id="president" className="president" value={president}
        onChange={(e) =>setpresident(e.target.value)}>
            <option  >president</option>
            {list.map(key =>{
              if(second!=key.user_id && first!=key.user_id){ return (<option value={key.user_id}>{key.nom}</option>)}
})}
        </select>
        <select name="first" id="first" className="first" value={first}
        onChange={(e) =>setfirst(e.target.value)}>
            <option >membre</option>
            {list.map((key) =>{
              if( president!=key.user_id && second!=key.user_id){ return (<option value={key.user_id}>{key.nom}</option>)}
})}
        </select>
        <select name="second" id="second"  className="second" value={second}
        onChange={(e) =>setsecond(e.target.value)}>
            <option >membre</option>
            {list.map(key =>{
            if( president!=key.user_id && first!=key.user_id) { return <option value={key.user_id}>{key.nom}</option>}
             })}
        </select>     
        </div>
        <input type="date"  placeholder="Calendrier pour choisir date soutenance" value={date} onChange={(e) =>{setdate(e.target.value)}}required/>
        <input type="text" placeholder="Heure soutenance"  value={heure} onChange={(e) =>{setheure(e.target.value)}}required/>
        <div className="content">
        <button onClick={submitjury} ><a>valider</a></button>
        </div>
      </div>
        </form>   
    </div>
                
            </Layout>

        </div>
    )
}
export default Admin