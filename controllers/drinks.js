const Drink = require('../models/drink'); 


module.exports = { 
    index,
    new : newDrink,
    create,
    show
}

function index(req, res) { 
    Drink.find({user: req.user._id}, function(err, drinks){ 
        res.render('drinks/index', {title: 'My Drinks', drinks, user: req.user});
    });
}

function newDrink(req, res) { 
    res.render('drinks/new', {title: 'Add New Drink'}); 

}

function create(req, res) { 
    const drink = new Drink(req.body);
    drink.user = req.user._id; 
    drink.save(function(err){ 
        if(err) { 
            res.redirect('/drinks/new')
        }else{ 
            res.redirect('/drinks')
        }
    }) 
} 

function show(req, res) { 
    Drink.findById(req.params.id, function(err, drink){ 
        res.render('drinks/show', {drink})
    });
}