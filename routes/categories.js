const {findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories")
const {deleteGame} = require("../middlewares/games");

const categoriesRouter = require('express').Router()

categoriesRouter.get('/categories',findAllCategories, sendAllCategories)
categoriesRouter.post('/categories',checkEmptyName,findAllCategories, createCategory,sendCategoryCreated)
categoriesRouter.put('categories/:id', checkEmptyName, updateCategory, sendCategoryUpdated)
categoriesRouter.delete('categories/:id',deleteCategory,sendCategoryDeleted)

module.exports = categoriesRouter