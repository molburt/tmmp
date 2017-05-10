var port = 5000;
var url = 'mongodb://localhost:27017/TMMP';

var express = require('express');
var app = express();

var mongodb = require('mongodb');
var objectId = require('mongodb').objectID;

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


// READ
app.get('/', function(req, res) {
    res.render("index");
});

app.get('/coming_soon', function(req, res) {
    res.render("coming_soon");
});

app.get('/view_recipe', function(req, res) {
    res.render("view_recipe");
});

app.get('/recipe_book', function(req, res) {
    mongodb.connect(url, function(err, db) {
        var collection = db.collection('recipes');
        collection.find({}).toArray(
            function(err, results){
                res.render("recipe_book", {recipe_list: results});
            }
        );
    });
});

app.get('/add_recipe', function(req, res) {
    res.render("recipe_form");
});

app.post('/add_recipe', function(req, res) {
    mongodb.connect(url, function(err, db){
        var collection = db.collection('recipes');
        var recipe = {
            name: req.body.name,
            author: req.body.author,
            picture: req.body.picture,
            prepHours: req.body.prepHours,
            prepMin: req.body.prepMin,
            cookHours: req.body.cookHours,
            cookMin: req.body.cookMin,
            amount: req.body.amount,
            unit: req.body.unit,
            ingredient: req.body.ingredient,
            preparation: req.body.preparation,
            directions: req.body.directions
        };
        collection.insertOne(movie, function(err, results) {
            res.redirect('/recipe_book');
        });
    });
});



app.listen(port, function(err) {
    console.log("Listening on Port: " + port);
});