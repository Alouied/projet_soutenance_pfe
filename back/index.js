const express=require("express")
const app=express()
const cors=require("cors")
const route=require("./routetudiant")
const sitebase=require("./basedonnee")
const bodyparser=require("body-parser")
app.use(express.json());
app.use(route);
app.use(cors());
app.get("/home",(req, res,next)=>{
    sitebase.query("SELECT * FROM users ",
   (error,user)=>{if (error){ console.log(error);}
   else {console.log(user.rows);
         res.json(user.rows)}
    //next();
})}
);

app.post("/home",(req, res,next)=>{
   const {nom,email,password,jury,superviseur,admin}=req.body;
   sitebase.query("INSERT INTO users (name,email,password,jury,superviseur,admin) VALUES ($1,$2,$3,$4,$5,$6)",[nom ,email,password,jury,superviseur,admin],
   (error,user)=>{if (error){ console.log(error);}
   else {console.log("success");}
})
}

);
app.listen(5001, () => {
    console.log(`running seprver on 5000`);
  });
