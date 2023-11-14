import express from 'express'
import logger from '../utils/logger'
import categoryRoutes from './routes/categoryRoutes'

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/categories', categoryRoutes)

app.use('/api', router)

app.listen(PORT, () => {
    logger.info(`listening on port ${PORT}!`)
})
