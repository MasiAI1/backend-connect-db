const usersRouter = require('express').Router()
const {findAllUsers, createUser } = require("../middlewares/users")
const { sendAllUsers, sendCreatedUser } = require("../controllers/users")

usersRouter.get('/games', findAllUsers, sendAllUsers)
usersRouter.post('/games', findAllUsers, createUser,sendCreatedUser)

module.exports = usersRouter