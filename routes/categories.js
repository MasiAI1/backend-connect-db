const {findAllCategories, createCategory, updateCategory, checkEmptyName} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated} = require("../controllers/categories")

const categoriesRouter = require('express').Router()

categoriesRouter.get('/categories',findAllCategories, sendAllCategories)
categoriesRouter.post('/categories',checkEmptyName,findAllCategories, createCategory,sendCategoryCreated)
categoriesRouter.put('categories/:id', checkEmptyName, updateCategory, sendCategoryUpdated)

module.exports = categoriesRouter