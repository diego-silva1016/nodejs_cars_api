const jwt = require('jsonwebtoken')

const verifyToken = function (req, res, next) {
    const token = req.headers["authorization"]

    if (!token) {
        res.sendStatus(401)
        return
    }

    try {
        jwt.verify(token.split(' ')[1], process.env.NODE_SECRET_KEY);
    } catch (err) {
        res.sendStatus(401)
        return
    }

    next()
}

module.exports = verifyToken