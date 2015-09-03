  var express = require('express');
  var bodyParser = require('b')
  var router = express.Router();
  // model.export allows us to expose a export to the taskModel var
  var taskModel = require('../models/Tasks');

  // populate the database with fun stuff
  // CREATE (out of CRUD)
  // dataObject = req.body
  var dataObject = {
    name: 'Buy orange juice',
    completed: false,
    description: 'Go to tony\s and buy OJ'
  }

// function(error, task) - returns an error from mongo if exists
// else it returns an item(s) from the database
    // taskModel.create(dataObject, function(error, task) {
    //   if (error) return  error;
    //   console.log("A document object has been created: ");
    //   console.log(task);
    // });

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

// GET ALL
  // send all database objects to api call
   router.get('/api', function(req, res, next) {
     taskModel.find(function (error, task) {
       if (error) return error;
       res.send();
      });
   });

// GET BY ID
   router.get('/api/:id', fucntion(req, res, next) {
    //  error if error ... else.. return the task
     taskModel.findById(req.params.id, function(error, taks) {
       if (error) return error;
       res.json(task);
     });
   });

  // CREATE
  router.post('/api', function(req, res, next) {

  });

  module.exports = router;
