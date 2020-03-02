const express = require('express'); 
const router = express.Router(); 
const drinksCtrl = require('../controllers/drinks'); 

router.get('/', drinksCtrl); 
router.get('/new', drinksCtrl); 
router.get(':id', drinksCtrl); 
router.post('/', drinksCtrl); 

module.exports = router; 