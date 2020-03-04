const Comment = require('../models/comment'); 

module.exports = { 
    create,
}

function create(req, res) {
    Drink.findById(req.params.id, function(err, drink) {
      drink.comments.push(req.body);
      drink.save(function(err) {
        res.redirect(`/drinks/${drink._id}`);
      });
    });
  }