import express from 'express'
const router = express.Router()
import categoryController from '../controller/categoryController'
import logger from '../../utils/logger'

router.get('/', categoryController.getAll)

export default router
