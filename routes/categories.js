const {findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories")
const {deleteGame} = require("../middlewares/games");
const  checkAuth  = require("../middlewares/auth.js");
const {findCategoryById} = require("@/middlewares/categories");


const categoriesRouter = require('express').Router()

categoriesRouter.get('/categories',findAllCategories, sendAllCategories)
categoriesRouter.post('/categories',findAllCategories,checkIsCategoryExists,checkEmptyName,checkAuth,createCategory,sendCategoryCreated)
categoriesRouter.get('/categories/:id',findCategoryById, sendCategoryById)
categoriesRouter.put('categories/:id', checkEmptyName,checkAuth ,updateCategory, sendCategoryUpdated)
categoriesRouter.delete('categories/:id',checkAuth,deleteCategory,sendCategoryDeleted)

module.exports = categoriesRouter