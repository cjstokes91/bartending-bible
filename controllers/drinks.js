const Drink = require('../models/drink');

module.exports = {
    index,
    new: newDrink,
    create,
    show,
    delete: deleteDrink,
    editDrink
}
function index(req, res) {
    Drink.find({}, function (err, drinks) {
        res.render('drinks/index', { title: 'All Drinks', drinks, user: req.user });
    });
}
function newDrink(req, res) {
    console.log("HITTING")
    res.render('drinks/new', { title: 'New Drink', user: req.user });
}
function create(req, res) {
    console.log("HITTING CREATE")
    req.body.user = req.user.name
    const drink = new Drink(req.body);
    drink.save(function (err) {
        if (err) {
            console.log(err)
            res.redirect('/drinks/new')
        } else {
            res.redirect('/drinks')
        }
    })
}
function show(req, res) {
    Drink.findById(req.params.id, function (err, drink) {
        res.render('drinks/show', { drink, user: req.user })
    });
}
function deleteDrink(req, res) {
    Drink.findByIdAndDelete(req.params.id, function (err, deleteDrink) {
        console.log("Delete Drink: ", deleteDrink)
        res.redirect('/drinks');
    })
};
function editDrink(req, res) {
    Drink.findByIdAndUpdate(req.params.id, req.body, function (err, editDrink) {
        console.log("Edit Drink: ", editDrink)
        res.redirect('/drinks');
    })
}