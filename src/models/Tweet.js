const { Model } = require('objection')

class Tweet extends Model {
  static get tableName() {
  	return 'tweets' // nombre con el que creamos en la migracion
  }
}

module.exports = Tweet