require('dotenv').config();
const express=require('express');
const app=express();
const cors=require("cors");
const database=require("./src/db/basedonnee")
//middlewares
app.use(express.json());
app.use(cors());
app.post("/register",(req, res,next)=>{
    const {nom,email,password,jury,superviseur,admin}=req.body;
    database.query("INSERT INTO users (name,email,password,jury,superviseur,admin) VALUES ($1,$2,$3,$4,$5,$6)",[nom ,email,password,jury,superviseur,admin],
    (error,user)=>{if (error){ console.log(error);}
    else {console.log("success");}
 })
 });
 app.post("/login",(req, res,next)=>{
    const {email,password}=req.body;
    database.query("SELECT * FROM users WHERE email=$1 AND password=$2" ,[email,password],
    (error,user)=>{if (error){ console.log(error);}
    if (user)
       {res.send(user);
    console.log("Logged in ");}
    else {res.send({message:"wrong combination"});}
    
 })
 });

const port= 5001;
app.listen(port,()=>console.log(`Listening on port ${port}...`))
