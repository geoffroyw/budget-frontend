/*jshint node:true*/

"use strict";
module.exports = function (app) {
  var express = require('express');
  var transactionRouter = express.Router();

  var initialData = {
    "data": [{
      "type": "transactions",
      "id": "1",
      "attributes": {
        "date": new Date(),
        "description": "Foo bar baz",
        "amount-cents": 1000,
        "currency": "EUR",
        "created-at": new Date(),
        "updated-at": new Date(),
        "type": "INCOME"
      }
    },
      {
        "type": "transactions",
        "id": "2",
        "attributes": {
          "date": new Date(),
          "description": "Foo bar baz",
          "amount-cents": "1000",
          "currency": "EUR",
          "created-at": new Date(),
          "updated-at": new Date(),
          "type": "EXPENSE"
        }
      },
      {
        "type": "transactions",
        "id": "3",
        "attributes": {
          "date": new Date(),
          "description": "Foo bar baz",
          "amount-cents": "1000",
          "currency": "EUR",
          "created-at": new Date(),
          "updated-at": new Date(),
          "type": "INCOME"
        }
      },
      {
        "type": "transactions",
        "id": "4",
        "attributes": {
          "date": new Date(),
          "description": "Foo bar baz",
          "amount-cents": "1000",
          "currency": "EUR",
          "created-at": new Date(),
          "updated-at": new Date(),
          "type": "INCOME"
        }
      },
      {
        "type": "transactions",
        "id": "5",
        "attributes": {
          "date": new Date(),
          "description": "Foo bar baz",
          "amount-cents": "12345",
          "currency": "USD",
          "created-at": new Date(),
          "updated-at": new Date(),
          "type": "EXPENSE"
        }
      }]
  };


  transactionRouter.get('/', function (req, res) {
    res.send(initialData);
  });

  transactionRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  transactionRouter.get('/:id', function (req, res) {
    "use strict";
    res.send({
      'transaction': {
        id: req.params.id
      }
    });
  });

  transactionRouter.patch('/:id', function (req, res) {
    "use strict";
    let id = req.params.id;
    initialData.data[id - 1]['attributes']['date'] = req.body.data.attributes['date'];
    initialData.data[id - 1]['attributes']['description'] = req.body.data.attributes['description'];
    initialData.data[id - 1]['attributes']['amount-cents'] = req.body.data.attributes['amount-cents'];
    initialData.data[id - 1]['attributes']['currency'] = req.body.data.attributes['currency'];
    initialData.data[id - 1]['attributes']['type'] = req.body.data.attributes['type'];
    res.send({data: initialData.data[id - 1]});
  });

  transactionRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/transactions', require('body-parser').json({type: 'application/vnd.api+json'}));
  app.use('/api/transactions', transactionRouter);
};
