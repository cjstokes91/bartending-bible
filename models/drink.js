const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const commentSchema = new Schema({
        content: String,
    }, {
        timestamps: true
});

const drinkSchema = new mongoose.Schema({ 
    user: { 
        type: String, 
        
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
     comments: [commentSchema]
});

module.exports = mongoose.model("Drink", drinkSchema);