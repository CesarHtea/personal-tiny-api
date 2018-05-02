const Router = require('express').Router
const Quote = require('../models/Quote')

const apiRouter = Router()

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next()
  }
  else {
    res.json({
      error: 'Private route.'
    })
  }
}

function getQuotes(req, res) {
  Quote
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function getOneQuote(req, res) {
  const quoteId = parseInt(req.params.quoteId)

  Quote
    .query()
    .findById(quoteId)
    .then(function(quote) {
      res.json(quote).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

function createNewQuote(req, res) {

  Quote
    .query()
    .insert(req.body)
    .then(function(newQuote) {
      res.json(newQuote).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

function updateQuote(req, res) {
  const quoteId = parseInt(req.params.quoteId)
  const newData = req.body

  Quote
    .query()
    .updateAndFetchById(quoteId, newData)
    .then(function(quoteUpdated) {
      res.json(quoteUpdated).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

function deleteQuote(req, res) {
  const quoteId = parseInt(req.params.quoteId)

  Quote
    .query()
    .deleteById(quoteId)
    .then(function(rowsDeleted) {
      res.json({
        quotesDeleted: rowsDeleted
      }).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}

apiRouter
  .get('/quotes', getQuotes)
  .get('/quotes/:quoteId', isUserAuthenticated , getOneQuote)
  .post('/quotes', isUserAuthenticated , createNewQuote)
  .put('/quotes/:quoteId', updateQuote)
  .delete('/quotes/:quoteId', deleteQuote)

module.exports = apiRouter
