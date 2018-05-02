const express = require('express')
const { Model } = require('objection')

const connectToDatabase = require('./src/database/connection')
const knexFile = require('./knexfile')

const apiRouter = require('./src/routes/apiRoutes')
                
const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

app.get('/', function(req, res){
    res.send('home page')
})

app.use('/api', apiRouter)

const PORT = process.env.PORT || 3000;app.listen(PORT, function(){
    console.log(`App running in PORT: ${PORT}`)
})