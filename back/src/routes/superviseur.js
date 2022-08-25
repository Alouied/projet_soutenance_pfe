const {Router}=require('express')

const {getEtudiant,getsuperviseurs} =require('../controllers/superviseur')
const router=Router()


router.get('/getetudiant/:id',getEtudiant);
router.get('/superviseur/:id',getsuperviseurs);






module.exports=router