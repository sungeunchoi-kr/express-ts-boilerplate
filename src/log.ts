import { default as Pino } from 'pino'

const logLevel = process.env.LOG_LEVEL || 'debug'

export const log = Pino({
    level: logLevel
})
