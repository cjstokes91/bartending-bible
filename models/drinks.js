const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const newDrinkSchema = new Schema({ 
    alcohol: { 
        type: String, 
        required: true
     },
     mix: { 
         type: String,
         required: true
    },
     instructions: { 
         type: String
     }

});

const drinkSchema = new mongoose.Schema({ 
    alcohol: { 
        type: String, 
        required: true
     },
     mix: { 
         type: String,
         required: true
    },
     instructions: { 
         type: String
     },
     newDrink: [newDrinkSchema]


    
});


module.exports = mongoose.model("Drink", drinkSchema);