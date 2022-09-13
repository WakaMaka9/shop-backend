import { Category as CategoryMapping } from '../model.js'

class Category {
    async getAll() {
        const categories = await CategoryMapping.findAll({
            order: [
                ['name', 'ASC'],
            ],
        })
        return categories
    }

    async getOne(id) {
        const category = await CategoryMapping.findByPk(id)
        if (!category) {
            throw new Error('Категория не найдена в БД')
        }
        return category
    }

}

export default new Category()