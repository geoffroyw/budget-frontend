/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var bankAccountsRouter = express.Router();

  var initialData = {
    "data": [{
      "type": "BankAccounts",
      "id": "1",
      "attributes": {
        "name": "Account 1",
        "currency": "EUR",
        "created-at": new Date(),
        "updated-at": new Date()
      }
    },
      {
        "type": "BankAccounts",
        "id": "2",
        "attributes": {
          "name": "Account 2",
          "currency": "EUR",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      },
      {
        "type": "BankAccounts",
        "id": "3",
        "attributes": {
          "name": "Account 3",
          "currency": "USD",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      }]
  };


  bankAccountsRouter.get('/', function (req, res) {
    res.send(initialData);
  });

  bankAccountsRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  bankAccountsRouter.get('/:id', function (req, res) {
    res.send({
      'bank-accounts': {
        id: req.params.id
      }
    });
  });

  bankAccountsRouter.put('/:id', function (req, res) {
    res.send({
      'bank-accounts': {
        id: req.params.id
      }
    });
  });

  bankAccountsRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/bank-accounts', require('body-parser').json());
  app.use('/bank-accounts', bankAccountsRouter);
};
