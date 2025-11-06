const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
      name: {
        type: String,
        require: true
      },
      username: {
        type: String,
        unique: true,
        require: true
      },
      email: {
        type: String,
        unique: true,
        require: true
      },
      password: {
        type: String,
        require: true
      },
      time:{
        type: Date,
        default: Date.now,
        required: false
    }
  }
);

module.exports = mongoose.model("Users",UserSchema);