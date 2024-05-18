const usersRouter = require('express').Router()
const {findAllUsers, createUser, updateUser,checkEmptyNameAndEmail, deleteUser, hashPassword, checkIsUserExists,
    checkEmptyNameAndEmailAndPassword, filterPassword, findUserById
} = require("../middlewares/users")
const { sendAllUsers, sendCreatedUser, sendUserUpdated, sendUserDeleted, sendMe} = require("../controllers/users")

const  checkAuth  = require("../middlewares/auth.js");

usersRouter.get('/users', findAllUsers,filterPassword, sendAllUsers)
usersRouter.post('/users',findAllUsers,checkIsUserExists,checkEmptyNameAndEmailAndPassword,checkAuth,hashPassword, createUser,sendCreatedUser)
usersRouter.get('/users/:id',findUserById,sendUserById)
usersRouter.put('/users/:id',checkEmptyNameAndEmail,checkAuth,updateUser, sendUserUpdated)
usersRouter.delete('/users/:id',checkAuth, deleteUser, sendUserDeleted)
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter