const Drink = require('../models/drink'); 

module.exports = { 
    index,
    new: newDrink,
    create,
    show,
    delete: deleteDrink,
    edit
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
        res.render('drinks/show', {drink, user: req.user})
    });
}
function deleteDrink(req, res) { 
    Drink.findByIdAndDelete(req.params.id, function(err, deleteDrink){
        console.log("Delete Drink: ", deleteDrink)
        res.redirect('/drinks');
    })
    };
function edit(req, res) { 
    Drink.findByOneAndUpdate(req.params.id, function(err,drink){ 
        console.log('hello')
        if (!drink.user.equals(req.user_id)) return res.redirect('/drinks');
        res.render('/drinks/:id/update', {drink});
    })
}