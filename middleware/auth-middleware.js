const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/tokenService')

module.exports = function (req, res, next) {
  try {
    const autorizationHeader = req.headers.authorization
    console.log(req.headers.authorization)
    if (!autorizationHeader) {
      return next(ApiError.UnautirizeError())
    }
    const accessToken = autorizationHeader.split(' ')[1]

    if (!accessToken) {
      return next(ApiError.UnautirizeError())
    }
    const userData = tokenService.validateAccessToken(accessToken)
    if (!userData) {
      return next(ApiError.UnautirizeError())
    }
    req.user = userData
    next()
  } catch (e) {
    console.log('authMiddleware')
    return next(ApiError.UnautirizeError())
  }
}
