const User = require("../models/Users");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { verifyUsernameNemail } = require("../utils/verifyUsernameNemail");
const BCRYPT_SALT = parseInt( process.env.BCRYPT_SALT );

const registerUser = async (req,res) => {

    const isValid = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().min(3).max(30).alphanum().required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().email()
    }).validate(req.body, { abortEarly: false, allowUnknown: false });

    if( isValid.error){
        return res.status(400).send({
            status: 400,
            message: "Invalid Input!",
            data: isValid.error
        });
    }

    const verifyingUserNameNemail = await verifyUsernameNemail( 
        req.body.username, 
        req.body.email
    );
     if( verifyingUserNameNemail === "E" ){
        return res.status(400).send({
            status: 400,
            message: "Email already exists"
        })
     }
     else if ( verifyingUserNameNemail === "U" ){
        return res.status(400).send({
            status: 400,
            message: "Username already exists"
        })
     }
     else if( verifyingUserNameNemail === "Error" ){
        return res.send(400).send({
            status: 400,
            message: "DB error: verifying user name or email"
        })
     }

    const hashedPassword = await bcrypt.hash(req.body.password, BCRYPT_SALT);

    const userObj = new User({

        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword

    });

    try{
       
        userObj.save();
        res.status(201).send({
            status: 201,
            message: "User created successfully!"
        });

    }
    catch(err){

       res.status(400).send({
        status: 400,
        message: "DB error: User creation failed!",
        data: err
       });

    }
}

const loginUser = async(req,res) => {
   
    const{ loginId,password } = req.body;
    let userData;

    const isValid = Joi.object({
        loginId: Joi.string().email().required()
    }).validate( loginId );

    try{
         if( isValid.error ){
            userData = await User.findOne({ username: loginId });
         }
         else{
             userData = await User.findOne({ email: loginId });
         }

         if( !userData ){
            return res.status(400).send({
                status: 400,
                message: "User not found! Please register or check your credentials."
            })
         }
           
           req.session.isAuth = true;
           req.session.user = {
             username: userData.username,
             email: userData.email,
             userId: userData._id
           };

        //    console.log(req.session);

           const isPasswordMatch = await bcrypt.compare( password, userData.password);
           if( isPasswordMatch ){
                 res.status(200).send({
                    status: 200,
                    message: "User loged in successfully!"
                 })
           }
           else{
            return res.status(400).send({
                status: 400,
                message: "Incorrect Password!"
            })
           }
    }
    catch(err){
         
        res.status(400).send({
        status: 400,
        message: "DB error: User login failed!",
        data: err
       });

    }
}

const logOut = ( req,res ) => {
      
    const user = req.session.user;

    req.session.destroy( (err) => {
        if( err ){
            res.status(400).send({
                status: 400,
                message: "unsuccessful log out!",
                err: err
            })
        }
    })

    return res.status(200).send({
        status: 200,
        message: "User has loged out!",
        data: user
    })
}

module.exports = { registerUser, loginUser, logOut };