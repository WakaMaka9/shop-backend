import express from 'express'
import BrandController from '../controllers/Brand.js'

const router = new express.Router()

router.get('/getall', BrandController.getAll)
router.get('/getone/:id([0-9]+)', BrandController.getOne)

export default router