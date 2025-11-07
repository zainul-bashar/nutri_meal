const Joi = require("joi");
const Meals = require("../models/Meals");

const meals = async ( req,res ) => {
     
    const isValid = Joi.object({
                
                username: Joi.string().min(2).max(30),
                dishName: Joi.string().min(2).max(30).required(),
                ingredient: Joi.string().min(3).max(500).required(),
                category: Joi.string().min(5).required(50),
                cookingUrl: Joi.string().uri().required(),
                nutrients: Joi.string().min(3).max(100),
                cookingIntsruction: Joi.string().min(3).max(1000),
                cookingTime: Joi.string().min(3).max(100),
                
            }).validate(req.body, { abortEarly: false, allowUnknown: false });

            if( isValid.error){
            return res.status(400).send({
                status: 400,
                message: "Invalid data format!",
                data: isValid.error
            });
        }

        const mealObj = new Meals({
                    username: req.body.username,
                    dishName: req.body.dishName,
                    ingredient: req.body.ingredient,
                    cookingIntsruction: req.body.cookingIntsruction,
                    cookingUrl: req.body.cookingUrl,
                    cookingTime: req.body.cookingTime,
                    nutrients: req.body.nutrients,
                    category: req.body.category,
                });

             try{

                 await mealObj.save();

                 res.status(201).send({
                     status: 201,
                     message: "Meal added successfully!"
             });
        }
        catch(err){
              res.status(400).send({
                status: 400,
                message: "Meal creation error!",
                data: err
              })
        }


}

module.exports = { meals };