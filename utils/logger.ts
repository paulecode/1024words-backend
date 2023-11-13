const pino = require('pino')

module.exports = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
        },
    },
})
