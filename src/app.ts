const express = require('express')
const logger = require('../utils/logger')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    logger.info(`listening on port ${PORT}!`)
})
