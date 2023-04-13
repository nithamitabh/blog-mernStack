const express = require("express");
const app = express();
const dotenv = require("dotenv");
const moongose = require("mongoose");
dotenv.config();
// app.use("/",(req,res) => {
//     console.log("ran World");
// })
// ?Connect to DB
moongose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log("DB Connected")).catch((err => console.log(err)) );
app.listen("5000",() =>{
    console.log("Server is running on port 5000");
});
// !instll nodemon for auto restart server