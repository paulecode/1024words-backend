import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const categoriesData = {
    'Pronouns I': ['I', 'You', 'He', 'She', 'It', 'We', 'They', 'Them'],
    'Verbs I': [
        'to be',
        'to go',
        'to walk',
        'to live',
        'to have',
        'to like',
        'to say',
        'to think',
    ],
    'Numbers 1-10': [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
    ],
    'Animals I': [
        'Dog',
        'Cat',
        'Bird',
        'Mouse',
        'Chicken',
        'Pig',
        'Cow',
        'Sheep',
        'Horse',
    ],
    'Food I': [
        'Apple',
        'Banana',
        'Bread',
        'Potato',
        'Soup',
        'Orange',
        'Cherry',
    ],
}

async function main() {
    for (const categoryName in categoriesData) {
        const category = await prisma.baseCategory.create({
            data: {
                name: categoryName,
                unlockPoints: 0,
                BaseWord: {
                    create: categoriesData[categoryName].map(
                        (baseWord: any) => ({
                            baseWord,
                        })
                    ),
                },
            },
        })
    }
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
