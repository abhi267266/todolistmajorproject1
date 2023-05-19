const express = require("express");
const port = 8000;
const app = express();


app.use('/', require('./routes'))
app. set('view engine', 'ejs');
app.set('views', './views');
const db = require("./config/mongoose");


app.use(express.urlencoded());
app.use(express.static('asset'));


app.listen(8000, (err)=>{
    if(err){
        console.log("something went wrong connecting to server");
    }

    console.log(`Server is running in port ${port}`);
});