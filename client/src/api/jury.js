import axios from 'axios'
axios.defaults.withCredentials=true

export default async function getEtudiant(id){
    return await axios.get(
        `http://localhost:8000/api/jury/getetudiant/${id}`
        
    )
   
}