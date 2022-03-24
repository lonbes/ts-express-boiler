import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'

import healthRouter from './routes/health'

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())

app.use('/', healthRouter())

app.listen(port, () => {
	console.log(`App running on ${port}`)
})