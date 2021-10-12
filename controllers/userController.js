const UserDto = require('../dtos/userDto')
const userModel = require('../models/userModel')
const userService = require('../service/userService')

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body
      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(userData)
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {}
  }
  async logout(req, res, next) {
    try {
    } catch (e) {}
  }
  async activate(req, res, next) {
    try {
      const link = req.params.link
      if (link) {
        await userService.activate(link)

        return res.redirect(process.env.CLIENT_URL)
      }
    } catch (e) {
      console.log(e)
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }
  async getUsers(req, res, next) {
    try {
      const users = await userModel.find({})

      res.json(users.map((u) => new UserDto(u)))
    } catch (e) {}
  }
}

module.exports = new UserController()
