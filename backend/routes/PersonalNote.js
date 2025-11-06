const express = require("express");
const router = express();
const { isAuth } = require("../middlewares/Authmiddleware");
const { personalNote, deleteNote, editNote } = require("../controllers/personalNote.controller");

router.post( "/create-note", isAuth, personalNote );
router.delete( "/delete-note/:noteId", isAuth, deleteNote );
router.put( "/edit-note", isAuth, editNote );


module.exports = router;