const express = require('express')
const { Model } = require('objection')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

// -------
const passport = require('passport')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy')
const {
  configDeserializeUser,
  configSerializeUser
} = require('./src/helpers/passport-local--sessionActions')
// -------

const connectToDatabase = require('./src/database/connection')
const knexFile = require('./knexfile')

const pageRouter = require('./src/routes/pageRoutes')
const apiRouter = require('./src/routes/apiRoutes')
const authRouter = require('./src/routes/authRouter')
                
const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

Model.knex(appConnectionWithDatabase)

// --------------- para configurar la sesion en el servidor
app.use(cookieParser())
app.use(cookieSession({
  name: 'cookiemonster',
  secret: 'supersecret',
  httpOnly: true,
  signed: false
}))
// ---------------

// --------------- para que se entienda con passport
app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser)
passport.deserializeUser(configDeserializeUser)
// ---------------

// Setup EJS engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

// para las peticiones (e.g. POST)
app.use(bodyParser.json())

// Setup static files
app.use(express.static(`${__dirname}/public`))

// para hacer un log de las peticiones que se realizan
app.use(logger('tiny'))

// para que los demas developers se puedan conectar a esta API (localhost)
app.use(cors())

app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use('/auth', authRouter)
// Show 404 view
app.use(function(req, res) {
  res.render('404.ejs')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`API Server running on PORT: ${PORT}`)
})