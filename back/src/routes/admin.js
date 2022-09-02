const {Router}=require('express')

const {getetudiants,getjury,getsup,postetudiant,postjury,postsuperviseur,getetudiantsaffectedjury,getetudiantsaffectedsup} =require('../controllers/admin');

const router=Router()


router.get('/getetudiants',getetudiants);
router.get('/getsup',getsup);
router.get('/getjury',getjury);
router.get('/getjuryaffected',getetudiantsaffectedjury);
router.get('/getsupaffected',getetudiantsaffectedsup);
router.post('/postetudiant',postetudiant);
router.post('/postsuperviseur',postsuperviseur);
router.post('/postjury',postjury);







module.exports=router