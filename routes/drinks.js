const express = require('express'); 
const router = express.Router(); 
const drinksCtrl = require('../controllers/drinks'); 

router.get('/', drinksCtrl.index); 
router.get('/new', drinksCtrl.new); 
router.get('/:id', drinksCtrl.show); 
router.post('/:id/update', drinksCtrl.editDrink);
router.post('/new', drinksCtrl.create);
router.delete('/:id', drinksCtrl.delete);  

module.exports = router; 