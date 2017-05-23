var port = 5000;
var url = 'mongodb://localhost:27017/TMMP';

var express = require('express');
var app = express();

var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectID;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

var method_override = require('method-override');
app.use(method_override('_method'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


// READ
app.get('/', function(req, res) {
    res.render("index");
});

app.get('/coming_soon', function(req, res) {
    res.render("coming_soon");
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
    res.render("recipe_form", { type: 'Add'});
});

app.get('/about', function(req, res){
    res.render("about");
});

app.get('/recipe_book/:id', function(req, res){
    var id = new objectId(req.params.id);
    mongodb.connect(url, function(err, db){
        var collection = db.collection('recipes');
        collection.findOne({_id: id},
            function(err, results){
                res.render('view_recipe', {recipe: results});
            }
        )
    });
});

app.get("/edit_recipe/:id", function(req,res){
    var id = new objectId(req.params.id);
    mongodb.connect(url, function(err, db){
        var collection = db.collection('recipes');
        collection.findOne({_id: id},
            function(err, results){
                res.render("recipe_form", { recipe: results, type: "Edit"});
            }
        )
    });
});

app.get('/menu_planner', function(req, res) {
    mongodb.connect(url, function(err, db) {
        var collection = db.collection('menu');
        collection.find({}).toArray(
            function(err, results){
                res.render("menu_planner", {menu: results});
            }
        );
    });
});

// WORK IN PROGRESS CODE
app.post('/menu_planner', function(req, res) {
    mongodb.connect(url, function(err, db){
        var collection = db.collection('menu');
        collection.update( { "_id": "5924abc11963d82248e2f220" }, // this id works?
        {
            sun1: req.body.sun1,
            mon1: req.body.mon1,
            tue1: req.body.tue1,
            wed1: req.body.wed1,
            thu1: req.body.thu1,
            fri1: req.body.fri1,
            sat1: req.body.sat1,
            sun2: req.body.sun2,
            mon2: req.body.mon2,
            tue2: req.body.tue2,
            wed2: req.body.wed2,
            thu2: req.body.thu2,
            fri2: req.body.fri2,
            sat2: req.body.sat2
        },
        function(err, results){
            res.redirect('/menu_planner');
        })
    })
});

// SAMPLE CODE
// collection.update({ "_id":doc._id }, 
// { $pull : { "scores" : {
// $and: [ {"type":"homework"}, { "score":lowScore} ]
// } } },
// { "safe":true },
// function( err, result ) {
// if (err) {
//  console.log(err);
//   }
// } // update callback
// ); 

// WHAT IS THIS?! (Debug?)
// app.post('/menu_planner', function(req, res) {
//     mongodb.connect(url, function(err, db){
//         var collection = db.collection('menu');
//         var plan = {
//             sun1: req.body.sun1,
//             mon1: req.body.mon1,
//             tue1: req.body.tue1,
//             wed1: req.body.wed1,
//             thu1: req.body.thu1,
//             fri1: req.body.fri1,
//             sat1: req.body.sat1,
//             sun2: req.body.sun2,
//             mon2: req.body.mon2,
//             tue2: req.body.tue2,
//             wed2: req.body.wed2,
//             thu2: req.body.thu2,
//             fri2: req.body.fri2,
//             sat2: req.body.sat2
//         };
//         collection.insertOne(plan, function(err, results){
//             res.redirect('/menu_planner')
//         })
//     })
// });

// DEBUG PAGE
app.get('/menus', function(req, res) {
    mongodb.connect(url, function(err, db){
        var collection = db.collection('menu');
        collection.find({}).toArray(
            function(err, results){
                res.render("test", {menu: results});  
            }
        );
    }) 
});

// DEBUG
app.get('/menu_form', function(req, res){
    res.render("menu_form"/*, {
        process: 'edit',
        sun1: ,
        mon1: ,
        tue1: ,
        wed1: ,
        thu1: ,
        fri1: ,
        sat1: ,
        sun2: ,
        mon2: ,
        tue2: ,
        wed2: ,
        thu2: ,
        fri2: ,
        sat2: 
    }*/);
});


// POST
app.post('/recipe_form', function(req, res) {
    mongodb.connect(url, function(err, db){
        var collection = db.collection('recipes');
        var recipe = { // is there a better way?
            name: req.body.name,
            author: req.body.author,
            picture: req.body.picture,
            prepHours: req.body.prepHours,
            prepMin: req.body.prepMin,
            cookHours: req.body.cookHours,
            cookMin: req.body.cookMin,
            amount_0: req.body.amount_0,
            unit_0: req.body.unit_0,
            ing_0: req.body.ing_0,
            prep_0: req.body.prep_0,
            amount_1: req.body.amount_1,
            unit_1: req.body.unit_1,
            ing_1: req.body.ing_1,
            prep_1: req.body.prep_1,
            amount_2: req.body.amount_2,
            unit_2: req.body.unit_2,
            ing_2: req.body.ing_2,
            prep_2: req.body.prep_2,
            amount_3: req.body.amount_3,
            unit_3: req.body.unit_3,
            ing_3: req.body.ing_3,
            prep_3: req.body.prep_3,
            amount_4: req.body.amount_4,
            unit_4: req.body.unit_4,
            ing_4: req.body.ing_4,
            prep_4: req.body.prep_4,
            amount_5: req.body.amount_5,
            unit_5: req.body.unit_5,
            ing_5: req.body.ing_5,
            prep_5: req.body.prep_5,
            amount_6: req.body.amount_6,
            unit_6: req.body.unit_6,
            ing_6: req.body.ing_6,
            prep_6: req.body.prep_6,
            amount_7: req.body.amount_7,
            unit_7: req.body.unit_7,
            ing_7: req.body.ing_7,
            prep_7: req.body.prep_7,
            amount_8: req.body.amount_8,
            unit_8: req.body.unit_8,
            ing_8: req.body.ing_8,
            prep_8: req.body.prep_8,
            amount_9: req.body.amount_9,
            unit_9: req.body.unit_9,
            ing_9: req.body.ing_9,
            prep_9: req.body.prep_9,
            amount_10: req.body.amount_10,
            unit_10: req.body.unit_10,
            ing_10: req.body.ing_10,
            prep_10: req.body.prep_10,
            amount_11: req.body.amount_11,
            unit_11: req.body.unit_11,
            ing_11: req.body.ing_11,
            prep_11: req.body.prep_11,
            amount_12: req.body.amount_12,
            unit_12: req.body.unit_12,
            ing_12: req.body.ing_12,
            prep_12: req.body.prep_12,
            amount_13: req.body.amount_13,
            unit_13: req.body.unit_13,
            ing_13: req.body.ing_13,
            prep_13: req.body.prep_13,
            amount_14: req.body.amount_14,
            unit_14: req.body.unit_14,
            ing_14: req.body.ing_14,
            prep_14: req.body.prep_14,
            amount_15: req.body.amount_15,
            unit_15: req.body.unit_15,
            ing_15: req.body.ing_15,
            prep_15: req.body.prep_15,
            amount_16: req.body.amount_16,
            unit_16: req.body.unit_16,
            ing_16: req.body.ing_16,
            prep_16: req.body.prep_16,
            amount_17: req.body.amount_17,
            unit_17: req.body.unit_17,
            ing_17: req.body.ing_17,
            prep_17: req.body.prep_17,
            amount_18: req.body.amount_18,
            unit_18: req.body.unit_18,
            ing_18: req.body.ing_18,
            prep_18: req.body.prep_18,
            amount_19: req.body.amount_19,
            unit_19: req.body.unit_19,
            ing_19: req.body.ing_19,
            prep_19: req.body.prep_19,
            amount_20: req.body.amount_20,
            unit_20: req.body.unit_20,
            ing_20: req.body.ing_20,
            prep_20: req.body.prep_20,
            amount_21: req.body.amount_21,
            unit_21: req.body.unit_21,
            ing_21: req.body.ing_21,
            prep_21: req.body.prep_21,
            amount_22: req.body.amount_22,
            unit_22: req.body.unit_22,
            ing_22: req.body.ing_22,
            prep_22: req.body.prep_22,
            amount_23: req.body.amount_23,
            unit_23: req.body.unit_23,
            ing_23: req.body.ing_23,
            prep_23: req.body.prep_23,
            amount_24: req.body.amount_24,
            unit_24: req.body.unit_24,
            ing_24: req.body.ing_24,
            prep_24: req.body.prep_24,
            step_0: req.body.step_0,
            step_1: req.body.step_1,
            step_2: req.body.step_2,
            step_3: req.body.step_3,
            step_4: req.body.step_4,
            step_5: req.body.step_5,
            step_6: req.body.step_6,
            step_7: req.body.step_7,
            step_8: req.body.step_8,
            step_9: req.body.step_9,
            step_10: req.body.step_10,
            step_11: req.body.step_11,
            step_12: req.body.step_12,
            step_13: req.body.step_13,
            step_14: req.body.step_14,
            step_15: req.body.step_15,
            step_16: req.body.step_16,
            step_17: req.body.step_17,
            step_18: req.body.step_18,
            step_19: req.body.step_19,
            step_20: req.body.step_20,
            step_21: req.body.step_21,
            step_22: req.body.step_22,
            step_23: req.body.step_23,
            step_24: req.body.step_24,
            source: req.body.source
        };
        collection.insertOne(recipe, function(err, results) {
            res.redirect('/recipe_book'); // how can I get this to redirect to the individual recipe page?
        });
    });
});


// DELETE
app.delete('/recipe_book/:id', function(req, res) {
    var id = new objectId(req.params.id);
    mongodb.connect(url, function(err, db){
        var collection = db.collection('recipes');
        collection.remove({_id: id}, function(err, results) {
            res.redirect('/recipe_book');
        });
    });
});

app.delete('/menus/:id', function(req, res) {
    var id = new objectId(req.params.id);
    mongodb.connect(url, function(err, db){
        var collection = db.collection('menus');
        collection.remove({_id: id}, function(err, results){
            res.redirect('/menus');         
        });
    }); 
});


// // UPDATE
// app.post("/recipe_book/edit_:id", function(req,res){
//     var id = new objectId(req.params.id);
//     mongodb.connect(url, function(err, db){
//         var collection = db.collection('recipes');
//         collection.findOne({_id: id},
//             function(err, results){
//                 res.render('recipe_form', {recipe: results, type: "Edit"});
//             }
//         )
//     });
//   users.forEach(function(user,index){
//     if(user.name == req.params.name){
//       users[index].name = req.body.name
//       users[index].age = req.body.age
//       res.redirect("/users/")
//     }
//   })
// });


app.listen(port, function(err) {
    console.log("Listening on Port: " + port);
});