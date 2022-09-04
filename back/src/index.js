const express=require("express")
const multer=require("multer") 

const app=express()
const {PORT, CLIENT_URL}=require('./constants')
const cookieParser=require('cookie-parser')
const passport=require('passport')
const cors=require('cors')
//import passport middleware
require('./middlewares/passport-middleware')
//initialize middlewares

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:CLIENT_URL,credentials:true}))
app.use(passport.initialize())
//import routes
const authRoutes=require('./routes/auth')
const supRoutes=require('./routes/superviseur')
const adminRoutes=require('./routes/admin')
const juryRoutes=require('./routes/jury')
//initialize routes
app.use('/api',authRoutes)
app.use('/api',supRoutes)
app.use('/api',adminRoutes)
app.use('/api',juryRoutes)
//files pdf

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname)
    }
})

const upload=multer({storage}).single('file');

app.post('api/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});



//app start
const appStart = () => {
    try{
        app.listen(PORT,()=>{
            console.log(`The app is running at http://localhost:${PORT}`)
        })
    }
    catch (error)
    {
        console.log(`Error:${error.message}`)
    }
}
appStart()
