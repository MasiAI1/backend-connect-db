const gamesRouter = require('express').Router()
const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games")
const {createGame, findAllGames, updateGame, findGameById, deleteGame} = require("../middlewares/games");

gamesRouter.get('/games', findAllGames,sendAllGames)
gamesRouter.post('/games', findAllGames, createGame,sendGameCreated)
gamesRouter.put('games/:id', findGameById, updateGame, sendGameUpdated)
gamesRouter.delete('games/:id', deleteGame, sendGameDeleted)

module.exports = gamesRouter