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

exports.postFiche= async (req,res)=>{
    const{e_id,csituation,cmethode,crapport,crq,rsituation,rmateriel,rlangage,rrq,dniveau,dassiduite,drh,drq,numero}=req.body
    
    try{
        
        
        await db.query('insert into fiche(e_id,csituation,cmethode,crapport,crq,rsituation,rmateriel,rlangage,rrq,dniveau,dassiduite,drh,drq,numero) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',
        [e_id,csituation,cmethode,crapport,crq,rsituation,rmateriel,rlangage,rrq,dniveau,dassiduite,drh,drq,numero])
        return res.status(201).json({
            success:true,
            message:'Valide'
        })
   
    }
    catch(error){
     console.log(error.message)
     return res.status(500).json({
        error:error.message
     })
    }
}
exports.getfiche= async (req,res)=>{
    const {id}=req.params
    try{
       const fiche= await db.query('select * from fiche  where e_id=$1  ',[id])
       return res.status(200).json(fiche.rows)
        
       
    }
    catch(error){
     console.log(error.message)
    }
}
exports.putFiche= async (req,res)=>{
    const{e_id,csituation,cmethode,crapport,crq,rsituation,rmateriel,rlangage,rrq,dniveau,dassiduite,drh,drq,numero}=req.body
    
    try{
        
        
        await db.query('update  fiche set csituation=$2, cmethode=$3, crapport=$4, crq=$5, rsituation=$6, rmateriel=$7, rlangage=$8, rrq=$9, dniveau=$10, dassiduite=$11, drh=$12, drq=$13 where e_id=$1 and numero=$14',
        [e_id,csituation,cmethode,crapport,crq,rsituation,rmateriel,rlangage,rrq,dniveau,dassiduite,drh,drq,numero])
        return res.status(201).json({
            success:true,
            message:'Updated'
        })
   
    }
    catch(error){
     console.log(error.message)
     return res.status(500).json({
        error:error.message
     })
    }
}

exports.postnote= async (req,res)=>{
    const{e_id, assiduite, conception, rapport, realisation, note, justification}=req.body
    try{
    
        await db.query('insert into note(e_id, assiduite, conception, rapport, realisation, note, justification) values ($1,$2,$3,$4,$5,$6,$7)',[e_id, assiduite, conception, rapport, realisation, note, justification])
        return res.status(201).json({
            success:true,
            message:'valide'
        })
   
    }
    catch(error){
     console.log(error.message)
     return res.status(500).json({
        error:error.message
     })
    }
}

exports.putnote= async (req,res)=>{
    const{e_id, assiduite, conception, rapport, realisation, note, justification}=req.body
    try{
    
        await db.query('update note set assiduite=$2, conception=$3, rapport=$4, realisation=$5, note=$6, justification=$7 where e_id=$1',[e_id, assiduite, conception, rapport, realisation, note, justification])
        return res.status(201).json({
            success:true,
            message:'Updated'
        })
   
    }
    catch(error){
     console.log(error.message)
     return res.status(500).json({
        error:error.message
     })
    }
}

exports.getnote= async (req,res)=>{
    const {id}=req.params
    try{
       const notes= await db.query('select * from note  where e_id=$1  ',[id])
       return res.status(200).json(notes.rows)
        
       
    }
    catch(error){
     console.log(error.message)
    }
}