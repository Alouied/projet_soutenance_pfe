import axios from 'axios'
axios.defaults.withCredentials=true

export default async function getEtudiant(id){
    return await axios.get(
        `http://localhost:8000/api/getetudiant/${id}`
        
    )
   
}
export  async function getnote(id){
    return await axios.get(
        `http://localhost:8000/api/getnote/${id}`
        
    )
   
}
export  async function validefiche(val){
    return await axios.post(
        'http://localhost:8000/api/fiche',val
        
    )
   
}
export  async function postnote(val){
    return await axios.post(
        'http://localhost:8000/api/postnote',val
        
    )
   
}
export  async function updatenote(val){
    return await axios.post(
        'http://localhost:8000/api/putnote',val
        
    )
   
}
export  async function updatefiche(val){
    return await axios.post(
        'http://localhost:8000/api/putfiche',val
        
    )
   
}
export  async function getfiche(id){
    return await axios.get(
        `http://localhost:8000/api/getfiche/${id}`
        
    )
   
}
