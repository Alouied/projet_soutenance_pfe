const {Router}=require('express')

const {getjury,getEtudiant,poststudent,getjurynote,putstudent,postnotesencadrant,getnotesencadrant,putnotesencadrant,getnotes,getuser,getjurynotes} =require('../controllers/jury')
const router=Router()

router.get('/getjury/:id',getjury)
router.get('/jury/getetudiant/:id',getEtudiant)
router.post('/poststudent',poststudent)
router.get('/getjurynote/:id',getjurynote)
router.get('/getnotes',getnotes)
router.get('/getuser/:id',getuser)
router.get('/getjurynotes',getjurynotes)
router.post('/putstudent',putstudent)
router.get('/getnotesencadrant/:id',getnotesencadrant)
router.post('/postnotesencadrant',postnotesencadrant)
router.post('/putnotesencadrant',putnotesencadrant)

module.exports=router