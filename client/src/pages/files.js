
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'
import {postpv } from "../api/jury";


export const FileUploader=()=>{
    const [file,setFile]=useState(null);
    const [nom,setnom]=useState({
        pvurl:''
    });
const onchange=(e)=>{
   
    setFile(e.target.files[0])
    setnom({...nom,pvurl:e.target.files[0].name})
 
} 
console.log("nom:",nom)
const onsubmit=async(e)=>{
    e.preventDefault();

    const data=new FormData();
    data.append('file',file);

  
    
   await axios.post('http://localhost:8000/api/upload',data).then((response)=>{
        toast.success('Upload Success')
       const { fileNom }= postpv(nom)
        console.log("mess",response.data)
       
    }).catch((e)=>{
        toast.error('Error',e)
    })
}

return (
   <form method="post" action='#' id='#' onSubmit={onsubmit}>
    <div className="form-group files">
        <input type="file" onChange={onchange} className="form-control" />
        <button type="submit">submit</button>
       
    </div>
   </form>
)


};