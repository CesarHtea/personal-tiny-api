const { Model } = require('objection')

class Quote extends Model {
  static get tableName() {
    return 'quotes'
  }
}

module.exports = Quote
