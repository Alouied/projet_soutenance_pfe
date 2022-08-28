const {Router}=require('express')

const {getEtudiant,getsuperviseurs,getfiche,postFiche,putFiche,postnote,putnote,getnote} =require('../controllers/superviseur')
const router=Router()


router.get('/getetudiant/:id',getEtudiant);
router.get('/superviseur/:id',getsuperviseurs);
router.post('/fiche',postFiche);
router.get('/getfiche/:id',getfiche);
router.post('/putfiche',putFiche);
router.post('/postnote',postnote);
router.post('/putnote',putnote);

router.get('/getnote/:id',getnote);





module.exports=router