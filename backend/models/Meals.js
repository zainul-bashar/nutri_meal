const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Meals = new Schema({
    
    username: {
        type: String,
    },
    dishName: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    ingredient: {
        type: String,
        require: true
    },
    nutrients: {
        type: String, 
        require: true
    },
    cookingInstruction: {
        type: String,
    },
    cookingTime: {
        type: String,
    },
    cookingUrl: {
    type: String,
    trim: true,
    match: [/^(http|https):\/\/[^\s$.?#].[^\s]*$/i, 'Please enter a valid profile link starting with http:// or https://'],
    
  },
    time:{
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = mongoose.model("Meals", Meals);