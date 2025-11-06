const isAuth = ( req,res,next ) => {

    if( req.session.isAuth ){
        next();
    }
    else{
        res.status(400).send({
            status: 400,
            message: "session expired, Please log in!"
        })
    }
}

module.exports = { isAuth };