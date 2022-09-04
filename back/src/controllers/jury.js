const db=require('../db/basedonnee')
 
 exports.getjury= async (req,res)=>{
    const {id}=req.params
   
    try{
        const etudiant= await db.query('select * from jury where president = $1',[id])
       return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getuser= async (req,res)=>{
    const {id}=req.params
   
    try{
        const etudiant= await db.query('select * from users where user_id = $1',[id])
       return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getEtudiant= async (req,res)=>{
    const {id}=req.params
    try{
        const etudiant= await db.query('select * from etudiants  where id=$1',[id])
       return res.status(200).json(etudiant.rows)
        
       
    }
    catch(error){
     console.log(error.message)
    }
}

exports.poststudent = async (req,res)=>{
    const {e_id,n1encadrant,n2rapporteur,n3superviseur,n4qualite,n5question,moyenne,publiable}=req.body;
    try{
        await db.query('insert into jurynote (e_id,n1encadrant,n2rapporteur,n3superviseur,n4qualite,n5question,moyenne,publiable) values ($1,$2,$3,$4,$5,$6,$7,$8)',[e_id,n1encadrant,n2rapporteur,n3superviseur,n4qualite,n5question,moyenne,publiable])
        console.log('base updated')
    }
    catch(error){
     console.log(error.message)
    }
}

exports.putstudent = async (req,res)=>{
    const {e_id,n1encadrant,n2rapporteur,n3superviseur,n4qualite,n5question,moyenne,publiable}=req.body;
    try{
        await db.query('update jurynote set n1encadrant=$2, n2rapporteur=$3,n3superviseur=$4, n4qualite=$5, n5question=$6, moyenne=$7, publiable=$8 where e_id=$1 ',[e_id,n1encadrant,n2rapporteur,n3superviseur,n4qualite,n5question,moyenne,publiable])
        console.log('jury notes updated')
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getjurynote= async (req,res)=>{
    const {id}=req.params
   
    try{
        const etudiant= await db.query('select * from jurynote where e_id = $1',[id])
        return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getjurynotes= async (req,res)=>{
   
    try{
        const etudiant= await db.query('select * from jurynote')
        return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getnotes= async (req,res)=>{
   
    try{
        const etudiant= await db.query('select * from jurynote')
        return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.getnotesencadrant= async (req,res)=>{
    const {id}=req.params
   
    try{
        const etudiant= await db.query('select * from noteencadrant where e_id = $1',[id])
        return res.status(200).json(etudiant.rows)
    }
    catch(error){
     console.log(error.message)
    }
}

exports.postnotesencadrant = async (req,res)=>{
    const {e_id,note1,note2,note3,note4,note5,note6,note7,notefinale}=req.body;
    try{
        await db.query('insert into noteencadrant (e_id,note1,note2,note3,note4,note5,note6,note7,notefinale) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[e_id,note1,note2,note3,note4,note5,note6,note7,notefinale])
        console.log('N1 encadrant updated')
        res.json('N1 encadrant updated')
    }
    catch(error){
     console.log(error.message)
    }
}

exports.putnotesencadrant = async (req,res)=>{
    const {e_id,note1,note2,note3,note4,note5,note6,note7,notefinale}=req.body;
    try{
        await db.query('update noteencadrant set note1=$2, note2=$3,note3=$4,note4=$5, note5=$6, note6=$7, note7=$8, notefinale=$9 where e_id=$1',[e_id,note1,note2,note3,note4,note5,note6,note7,notefinale])
        console.log('noteencadrant notes updated')
    }
    catch(error){
     console.log(error.message)
    }
}


