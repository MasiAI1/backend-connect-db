const usersRouter = require('express').Router()
const {findAllUsers, createUser, updateUser,checkEmptyNameAndEmail } = require("../middlewares/users")
const { sendAllUsers, sendCreatedUser, sendUserUpdated  } = require("../controllers/users")

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.post('/users',checkEmptyNameAndEmail, findAllUsers, createUser,sendCreatedUser)
usersRouter.put('/users/:id',checkEmptyNameAndEmail, updateUser, sendUserUpdated)

module.exports = usersRouter