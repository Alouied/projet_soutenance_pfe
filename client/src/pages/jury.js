import * as React from 'react'
import Layout from "../component/layout"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import { useEffect, useState,useRef, Component, Fragment } from 'react'
import { Link, Route, Routes,Switch, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import "../cssfiles/index1.css"
import "../cssfiles/stylesheet.css"
import {useReactToPrint} from 'react-to-print'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import getEtudiant from '../api/jury'
import axios from 'axios'
import {getnote} from "../api/superviseur"
import Navbar from "../component/navbar"







    function Aziz(props) {
      const [open, setOpen] =useState(false);
      const [test1, settest1] =useState(false);
      const [N1,setN1] =useState(0);
      const [encadrant, setencadrant] =useState([]);
      const [Note1,setNote1]=useState(0)
      const [Note2,setNote2]=useState(0)
      const [Note3,setNote3]=useState(0)
      const [Note4,setNote4]=useState(0)
      const [Note5,setNote5]=useState(0)
      const [Note6,setNote6]=useState(0)
      const [Note7,setNote7]=useState(0)
      const [values,setvalues]=useState({
        e_id:0,
        note1:0,
        note2:0,
        note2:0,
        note3:0,
        note4:0, 
        note5:0,
        note6:0, 
        note7:0,
        notefinale:0
      })
      values.e_id=props.ide
      const Postencadrant = async () => {
        try{
            if (encadrant===undefined)
            {await axios.post('http://localhost:8000/api/postnotesencadrant',values)}
            
            if(encadrant!=undefined)
            {
              await axios.post('http://localhost:8000/api/putnotesencadrant',values)
            }
          }
        catch(e)
        {
            //console.log(e)
        }
      }

      const Getencadrant = async (id) => {
        try {
          const res = await axios.get(`http://localhost:8000/api/getnotesencadrant/${id}`)
          setencadrant(res.data[0])
          setN1(encadrant.notefinale)
        }catch(e)
        {
            //console.error(e.message)
        }
      }
      useEffect(()=>{
        Getencadrant(values.e_id)
        if (encadrant===undefined)
        {
          settest1(true)
          setN1(0)
        }
      })
      
      const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        handleClose()
        values.notefinale=sum(values.note1,values.note2,values.note3,values.note4,values.note5,values.note6,values.note7)
        setN1(values.notefinale)
        Postencadrant()
        notef()
      };

      function sum (a,b,c,d,e,f,g){
          return (a/1+b/1+c/1+d/1+e/1+f/1+g/1)*0.9
        }
      
       const handleClickOpen = () => {
         setOpen(true);
         setvalues({...encadrant})
       };
       const handleClose = () => {
         setOpen(false);
         setvalues({...encadrant})
       };

       const notef = () => {
        if (encadrant===undefined)
        {
          setN1(sum(Note1,Note2,Note3,Note4,Note5,Note6,Note7))
        }
       }

      const [pub,setpub]=useState(false)
      const [test,settest]=useState(false)
      const [test10,settest10]=useState(false)
      const [test2,settest2]=useState(false)
      
      const [NOTE1,setNOTE1]=useState(0)
      const [N2,setN2]=useState(0)
      const [N3,setN3]=useState(0)
      const [N4,setN4]=useState(0)
      const [N5,setN5]=useState(0)
      const [notes,setnotes]=useState({})
      const [values1,setvalues1]=useState({
        e_id:0,
        n1encadrant:0,
        n2rapporteur:0,
        n3superviseur:0,
        n4qualite:0, 
        n5question:0,
        moyenne:0, 
        publiable:'NP'
      })
      values1.e_id=props.ide
      values1.n1encadrant=N1
      values1.moyenne=values1.n1encadrant/5+values1.n2rapporteur/5+values1.n4qualite/5+values1.n3superviseur/5+values1.n5question/5
      
      const handlecheckbox = () => {
          setpub(!pub)
          if (pub)
          {
            setvalues1({...values1,publiable:'P'});
          }
          else
          {
            setvalues1({...values1,publiable:'NP'});
          }
      }

      const modifier = () => {
          settest(true)
          settest2(true)
          setvalues1({...notes})
      }
     
      const submit = async () =>
      {
        try{
          window.location.reload(false)
          settest2(false)
          settest(false)
          if (notes!=undefined)
          {
            const {res1} = await axios.post('http://localhost:8000/api/putstudent',values1)
          }
          if(notes===undefined){
            const {res} = await axios.post('http://localhost:8000/api/poststudent',values1)
          }
        }
        catch(e)
        {
           //console.log(e)
        }
      }

      const check = () => {
        
        if (notes!=undefined)
          { settest10(true)}
          if (notes===undefined)
          {
            settest10(false)
            setNOTE1(N1)
          }
      }

      const getsupnote=async(id)=>{
        try{
            //const e=values.e_id
            const  response=await getnote(id)
            setvalues1({...values1,n3superviseur:response.data[0].note});
            setN3(response.data[0].note)
            console.log("n3",N3)
        }catch(err)
        {
            console.error(err.message)
        } 
     }
     useEffect(()=>{
      getsupnote(values1.e_id)
    },[])

      const getjurynote = async (id) => {
          try {
            const res = await axios.get(`http://localhost:8000/api/getjurynote/${id}`)
            setnotes(res.data[0])
          }catch(e)
          {
              console.error(e.message)
          }
        }
        useEffect(()=>{
          getjurynote(values1.e_id)
          check()
        })

       return (
        <Fragment>
                 <Button variant="outlined" id='note' align="center" style={{width:"flex",borderColor:"grey"}} onClick={handleClickOpen}>
                 Note</Button>
                 <Dialog open={open} id="page" maxWidth="lg" onClose={handleClose} >
                 <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "650px",width:"2px", color:"red"}}>X</Button>
                 <h5 align="center">Fiche note encadrant de l'entreprise <div> Pour <strong> {props.nom} </strong></div></h5>
                 <h5 align="center"> </h5>
                 <form onSubmit={handleSubmit}>
                  <table className='styled-table mb-3' id='notetable' >
                    <thead >
                      <tr>
                        <td align="center">Critère</td>
                        <td align="center">TM</td>
                        <td align="center">M</td>
                        <td align="center">MO</td>
                        <td align="center">AB</td>
                        <td align="center">B</td>
                        <td align="center">TB</td>
                        <td align="center">Note</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="center">Assiduité</td>
                        <td align="center"><input id='ymca' type="radio" name='select' checked={Note1==0.5 || values.note1==0.5} onChange={()=>(setNote1(0.5) ,setvalues({...values,note1:0.5}))} required/></td>
                        <td align="center"><input type="radio" name='select' checked={Note1==1 || values.note1==1} onChange={()=>(setNote1(1), setvalues({...values,note1:1}))} required/> </td>
                        <td align="center"><input type="radio" name='select' checked={Note1==1.5 || values.note1==1.5} onChange={()=>(setNote1(1.5), setvalues({...values,note1:1.5}))} required/></td>
                        <td align="center"><input type="radio" name='select' checked={Note1==2 || values.note1==2} onChange={()=>(setNote1(2), setvalues({...values,note1:2}))} required/></td>
                        <td align="center"><input type="radio" name='select' checked={Note1==2.5 || values.note1==2.5}  onChange={()=>(setNote1(2.5), setvalues({...values,note1:2.5}))} required/></td>
                        <td align="center"><input type="radio" name='select' checked={Note1==3 || values.note1==3} onChange={()=>(setNote1(3), setvalues({...values,note1:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note1}</p>):(<p>{Note1}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Intégration</td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==0.5 || values.note2==0.5} onChange={()=>(setNote2(0.5), setvalues({...values,note2:0.5}))} required /></td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==1 || values.note2==1} onChange={()=>(setNote2(1), setvalues({...values,note2:1}))} required/></td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==1.5 || values.note2==1.5} onChange={()=>(setNote2(1.5), setvalues({...values,note2:1.5}))} required/></td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==2 || values.note2==2} onChange={()=>(setNote2(2), setvalues({...values,note2:2}))} required/></td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==2.5 || values.note2==2.5} onChange={()=>(setNote2(2.5), setvalues({...values,note2:2.5}))} required/></td>
                        <td align="center"><input type="radio" name="select2" checked={Note2==3 || values.note2==3} onChange={()=>(setNote2(3), setvalues({...values,note2:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note2}</p>):(<p>{Note2}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Facilité</td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==0.5 || values.note3==0.5} onChange={()=>(setNote3(0.5), setvalues({...values,note3:0.5}))} required /></td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==1 || values.note3==1} onChange={()=>(setNote3(1), setvalues({...values,note3:1}))}  required/></td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==1.5 || values.note3==1.5} onChange={()=>(setNote3(1.5), setvalues({...values,note3:1.5}))}  required/></td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==2 || values.note3==2} onChange={()=>(setNote3(2), setvalues({...values,note3:2}))} required/></td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==2.5 || values.note3==2.5} onChange={()=>(setNote3(2.5), setvalues({...values,note3:2.5}))}  required/></td>
                        <td align="center"><input type="radio" name="select3" checked={Note3==3 || values.note3==3} onChange={()=>(setNote3(3), setvalues({...values,note3:3}))}  required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note3}</p>):(<p>{Note3}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Niveau</td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==0.5 || values.note4==0.5} onChange={()=>(setNote4(0.5), setvalues({...values,note4:0.5}))}  required /></td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==1 || values.note4==1} onChange={()=>(setNote4(1), setvalues({...values,note4:1}))} required/></td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==1.5 || values.note4==1.5} onChange={()=>(setNote4(1.5), setvalues({...values,note4:1.5}))} required/></td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==2 || values.note4==2} onChange={()=>(setNote4(2), setvalues({...values,note4:2}))} required/></td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==2.5 || values.note4==2.5} onChange={()=>(setNote4(2.5), setvalues({...values,note4:2.5}))} required/></td>
                        <td align="center"><input type="radio" name="select4" checked={Note4==3 || values.note4==3} onChange={()=>(setNote4(3), setvalues({...values,note4:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note4}</p>):(<p>{Note4}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Compétence</td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==0.5 || values.note5==0.5} onChange={()=>(setNote5(0.5), setvalues({...values,note5:0.5}))} required /></td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==1 || values.note5==1} onChange={()=>(setNote5(1), setvalues({...values,note5:1}))} required/></td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==1.5 || values.note5==1.5} onChange={()=>(setNote5(1.5), setvalues({...values,note5:1.5}))} required/></td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==2|| values.note5==2} onChange={()=>(setNote5(2), setvalues({...values,note5:2}))} required/></td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==2.5 || values.note5==2.5} onChange={()=>(setNote5(2.5), setvalues({...values,note5:2.5}))} required/></td>
                        <td align="center"><input type="radio" name="select5" checked={Note5==3 || values.note5==3} onChange={()=>(setNote5(3), setvalues({...values,note5:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note5}</p>):(<p>{Note5}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Conception</td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==0.5 || values.note6==0.5} onChange={()=>(setNote6(0.5), setvalues({...values,note6:0.5}))} required /></td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==1 || values.note6==1} onChange={()=>(setNote6(1), setvalues({...values,note6:1}))} required/></td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==1.5 || values.note6==1.5} onChange={()=>(setNote6(1.5), setvalues({...values,note6:1.5}))} required/></td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==2 || values.note6==2} onChange={()=>(setNote6(2), setvalues({...values,note6:2}))} required/></td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==2.5 || values.note6==2.5} onChange={()=>(setNote6(2.5), setvalues({...values,note6:2.5}))} required/></td>
                        <td align="center"><input type="radio" name="select6" checked={Note6==3 || values.note6==3} onChange={()=>(setNote6(3), setvalues({...values,note6:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note6}</p>):(<p>{Note6}</p>)}</td>
                      </tr>
                      <tr>
                        <td align="center">Réalisation</td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==0.5 || values.note7==0.5} onChange={()=>(setNote7(0.5), setvalues({...values,note7:0.5}))} required /></td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==1|| values.note7==1} onChange={()=>(setNote7(1), setvalues({...values,note7:1}))} required/></td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==1.5 || values.note7==1.5} onChange={()=>(setNote7(1.5), setvalues({...values,note7:1.5}))} required/></td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==2 || values.note7==2} onChange={()=>(setNote7(2), setvalues({...values,note7:2}))} required/></td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==2.5 || values.note7==2.5} onChange={()=>(setNote7(2.5), setvalues({...values,note7:2.5}))} required/></td>
                        <td align="center"><input type="radio" name="select7" checked={Note7==3 || values.note7==3} onChange={()=>(setNote7(3), setvalues({...values,note7:3}))} required/></td>
                        <td align="center">{(!test1)?(<p>{values?.note7}</p>):(<p>{Note7}</p>)}</td>
                      </tr>
                      <tr>
                        <td colSpan={7}><h6>note finale</h6></td>
                        <td align='center' id='note_finale'>{(!test1)?(<p>{sum(values.note1,values.note2,values.note3,values.note4,values.note5,values.note6,values.note7)}</p>):(<p>{sum(Note1,Note2,Note3,Note4,Note5,Note6,Note7)}</p>)}</td>
                      </tr>
                    </tbody>
                  </table>
                  {(test || !test10)?(<div align="center"><button className="button-46" >valider</button></div>):(<p></p>)}
                  </form>
                  <br />
                  </Dialog>
                  <td align='center' >{(test || !test10)?(<input required type='number' id='N2' className='form-control' value={values1?.n2rapporteur} 
            onChange={(e)=>{
              if (e.target.value>=0 && e.target.value<=20)
              {
                setvalues1({...values1,n2rapporteur:e.target.value});
                setN2(e.target.value)
              }
            } }  />):(<p>{notes?.n2rapporteur}</p>)}</td>
          <td align='center' >{values1?.n3superviseur}</td>

          <td align='center' >{(test || !test10)?(<input required type='number' className='form-control' id='N4' value={values1?.n4qualite} 
            onChange={(e)=>{
              if (e.target.value>=0 && e.target.value<=20)
              {
                setvalues1({...values1,n4qualite:e.target.value});
                setN4(e.target.value)
              }
            } }  />):(<p>{notes?.n4qualite}</p>)}</td>

          <td align='center' >{(test || !test10)?(<input required type='number' className='form-control' id='N5' value={values1?.n5question} 
            onChange={(e)=>{
              if (e.target.value>=0 && e.target.value<=20)
              {
                setvalues1({...values1,n5question:e.target.value});
                setN5(e.target.value)
              }
            } }  />):(<p>{notes?.n5question}</p>)}</td>

          <td align='center'>{(test || !test10)?(!test10)?<p>{NOTE1/5+N2/5+N3/5+N4/5+N5/5}</p>:(<p>{values1?.moyenne}</p>) :(<p>{notes?.moyenne}</p>)}</td>
          <td align='center'>{(test || !test10)?(<input id='publiable' checked={values1?.publiable=='P'} onChange={handlecheckbox} type="checkbox" />):(<input id='publiable' checked={notes?.publiable=='P'} onChange={handlecheckbox} type="checkbox" />)}</td>
          <td>{((notes || test10) && !test2)?(<div ><Button align='center'  onClick={modifier} role="button">modifier</Button></div>):(<Button align='center'  onClick={submit} role="button">valider</Button>)}</td>
        </Fragment>
       )}


     const Fetc=(props)=>{
      const [etudiants,setEtudiants]=useState([])
      const [nom,setnom]=useState('')
      const id=props.ide;
   
      const getetudiant=async(id)=>{
          try{
              const response= await getEtudiant(id)
            
              setEtudiants(response.data)
              setnom(etudiants[0].nom)
  
          }catch(err)
          {
              //console.error(err.message)
          }
       }
       useEffect(()=>{
          getetudiant(id)
      })
      return(
          <Fragment>
            <tr>
              <td align='center'>{etudiants[0] && etudiants[0].number}</td>
              <td align='center'>{etudiants[0] && etudiants[0].opt}</td>
              <td align='center'>{etudiants[0] && etudiants[0].nom}</td>      
                <Aziz align='center'
                  nom={nom} ide={props.ide} />
              
            </tr> 
        </Fragment>
      )}


const Jury = (props) => {
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(true)
  const [protectedData,setProtectedData]=useState(null)
  const Navigate = useNavigate();
  const [currentDate,setcurrentDate]=useState('');
  const [jury,setjury]=useState([])
  const [open, setOpen] =useState(false);
  const [test,settest]=useState(false)
  const [test2,settest2]=useState(true)
  const [test3,settest3]=useState(false)
  const [notes, setnotes] =useState([]);

  function timeout(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }


   const getjury = async() => {
    try{
      
      const id=localStorage.getItem('id')
      const response= await fetch(`http://localhost:8000/api/getjury/${id}`)
      const jsonData=await response.json()
      setjury(jsonData)
      console.log("jury",jsonData)
      }catch(err)
      {
         console.error(err.message)
      }
   }


   const getjurynote = async (id) => {
    
    try {
      const res = await axios.get(`http://localhost:8000/api/getjurynote/${id}`)
      setnotes(res.data[0])
    }catch(e)
    {
        console.error(e.message)
    }
  }

  const modiftest = (test3) => {
    settest3(test3)
  }

  const logout=async ()=>{
      try{
          await onLogout()
          dispatch(unauthenticateUser())
          localStorage.removeItem('isAuthenticated')
      }catch(error)
      {
          //console.log(error)
      }}
    const protectedInfo=async()=>{
      try{
          const {data}=await fetchProtectedInfo()
          setProtectedData(data.info)
          setLoading(false)
      }
      catch(error)
      {
          logout()
      }
    }  
  useEffect(()=>{
      protectedInfo();       
      getjury();
  },[])

  const check2 = () => {
    {jury.map((key) => {
      getjurynote(key.e_id)
      if (notes===undefined)
      {
        settest2(false)
      }
    })}
  }

  useEffect(()=>{
    check2()
  })

  useEffect(() => { 
      var date = new Date().getDate()
      var month = new Date().getMonth() + 1 
      var year = new Date().getFullYear()
      setcurrentDate(
        date + '/' + month + '/' + year
      )
     },[]);
       

    return  (
    
           
        <div>
        <Navbar logout={logout}/>
        <Layout>
      <React.Fragment>
      <div align="center"><h1 >Jury Space</h1></div><br /><br />
        <h4 align="center" id="date">jury date {currentDate}</h4><br />
       
        
          <div style={{alignItems:"center" }}>
          <p id="parent-modal-description"></p>
          <DialogTitle style={{color:'#1f4b77', fontFamily:"cursive", fontWeight:"bold", fontSize:"25px"}} > </DialogTitle>
          </div>

        <table className="table2">
                <thead><tr><td align="center" >N°</td>
                <td align="center" className='head container'>Opt.</td>
                <td align="center" className='head container'>Elève Ingénieur</td>
                <td align="center" className='head container'>N1 Encadrant</td>
                <td align="center" className='head container'>N2 Rapporteur</td>
                <td align="center" className='head container'>N3 Superviseur</td>
                <td align="center" className='head container'>N4 Qualité</td>
                <td align="center" className='head container'>N5 Question</td>
                <td align="center" className='head container'>Moyenne</td>
                <td align="center" className='head container'>Publiable</td>
                <td align="center" className='head container'></td>
                <td align="center" className='head container'></td>
                </tr></thead>
                <br />
              <tbody align='center'>
                {jury.map(row=>(
                  <Fetc ide={row.e_id} ></Fetc>
                  
                     ))}
              </tbody> 
            </table>
           
       <br />
        {test2 &&(<div align='center'><Button variant="contained"><a href='/editpv' id='pv'>edit pv</a></Button></div>)}
       
      </React.Fragment>
      </Layout>
  </div>
    )}
export default Jury