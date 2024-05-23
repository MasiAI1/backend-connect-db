const gamesRouter = require('express').Router()
const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games")
const {createGame, findAllGames, updateGame, findGameById, deleteGame, checkEmptyFields, checkIfUsersAreSafe,
    checkIfCategoriesAvaliable, checkIsGameExists
} = require("../middlewares/games");

const  checkAuth  = require("../middlewares/auth.js");
const {checkIsVoteRequest} = require("@/middlewares/games");

gamesRouter.get('/games', findAllGames,sendAllGames)
gamesRouter.post('/games', findAllGames,checkIsGameExists,checkIfCategoriesAvaliable,checkEmptyFields,checkAuth, createGame,sendGameCreated)
gamesRouter.get('/games/:id',findGameById,sendGameById)
gamesRouter.put('games/:id', findGameById,checkIsVoteRequest,checkIfUsersAreSafe,checkIfCategoriesAvaliable,checkEmptyFields,checkAuth, updateGame, sendGameUpdated)
gamesRouter.delete('games/:id',checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter