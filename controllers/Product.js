import { Product as ProductMapping } from '../model.js'
import { ProductProp as ProductPropMapping } from '../model.js'
import { Brand as BrandMapping } from '../model.js'
import { Category as CategoryMapping } from '../model.js'

import AppError from '../errors/AppError.js'

class Product {
    async getAll(req,res) {
        const {categoryId = null, brandId = null} = req.params
        let {limit = null, page = null} = req.query
        limit = limit && /[0-9]+/.test(limit) && parseInt(limit) ? parseInt(limit) : 3
        page = page && /[0-9]+/.test(page) && parseInt(page) ? parseInt(page) : 1
        
        const offset = (page - 1) * limit
        const where = {}
        if (categoryId) where.categoryId = categoryId
        if (brandId) where.brandId = brandId
        const products = await ProductMapping.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                {model: BrandMapping, as: 'brand'},
                {model: CategoryMapping, as: 'category'}
            ],
            order: [
                ['name', 'ASC'],
            ],
        })
        res.json(products)
    }

    async getOne(req,res) {
        const product = await ProductMapping.findByPk(req.params.id, {
            include: [
                {model: ProductPropMapping, as: 'props'},
                {model: BrandMapping, as: 'brand'},
                {model: CategoryMapping, as: 'category'},
            ]
        })
        if (!product) {
            throw new Error('Товар не найден в БД')
        }
        res.json(product)
    }

}

export default new Product()