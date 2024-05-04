const {findAllCategories, createCategory} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated} = require("../controllers/categories")

const categoriesRouter = require('express').Router()

categoriesRouter.get('/categories',findAllCategories, sendAllCategories)
categoriesRouter.post('/categories',findAllCategories, createCategory,sendCategoryCreated)

module.exports = categoriesRouter