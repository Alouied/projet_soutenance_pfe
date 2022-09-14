const db=require('../db/basedonnee')


  
  
 exports.postsuperviseur= async (req, res)=>{
    const {e_id,sup_id}=req.body
  try {    
  
  
     await db.query('INSERT INTO superviseurs (e_id,sup_id)VALUES($1,$2);',[e_id,sup_id])
    return res.status(201).json({
      success:true,
      message:'Added successfully'
  })
    }
    catch(err){
      console.log(err.message)
    } 
  };
  exports.postjury= async (req, res)=>{
    const {e_id , president,membre1,membre2,date,heure}=req.body
  try {    
  
  
     await db.query('INSERT INTO jury (e_id , president,membre1,membre2,date,heure)VALUES($1,$2,$3,$4,$5,$6);',[e_id, president,membre1,membre2,date,heure])
    return res.status(201).json({
      success:true,
      message:'Added successfully'
  })
    }
    catch(err){
      console.log(err.message)
    } 
  };
  
  exports.postetudiant= async (req, res)=>{
    const {nom,number,opt,ns,organisme,sujet}=req.body
  try {    
  
  
    await db.query('INSERT INTO etudiants (nom,number,opt,ns,organisme,sujet)VALUES($1,$2,$3,$4,$5,$6);',[nom,number,opt,ns,organisme,sujet])
    return res.status(201).json({
      success:true,
      message:'Added successfully'
  })
    }
    catch(error){
      console.log(error.message)
      return res.status(500).json({
         error:error.message
      })
     }
  };
  
  

  
 exports.getjury= async(req,res)=>{
    try{
    const jury = await db.query("SELECT * from users where jury = true")
   return  res.status(200).json(jury.rows);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  

  exports.getetudiants= async(req,res)=>{
    
    try{
    const etudiants = await db.query("SELECT * from etudiants ")
   return  res.status(200).json(etudiants.rows);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  exports.getetudiantsaffectedsup= async(req,res)=>{
    
    try{
    const etudiants = await db.query("SELECT * from superviseurs ")
   return  res.status(200).json(etudiants.rows);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  exports.getetudiantsaffectedjury= async(req,res)=>{
    
    try{
    const etudiants = await db.query("SELECT * from jury ")
   return  res.status(200).json(etudiants.rows);
  
    } catch (err) {
      console.error(err.message);
    }
  };
  
  exports.getsup= async(req,res)=>{
    try{
    const sup = await db.query("SELECT * from users where sup = true")
   return  res.status(200).json(sup.rows);
    
    } catch (err) {
      console.error(err.message);
    }
  };
 