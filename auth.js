const tokenService = require('./index')

module.exports = (req, res, next) => {
  if (!('authorization' in req.header)) {
    res.status(401).send({
      status: 401,
      message: 'you are not authorized'
    })
  }
  const token = tokenService.verify(req.header.authorization.split(' ')[1])
  if (!token) {
    res.status(401).send({
      status: 401,
      message: 'your token is not valid'
    })
  }
}
