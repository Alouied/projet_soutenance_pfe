const db=require('../db/basedonnee')


exports.getsuperviseurs= async (req,res)=>{
    const {id}=req.params
   
    try{
        const etudiant= await db.query('select *from superviseurs where sup_id=$1',[id])
       return res.status(200).json(etudiant.rows)
        
       
    }
    catch(error){
     console.log(error.message)
    }
}
exports.getEtudiant= async (req,res)=>{
    const {id}=req.params
    try{
        const etudiant= await db.query('select *from etudiants  where id=$1',[id])
       return res.status(200).json(etudiant.rows)
        
       
    }
    catch(error){
     console.log(error.message)
    }
}