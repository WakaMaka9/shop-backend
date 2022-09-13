import express from 'express'
import './model.js'
import {sequelize} from './sequelize.js'
import router from './routes/index.js'
import ErrorHandler from './middleware/ErrorHandler.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api', router)
app.use(ErrorHandler)

const start = async () => {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log('Сервер запущен на порту', PORT))
    } catch(e) {
        console.log(e)
    }
}

start()

