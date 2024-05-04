const gamesRouter = require('express').Router()
const {sendAllGames, sendGameCreated, sendGameUpdated } = require("../controllers/games")
const {createGame, findAllGames, updateGame, findGameById} = require("../middlewares/games");

gamesRouter.get('/games', findAllGames,sendAllGames)
gamesRouter.post('/games', findAllGames, createGame,sendGameCreated)
gamesRouter.put('games/:id', findGameById, updateGame, sendGameUpdated)

module.exports = gamesRouter