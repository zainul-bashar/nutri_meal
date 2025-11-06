const Joi = require("joi");
const Note = require("../models/PersonalNote");

const personalNote = async( req,res ) => {

    const isValid = Joi.object({
            
            dishName: Joi.string().min(2).max(30).required(),
            ingredient: Joi.string().min(3).max(500).required(),
            cookingIntsruction: Joi.string().min(3).max(1000),
            cookingTime: Joi.string().min(3).max(100),
            nutrients: Joi.string().min(3).max(100),
            category: Joi.string().min(5).required(50),
            
        }).validate(req.body, { abortEarly: false, allowUnknown: false });
    
        if( isValid.error){
            return res.status(400).send({
                status: 400,
                message: "Invalid data format!",
                data: isValid.error
            });
        }

        const noteObj = new Note({
            username: req.session.user.username,
            dishName: req.body.dishName,
            ingredient: req.body.ingredient,
            cookingIntsruction: req.body.cookingIntsruction,
            cookingTime: req.body.cookingTime,
            nutrients: req.body.nutrients,
            category: req.body.category,
        });
            //  console.log(noteObj);
        try{
             await noteObj.save();

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

const deleteNote = async( req, res ) => {
       
    const noteId = req.params.noteId;

    try{
         await Note.deleteOne({ _id: noteId });

         res.status(200).send({
            status: 200,
            message: "Meal has been successfully deleted!"
         })
    }
    catch(err){
        res.status(400).send({
            status: 400,
            message: "Unable to delete the blog!"
        })
    }
}

const editNote = async( req,res ) => {
      const {noteId,dishName,ingredient,cookingIntsruction,cookingTime,nutrients,category} = req.body;
      const userName = req.session.user.username;

      try{
            const noteData = await Note.findById(noteId);

            if( !(noteData.username).toString() === (userName).toString() ){
                return res.status(401).send({
                    status: 401,
                    message: "Not allowed to edit, Authorisation failed!"
                })
            }
      }
      catch(err){
        res.status(400).send({
            status: 400,
            message: "Unable to edit the Note!",
            data: err
        })
      }

      try{
           const newNoteData = { dishName,ingredient,cookingIntsruction,cookingTime,nutrients,category };

           await Note.findOneAndUpdate( { _id: noteId}, newNoteData );

           res.status(200).send({
             status: 200,
             message: "Note has been edited successfully!"
           })
      }
      catch(err){
           res.status(400).send({
            status: 400,
            message: "Unable to edit the Note!",
            data: err
        })
      }
}

module.exports = { personalNote , deleteNote , editNote };