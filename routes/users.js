const usersRouter = require('express').Router()
const {findAllUsers, createUser, updateUser,checkEmptyNameAndEmail, deleteUser} = require("../middlewares/users")
const { sendAllUsers, sendCreatedUser, sendUserUpdated, sendUserDeleted} = require("../controllers/users")

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.post('/users',checkEmptyNameAndEmail, findAllUsers, createUser,sendCreatedUser)
usersRouter.put('/users/:id',checkEmptyNameAndEmail, updateUser, sendUserUpdated)
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted)

module.exports = usersRouter