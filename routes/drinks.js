const express = require('express'); 
const router = express.Router(); 
const drinksCtrl = require('../controllers/drinks'); 

router.get('/', drinksCtrl.index); 
router.get('/new', drinksCtrl.new); 
router.get('/:id', drinksCtrl.show); 
router.get('/drinks/:id/edit', drinksCtrl.edit);
router.post('/drinks/:id/update', function(req){
    console.log('successful')
})
router.post('/new', drinksCtrl.create);
router.delete('/:id', drinksCtrl.delete);  

module.exports = router; 