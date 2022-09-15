const {check}=require('express-validator')
const db=require('../db/basedonnee')
const {compare}=require('bcryptjs')

//password
const password=check('password').isLength({min:6,max:15}).withMessage('mot de passe doit etre entre 6 et 15 caracteres.')

//email
const email=check('email').isEmail().withMessage('Saisir un email valide')
//check if email exists
const emailExists=check('email').custom(async(value)=>{
    const {rows}=await db.query('select * from users WHERE email=$1',[value,])
    if (rows.length)
    {
        throw new Error('Email existe déja.')
    }
})
//login validation
const loginFieldsCheck=check('email').custom(async(value,{req})=>{
    const user=await db.query('SELECT * from users WHERE email=$1',[value])
    if(!user.rows.length)
    {
       throw new Error("Email n'existe pas")
    }
    const validPassword=await compare(req.body.password,user.rows[0].password)
    if(!validPassword)
    {
        throw new Error('Mot de passe incorrecte')
    }
    req.user=user.rows[0]
})
module.exports={
    registerValidation:[email,password,emailExists],
    loginValidation:[loginFieldsCheck],
}
