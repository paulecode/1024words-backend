import prisma from '../../utils/db/prisma'

const getAllCategories = async () => {
    return await prisma.baseCategory.findMany({})
}

const categoryService = { getAllCategories }

export default categoryService
