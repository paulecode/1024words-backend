import pino from 'pino'

export default pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
        },
    },
})
