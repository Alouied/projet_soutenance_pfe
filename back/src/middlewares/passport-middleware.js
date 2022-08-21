const db=require('../db/basedonnee')
const passport=require('passport')
const {Strategy}=require('passport-jwt')
const {SECRET}=require('../constants/index')
const cookieExtractor = function(req)
{
    let token=null
    if(req && req.cookies) token=req.cookies['token']
    return token
}
const opts={
    secretOrKey:SECRET,
    jwtFromRequest:cookieExtractor,
}
passport.use(
    new Strategy(opts,async({id},done)=>{
        try{
            const {rows}=await db.query('SELECT * FROM users WHERE user_id=$1',[id])
            if (!rows.length)
            {
                throw new Error('401 not authorized')
            }
            let user={id:rows[0].user_id,email:rows[0].email,jury:rows[0].jury,adm:rows[0].adm,sup:rows[0].sup}
            return await done(null,user)
        }catch(error)
        {
          console.log(error.message)
          done(null,false)
        }
    })
)