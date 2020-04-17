const express = require('express');
const {ObjectID} = require('mongodb').ObjectID;
const volleyball = require('volleyball');

const mongoose = require('./db/mongoose');

const port = process.env.MONGODB_URI || 3000;

//models
const User = require('./models/user');
const Todo = require('./models/todo');

const app = express();
//Middlewares
app.use(express.json());
app.use(volleyball);

//routes
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    }); 
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(400).send();
        } 
        
        res.send({todo});
    }).catch((e) => {
            res.status(400).send();
        })

})



app.listen(port, () => {
    console.log(`Started at port${port}`);
});

module.exports = app;