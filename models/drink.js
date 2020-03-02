const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const drinkSchema = new mongoose.Schema({ 
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    name: { 
        type: String, 
        required: true
    },
    alcohol: { 
        type: String, 
        required: true
     },
     mix: { 
         type: String         
    },
     instructions: { 
         type: String
     },
});

module.exports = mongoose.model("Drink", drinkSchema);