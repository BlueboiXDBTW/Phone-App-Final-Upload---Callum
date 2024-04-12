var express = require("express");
var app = express();
var mysql = require('mysql');

app.set('view engine', 'ejs');
 // Set the template engine 
var express = require("express");
const multer = require('multer');
const path = require('path');
const sharp = require('sharp')
const fs = require('fs');
const imagesDir = './images'; // Adjust the path as needed

// Check if the directory exists, create it if not


var bodyParser = require("body-parser") // call body parser module and make use of it
app.use(bodyParser.urlencoded({extended:true}));



// ******************************** Start of SQL **************************************** //
// First we need to tell the application where to find the database
const db = mysql.createConnection({
host: '127.0.0.1',
    user: 'root',
    port: '3307',
    password: 'root',
    database: 'Phone'
 });

// Next we need to create a connection to the database

db.connect((err) =>{
     if(err){
        console.log("Your an idiot fix your code")
    } 
     else{
        console.log('Looking good the database connected')
    }
})


// **********************************  Code from here **************************
//Add Page
app.get('/', function(req,res){
    let sql = 'SELECT * FROM Phone';
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('home', {result})   
    });
    
})

app.get('/add', function(req,res){

    res.render('add')


})


// Route for handling form submission
app.post('/add', function(req, res) {
   
    let sql = 'insert into Phone (Make, Model, Price, image, about) values (?, ?, ?, ?, ?)';
    let query = db.query(sql, [req.body.Make, req.body.Model, req.body.Price, req.body.image, req.body.about], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/');
    });
});
      
app.get('/Make/:Make', function(req,res){
    let sql = 'SELECT * FROM Phone WHERE Make = ?';
    let query = db.query(sql,[req.params.Make], (err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('Make', {result})   
    });
    
})

app.get('/Make', function(req,res){

    res.render('Make')


})

app.get('/individual/:id', function(req,res){
    let sql = 'SELECT * FROM Phone WHERE id = ?';
    let query = db.query(sql,[req.params.id], (err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('individual', {result})   
    });
    
})

app.get('/adminpass', function(req,res){
    let sql = 'SELECT * FROM Phone';
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('adminpass', {result})   
    });
    
})








// Set up EJS as the view engine
app.set('view engine', 'ejs');









app.use(express.static("css"));
app.use(express.static("views")); 
app.use(express.static("images")); 
app.use(express.static("style")); 



// **********************************  Code to here **************************

app.listen(process.env.PORT || 6969, process.env.IP || "0.0.0.0" , function(){
  console.log("New Full Demo is Live")
});

//