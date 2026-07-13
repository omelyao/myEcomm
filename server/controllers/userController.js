const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, Basket } = require('../models/models')
class UserController {
   async registration(req, res) {

   }
   async login(req, res) {

   }
   async check(req, res) {
      const { id } = req.query
      if (!id) {
         throw (ApiError.badRequest('Че бля не указал айди ты'))
      }
      res.json(id)
   }
}

module.exports = new UserController()