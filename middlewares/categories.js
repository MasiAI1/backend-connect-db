const categories = require("../models/category")
const games = require("../models/game");

const findAllCategories = async (req, res, next) => {
    console.log('GET /categories')
    req.categoriesArray = await categories.find({})
    next()
}

const findCategoryById = async (req, res, next)  => {
  try{
      req.category = await categories.findById(req.params.id)
      next()
  } catch (err){
      res.status(404).send({message:'Category not found'})
  }
}

const createCategory = async (req, res,next) => {
    console.log('POST /categories')
    try {
        req.category = await  categories.create(req.body)
        next()
    } catch (err){
        res.status(400).send({message:'Error creating category'})
    }
}


module.exports= [findAllCategories,findCategoryById, createCategory]