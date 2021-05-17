//requiring express module
var express = require('express');
var app = express();
//requiring path module
var path = require('path');
//requiring hbs module
var hbs = require('hbs');
const bodyParser=require('body-parser');
//using body parser
const db=require('./db')
const router=require("./router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const hbspath = path.join(__dirname,"../hbsFiles");
//checking the hbs path 
console.log(hbspath);
//setting view engine as hbs 
app.set("view engine", "hbs");
//setting the path for hbs files
app.set("views", hbspath);//1st attribute views 2nd path of hbs files
app.use(router);

 app.listen(3000, "127.0.0.1", (req, res) => {
  console.log("127.0.0.1:3000");
});

