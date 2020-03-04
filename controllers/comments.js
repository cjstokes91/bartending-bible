const Drink = require('../models/drink');   

module.exports = { 
    create
}

function create(req, res) {
    console.log("HITTING COMMENT CREATE FUNCTION")
    Drink.findById(req.params.id, function(err, drink) {
      drink.comments.push(req.body);
      console.log("HERES THE DRINK: ", drink)
      drink.save(function(err) {
        res.redirect(`/drinks`);
      });
    });
  }