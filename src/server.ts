import 'dotenv/config'
import express from 'express'
import { log } from './log'

const app = express()
const port = parseInt(process.env.PORT) || 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, err => {
    if (err) {
        log.error(err)
        return
    }

    return log.info(`express: listening on ${port}`)
})
