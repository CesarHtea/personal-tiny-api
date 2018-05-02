const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { Model } = require('objection')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const connectToDatabase = require('./src/database/connection')
const knexFile = require('./knexfile')

const pageRouter = require('./src/routes/pageRoutes')
const apiRouter = require('./src/routes/apiRoutes')
                
const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

// Setup EJS engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

// para las peticiones (e.g. POST)
app.use(bodyParser.json())

// Setup static files
app.use(express.static(`${__dirname}/public`))

// para que los demas developers se puedan conectar a esta API (localhost)
app.use(cors())

// para hacer un log de las peticiones que se realizan
app.use(morgan('tiny'))

app.use('/', pageRouter)
app.use('/api', apiRouter)
// Show 404 view
app.use(function(req, res) {
  res.render('404.ejs')
})

const PORT = process.env.PORT || 3000;app.listen(PORT, function(){
    console.log(`App running in PORT: ${PORT}`)
})