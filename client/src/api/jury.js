import axios from 'axios'
axios.defaults.withCredentials=true

export default async function getEtudiant(id){
    return await axios.get(
        `http://localhost:8000/api/jury/getetudiant/${id}`
        
    )
   
}
export async function getpv(){
    return await axios.get(
        'http://localhost:8000/api/getpv'
        
    )
   
}

export  async function postpv(val){
    return await axios.post(
       'http://localhost:8000/api/postpv',val
        
    )
   
}