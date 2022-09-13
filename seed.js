

import { promises as fs } from 'fs'
import { sequelize } from './sequelize.js'
import { Product as ProductMapping, Category, Brand } from './model.js'

const categories = [
    'Телефоны','Ноутбуки','Наушники',
]

const Brands = [
    'Samsung','Xiaomi','Apple'
]

const startSeedCategories = async() => {
    for (const cat of categories) {
        await Category.create({
            name: cat
        })
    }
}

const startSeedBrands = async() => {
    for (const cat of Brands) {
        await Brand.create({
            name: cat
        })
    }
}

const startSeedProducts = async() => {
    const files = await fs.readdir('./assets')
    
    console.log(files)
    for (const file of files) {
        const stat = await fs.stat(`./assets/${file}`)
        // console.log(size)
        await ProductMapping.create({
            name: file.split('.')[0].split(/(?=[A-Z])/).join(' '),
            price: stat.size,
            rating: Math.trunc(Math.random()*10),
            image: file,
            categoryId: Number(file.split('.')[1])+1,
            brandId: Number(file.split('.')[2])+1,
            
        })
    }

}

const startSeed = async () => {
    await startSeedCategories()
    await startSeedBrands()
    await startSeedProducts()
    console.log('Сид завершён')
}
startSeed()