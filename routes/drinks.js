const express = require('express'); 
const router = express.Router(); 
const drinksCtrl = require('../controllers/drinks'); 

router.get('/', drinksCtrl.index); 
router.get('/new', drinksCtrl.new); 
router.get('/:id', drinksCtrl.show); 
router.get('/drinks/:id/edit', drinksCtrl.edit);
router.post('/update/:drinkId', function(req){
    console.log('successful')
    console.log(req.params.drinkId)
})

router.post('/new', drinksCtrl.create); 

module.exports = router; 