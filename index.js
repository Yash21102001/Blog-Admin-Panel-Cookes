const express = require('express');
const cookie = require("cookie-parser")
const port = 8001;

const app = express();

const path = require('path');
const { db } = require('./config/database');

app.set('view engine','ejs');
app.use(cookie())
app.use("/uploads",express.static(path.join(__dirname + '/uploads')))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + '/assets')));


app.use('/',require('./routers'));


app.listen(port,(err)=>{
    if (!err){
        db()
        console.log("Server Start http://localhost:" + port);
        
    }
}) 