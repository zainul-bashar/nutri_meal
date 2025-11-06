const Users = require("../models/Users");

const verifyUsernameNemail = async ( username,email ) => {
        
    let userData;
    
  try{

    userData = await Users.findOne({
        $or: [{ username } , { email }]
    });

    if( userData && userData.email === email ){
        return "E";
    }
    else if( userData && userData.username === username ){
        return "U";
    }
    return null;
 }
 catch(err){
      return "Error";
 }
}

module.exports = { verifyUsernameNemail };