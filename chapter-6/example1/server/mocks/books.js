module.exports = function(app) {
  var express = require('express');
  var bodyParser = require('body-parser');
  var booksRouter = express.Router();
  
  // parse application/json
  app.use(bodyParser.json());


  booksRouter.get('/', function(req, res) {
      res.send({
          "books": [{
              "id":1,
              "title": "Ember.js Essentials",
              "isbn": "ISBN1",
              "pages": 180,
              "description": "Ember.js essentials to master",
              "authors": [1],
              "publisher": 1,
              "reviews": [1,2,3]
          },
          {
              "id":2,
              "title": "Some Other Book On Ember.js",
              "isbn": "ISBN2",
              "pages": 200,
              "description": "Some Description",
              "authors": [2],
              "publisher": 1,
              "reviews": [4,5,6]
          }

          ]
      });
  });

  booksRouter.post('/', function(req, res) {
    res.status(201);
    res.send({"book":{
      "id":Math.floor(Math.random()*1000)
    }});
  });

  booksRouter.get('/:id', function(req, res) {
      res.send({
          "books": {
              "id":req.params.id,
              "title": "Ember.js Essentials",
              "isbn": "ISBN1",
              "pages": 180,
              "description": "Ember.js essentials to master",
              "authors": [1],
              "publisher": 1,
              "reviews": [1,2,3]
          }
      });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      "books": {
        "id": req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/books', booksRouter);
};