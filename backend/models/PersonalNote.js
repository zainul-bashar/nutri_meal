const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalNoteSchema = new Schema({
    
    username: {
        type: String,
        require: true
    },
    dishName: {
        type: String,
        require: true
    },
    ingredient: {
        type: String,
        require: true
    },
    cookingInstruction: {
        type: String,
    },
    cookingTime: {
        type: String,
    },
    nutrients: {
        type: String, 
    },
    category: {
        type: String,
        require: true
    },
    time:{
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = mongoose.model("PersonalNote",PersonalNoteSchema);