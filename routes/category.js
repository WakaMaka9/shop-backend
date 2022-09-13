import express from 'express'
import CategoryController from '../controllers/Category.js'

const router = new express.Router()

router.get('/getall', CategoryController.getAll)
router.get('/getone/:id([0-9]+)', CategoryController.getOne)

export default router