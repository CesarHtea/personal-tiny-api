const Router = require('express').Router
const Tweet = require('../models/Tweet')

const apiRouter = Router()

function allTweets(req, res) {
  Tweet
    .query()
    .then(function(data) {
      res.json(data)
    })
}

function getSingleTweet(req, res) {
  const id = parseInt(req.params.tweetId)
  Tweet
    .query()
    .findById(id)
    .then(function(tweet) {
      res.json(tweet).status(200)
    })
}

function createNewTweet(req, res) {
  Tweet
    .query()
    .insert(req.body)
    .then(function(newTweet) {
      res.json(newTweet).status(200)
    })
}

function updateTweet(req, res) {
  const tweetId = parseInt(req.params.tweetId)
  const newData = req.body

  Tweet
    .query()
    .updateAndFetchById(tweetId, newData)
    .then(function(tweetUpdated) {
      res.json(tweetUpdated).status(200)
    })
}

function deleteTweet(req, res) {
  const tweetId = parseInt(req.params.tweetId)

  Tweet
    .query()
    .deleteById(tweetId)
    .then(function(rowsDeleted) {
      res.json({
        tweetsDeleted: rowsDeleted
      }).status(200)
    })
}

apiRouter
  .get('/tweets', allTweets)
  .get('/tweets/:tweetId', getSingleTweet)
  .post('/tweets', createNewTweet)
  .put('/tweets/:tweetId', updateTweet)
  .delete('/tweets/:tweetId', deleteTweet)


module.exports = apiRouter