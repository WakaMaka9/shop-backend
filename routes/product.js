import express from 'express'
import ProductController from '../controllers/Product.js'

const router = new express.Router()

router.get('/getall', ProductController.getAll)
router.get('/getone/:id([0-9]+)', ProductController.getOne)

export default router