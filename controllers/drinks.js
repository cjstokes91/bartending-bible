const Drink = require('../models/drink'); 


module.exports = { 
    index,
    new : newDrink,
    create,
    show
}

function index(req, res) { 
    Drink.find({}, function(err, drinks){ 
        res.render('drinks/index', {title: 'All Drinks', drinks});
    });
}

function newDrink(req, res) { 
    res.render('drinks/new', {title: 'Add New Drink'}); 

}

function create(req, res) { 
    const drink = new Drink(req.body); 
    drink.save(function(err){ 
        if(err) { 
            res.redirect('/drinks/new')
        }else{ 
            res.redirect('/drinks')
        }
    }) 
} 

function show(req, res) { 
    Drink.findById({}, function(err, drink){ 
        res.render('drinks/show', {drink})
    });
}