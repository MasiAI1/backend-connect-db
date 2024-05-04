const gamesRouter = require('express').Router()
const {sendAllGames, sendGameCreated} = require("../controllers/games")
const {createGame, findAllGames} = require("../middlewares/games");

gamesRouter.get('/games', findAllGames,sendAllGames)
gamesRouter.post('/games', findAllGames, createGame,sendGameCreated)

module.exports = gamesRouter