import Layout from "../component/layout"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { fetchProtectedInfo,onLogout } from "../api/auth"
import { unauthenticateUser } from "../redux/slices/authSlice"
import * as React from 'react'
import { useEffect, useState,useRef, Component, Fragment } from 'react'
import { Link, Route, Routes,Switch, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import "../cssfiles/table.css"
import {useReactToPrint} from 'react-to-print'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
import {FileUploader} from "./files"

function Aziz(props) {
    const [open, setOpen] =useState(false);
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
   
    const [notes,setnotes]=useState({})
    const [values1,setvalues1]=useState({
      e_id:0,
      n1encadrant:0,
      n2rapporteur:0,
      n3superviseur:0,
      n4qualite:0, 
      n5question:0,
      moyenne:0, 
      publiable:''
    })
    values1.e_id=props.ide
    values1.moyenne=values1.n1encadrant/5+values1.n2rapporteur/5+values1.n4qualite/5+values1.n3superviseur/5+values1.n5question/5
  
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
      })

     return (
      <Fragment>
        <td align='center' >{notes?.n1encadrant}</td>
        <td align='center' >{notes?.n2rapporteur}</td>
        <td align='center' >{notes?.n3superviseur}</td>
        <td align='center' >{notes?.n4qualite}</td>
        <td align='center' >{notes?.n5question}</td>
        <td align='center' >{notes?.moyenne}</td>
        <td align='center' >{notes?.publiable}</td>

      </Fragment>
     )}

     function Aziz1(props) {
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
       
        const [notes,setnotes]=useState({})
        const [values1,setvalues1]=useState({
          e_id:0,
          n1encadrant:0,
          n2rapporteur:0,
          n3superviseur:0,
          n4qualite:0, 
          n5question:0,
          moyenne:0, 
          publiable:''
        })
        values1.e_id=props.ide
        values1.moyenne=values1.n1encadrant/5+values1.n2rapporteur/5+values1.n4qualite/5+values1.n3superviseur/5+values1.n5question/5
      
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
          })
    
         return (
          <Fragment>
            <td align='center' >{notes?.moyenne}</td>
            <td align='center' >{notes?.publiable}</td>
    
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
                console.error(err.message)
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

        const Fetc1=(props)=>{
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
                      <Aziz1 align='center'
                        nom={nom} ide={props.ide} />
                    
                  </tr> 
              </Fragment>
            )}

const Editpv=()=>{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    const [test,settest]=useState(false)
    const [protectedData,setProtectedData]=useState(null)
    const Navigate = useNavigate();
    const [jury,setjury]=useState([])
    const [membre1,setmembre1]=useState([])
    const [membre2,setmembre2]=useState([])
    const [pres,setpres]=useState({})
    const [currentDate,setcurrentDate]=useState('');
    const componentRef=useRef();
    const nom = localStorage.getItem('nom')
    const handleprint =useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'dossier',
        
      })
   

       
    const getmembre1 = async (id1) => {
        try{
            const res1 = await axios.get(`http://localhost:8000/api/getuser/${id1}`)
            setmembre1(res1.data[0])
            console.log("data",res1.data[0])
        }catch(err)
        {
            console.log("fail")
            console.log(err.message)
        }
    }
    useEffect(()=>{
        getmembre1(pres.membre1);
    })

    const getmembre2 = async (id2) => {
        try{ 
            const res2 = await axios.get(`http://localhost:8000/api/getuser/${id2}`)
            setmembre2(res2.data[0])
           
        }catch(err)
        {
            console.log("fail")
            console.log(err.message)
        }
    }
    useEffect(()=>{
        getmembre2(pres.membre2);
    })

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
        getjury();
    },[])


    const getjury = async() => {
        try{
          const id=localStorage.getItem('id')
          const response= await fetch(`http://localhost:8000/api/getjury/${id}`)
          const jsonData=await response.json()
          setjury(jsonData)
          
          setpres(jsonData[0])
          }catch(err)
          {
             console.error(err.message)
          }
       }

       useEffect(() => { 
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1 
        var year = new Date().getFullYear()
        setcurrentDate(
          date + '/' + month + '/' + year
        )
       },[]);

    return loading ? (
        <Layout>
            <h1>loading ...</h1>
        </Layout>
    ):(<div>
         <Navbar logout={logout}/>
            <Layout>
               
            <React.Fragment >
                <div ref={componentRef} align='center'>
            <Paper sx={{ width: '905px',height:'1200px', overflow: 'hidden', align:'center' }}>
              <div id='marge'>
                <div className="divu">
                <div id='text'><p>UNIVERSITE DE LA MANOUBA École Nationale des Sciences de l’Informatique</p></div>
                <div><img src="ensilogo.jpg"/></div>
                <div id='text'><p>DIRECTION DES STAGES Année Universitaire 2020/2021</p></div></div>
                <div align="left"> <p id='ines'>Tunis le {currentDate}</p></div>
                <div id='text1'><h5><i><a>Procès-Verbal</a><br></br><a>de validation des Projets de Fin d’Études </a><br></br>pour l’année universitaire 2021-2022 Session de Juin</i></h5></div>
                <br></br><div id='fu'>  Après examen des rapports et des exposés des élève-ingénieurs
                   II3 dans le cadre de la </div>validation de
                    leurs projets de fin d’études du mercredi 22 et jeudi 23 juin 2022, le jury composé de :<br></br>
                <div className="jl" align="left"><a>President :<strong> {nom}</strong></a>
                <a>Membres : <strong>{membre1?.nom}</strong></a>
                <a><strong>{membre2?.nom}</strong></a></div>
                <p align="left">Déclarent les résultats suivants : </p>
                <TableContainer>
                    <div align='center'>
                 <table align='center' className="styled-table" >
                  <thead>
                    <tr>
                      <td>N°</td>
                      <td>Opt.</td>
                      <td>Elève-Ingénieur </td>
                      <td>N1</td>
                      <td>N2</td>
                      <td>N3</td>
                      <td>N4</td>
                      <td>N5</td>
                      <td>Moy</td>
                      <td>Observation</td>
                    </tr>
                  </thead>
                  <tbody>
                  {jury.map(row=>(
                  <Fetc ide={row.e_id} ></Fetc>
                     ))}
                  </tbody>
                 </table>
            </div>
                 </TableContainer>
                 </div>
                 </Paper><br></br><br></br><br></br>
                 <Paper sx={{ width: '905px', overflow: 'hidden', align:'center' }}>
              <div id='marge'>
                <div className="divu">
                <div id='text'><p>UNIVERSITE DE LA MANOUBA École Nationale des Sciences de l’Informatique</p></div>
                <div><img src="ensilogo.jpg"/></div>
                <div id='text'><p>DIRECTION DES STAGES Année Universitaire 2020/2021</p></div></div>
               <div align="left"  > <p id='ines'>Tunis le {currentDate}</p></div>
                <div id='text1' ><h5><i><a>Procès-Verbal</a><br></br><a>de validation des Projets de Fin d’Études </a><br></br>pour l’année universitaire 2021-2022 Session de Juin</i></h5></div>
                <br></br><div id='fu' >  Après examen des rapports et des exposés des élève-ingénieurs
                   II3 dans le cadre de la </div>validation de
                    leurs projets de fin d’études du mercredi 22 et jeudi 23 juin 2022, le jury composé de :<br></br>
                    <div className="jl" align="left"><a>President :<strong> {nom}</strong></a>
                <a>Membres : <strong>{membre1?.nom}</strong></a>
                <a><strong>{membre2?.nom}</strong></a></div>
                <p align="left">Déclarent les résultats suivants : </p>
                <TableContainer >
                    <div align='center'>
                 <table align='center' className="styled-table" >
                  <thead>
                    <tr>
                      <td>N°</td>
                      <td>Opt.</td>
                      <td>Elève-Ingénieur </td>
                      <td>Moy</td>
                      <td>Observation</td>
                    </tr>
                  </thead>
                  <tbody>
                  {jury.map(row=>(
                  <Fetc1 ide={row.e_id} ></Fetc1>
                     ))}
                  </tbody>
                 </table>
                    </div>
                 </TableContainer>
                 </div>
                 </Paper><br></br>
                 </div>
                 <div align='center' >
                  <Button variant="contained"   onClick={handleprint}>imprimer</Button>
               
                  <FileUploader></FileUploader>
                
               
                 </div>
                 
                <br></br>
            </React.Fragment>
            </Layout>
       </div>
    )
}
export default Editpv