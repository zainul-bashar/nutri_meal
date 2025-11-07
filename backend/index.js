const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/users");
const noteRouts = require("./routes/PersonalNote");
const mealsRouter = require("./routes/meals");
const PORT = process.env.SERVER_PORT;
const session = require("express-session");
const MongoDbSession = require("connect-mongodb-session")(session);

//file imports
const db = require("./config/db")

//middlewares
const app = express();
app.use(express.json());

//store the mongodb session
const store = new MongoDbSession({
    uri: process.env.MONGODB_URI,
    collection: "session"
});

//using the middleware session
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        store: store
    })
)

//routes
app.use("/user", userRoutes );
app.use("/note", noteRouts );
app.use("/meals", mealsRouter );



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})