const Router = require('express').Router
const apiRouter = Router()

const Tweet = require('../models/Tweet')

function allTweets(req, res) {
  Tweet
    .query()
    .then(function(data) {
      res.json(data)
    })
}

apiRouter
  .get('/tweets', allTweets)


module.exports = apiRouter