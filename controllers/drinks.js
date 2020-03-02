const Drink = require('../models/drink'); 


module.exports = { 
    index,
    new : newDrink,
    create,
    show
}

function index(req, res) { 
    Drink.find({}, function(err, drinks){ 
        res.render('drinks/index', {title: 'All Drinks', drinks, user: req.user});
    });
}

function newDrink(req, res) { 
    res.render('drinks/new', {title: 'New Drink', user: req.user}); 

}

function create(req, res) { 
    const drink = new Drink(req.body);
    drink.user = req.user._id; 
    drink.save(function(err){ 
        if(err) {
            console.log(err)
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