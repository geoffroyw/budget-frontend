/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var paymentMeanRouter = express.Router();

  var initialData = {
    "data": [{
      "type": "PaymentMeans",
      "id": "1",
      "attributes": {
        "name": "Credit Card 1",
        "currency": "EUR",
        "created-at": new Date(),
        "updated-at": new Date()
      }
    },
      {
        "type": "PaymentMeans",
        "id": "2",
        "attributes": {
          "name": "Credit Card 2",
          "currency": "EUR",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      },
      {
        "type": "PaymentMeans",
        "id": "3",
        "attributes": {
          "name": "Credit Card 3",
          "currency": "USD",
          "created-at": new Date(),
          "updated-at": new Date()
        }
      }]
  };

  paymentMeanRouter.get('/', function (req, res) {
    res.send(initialData);
  });

  paymentMeanRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  paymentMeanRouter.get('/:id', function (req, res) {
    res.send({
      'data': initialData['data'][req.params.id]
    });
  });

  paymentMeanRouter.put('/:id', function (req, res) {
    res.send({
      'payment-mean': {
        id: req.params.id
      }
    });
  });

  paymentMeanRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/payment_mean', require('body-parser').json());
  app.use('/api/payment-means', paymentMeanRouter);
};
