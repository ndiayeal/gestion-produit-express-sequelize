const express = require('express');
const router = express.Router();

const {inscriptionPage, inscription, connexionPage, connexion} = require('../controllers/utilisateur.controller');


router.get('/connexion', connexionPage);
router.post('/connexion', connexion);

router.get('/inscription', inscriptionPage);
router.post('/inscription', inscription);

module.exports = router;