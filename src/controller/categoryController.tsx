import { Request, Response, NextFunction } from 'express'
import categoryService from '../services/categoryService'

const getAll = async (req: Request, res: Response) => {
    const categories = await categoryService.getAllCategories()
    res.json(categories).status(200)
}

const categoryController = { getAll }

export default categoryController
