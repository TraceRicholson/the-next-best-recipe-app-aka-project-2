const connection = require('./knexfile)[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.export = {
  module.exports = {
  getAll(){
    return database('recipeproject')
  }
  }
}