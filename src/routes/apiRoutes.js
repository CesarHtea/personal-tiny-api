const Router = require('express').Router
const apiRouter = Router()


apiRouter

  .get('/...', cbAll)
  .get('/.../:...', cbGetSingle)
  .post('/...', cbCreateNew)
  .put('/.../:...', cbUpdate)
  .delete('/.../:...', cbDelete)




module.exports = apiRouter