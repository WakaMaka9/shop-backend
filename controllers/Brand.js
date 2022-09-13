import { Brand as BrandMapping } from '../model.js'

class Brand {
    async getAll(req,res) {
        const brands = await BrandMapping.findAll({
            order: [
                ['name', 'ASC'],
            ],
        })
        res.json(brands)
    }

    async getOne(req,res) {
        const brand = await BrandMapping.findByPk(req.params.id)
        if (!brand) {
            throw new Error('Бренд не найден в БД')
        }
        res.json(brand)
    }

}

export default new Brand()