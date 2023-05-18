const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');
const db = mongoose.connection;
db.on("error", console.error.bind("their was some problem connecting to the datebase"));

db.once("open", function(){
    console.log("Succesfulley connected to database!!!");
});