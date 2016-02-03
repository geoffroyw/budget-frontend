/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var categoriesRouter = express.Router();


  var initialData = {
    "data": [{
      "type": "Categories",
      "id": "1",
      "attributes": {
        "name": "Foo",
        "created-at": new Date(),
        "updated-at": new Date()
      }
    },
      {
        "type": "Categories",
        "id": "2",
        "attributes": {
          "name": "Bar",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      },
      {
        "type": "Categories",
        "id": "3",
        "attributes": {
          "name": "Baz",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      }]
  };

  categoriesRouter.get('/', function (req, res) {
    res.send(initialData);
  });

  categoriesRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  categoriesRouter.get('/:id', function (req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.put('/:id', function (req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/categories', require('body-parser').json());
  app.use('/api/categories', categoriesRouter);
};
