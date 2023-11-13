const express = require('express')
const logger = require('../utils/logger')

const app = express()

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    logger.info('listening on port 3000!')
})
