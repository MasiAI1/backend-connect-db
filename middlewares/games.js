const games = require("../models/game")
const findGameByCategory = require('../middlewares/categories')

const findAllGames = async (req, res, next) => {
    if(req.query["categories.name"]) {
    req.gamesArray = await games.findGameByCategory(req.query["categories.name"]);
    next();
    return;
  }
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password"
    })
  next();
};


const findGameById = async (req,res,next) =>{
    try {
        req.game = await games.findById(req.params.id)
            .populate('categories')
            .populate('users')
        next()
    } catch (err){
        res.status(404).send({message:'Game not found'})
    }
}

const createGame = async (req, res,next) => {
    console.log('POST /games')
    try {
        req.game = await  games.create(req.body)
        next()
    } catch (err){
        res.status(400).send({message:'Error creating game'})
    }
}

const updateGame = async (req,res,next) =>{
    try {
        req.game = await games.findByIdAndUpdate(req.params.id, req.body)
        next()
    } catch (err) {
        res.status(400).send({message:'Error updating game'})
    }
}

const deleteGame = async (req,res,next) => {
    try {
        req.game = await games.findByIdAndDelete(req.params.id)
        next()
    } catch (err) {
        res.status(400).send({message:'Error deleting game'})
    }
}

const checkEmptyFields = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  }

const checkIfCategoriesAvaliable = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  }

const checkIsGameExists = async (req, res, next) => {
  const isInArray = req.gamesArray.find((game) => {
    return req.body.title === game.title;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Игра с таким названием уже существует" }));
  } else {
    next();
  }
};

const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
  }
};

const checkIsVoteRequest = async (req, res, next) => {
  if (Object.keys(req.body).length === 1 && req.body.users) {
    req.isVoteRequest = true;
  }
  next();
};

module.exports= {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields,checkIfCategoriesAvaliable,checkIfUsersAreSafe,checkIsGameExists,checkIsVoteRequest}