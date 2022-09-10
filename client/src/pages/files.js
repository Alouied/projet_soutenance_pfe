
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'
import {postpv } from "../api/jury";
import { Button } from "@mui/material";


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
const upload=()=>{
    document.getElementById('selectedfile').click()
}
return (
   <form method="post" action='#' id='#' onSubmit={onsubmit}>
    <div className="form-group" style={{display:'inline'}}>
      <Button onClick={upload} > <img src="upload.png" style={{maxWidth:'50px',border:'solid 3px'}}></img><input type="file" id='selectedfile' variant="contained" style={{border:'none',backgroundColor:'transparent' ,display:'none',width:'80%',margin:'10px'}} onChange={onchange} className="form-control" /> </Button> 
       
        <Button variant="contained"  type="submit">submit</Button>
       
    </div>
   </form>
)


};