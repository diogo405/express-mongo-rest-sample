const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes.js')
const config = require('config')
let getConnection = require('./db/database.js')
const exceptionHandler = require('./routes/handler.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const initRoutes = async () => {
	let db = await getConnection()
	userRoutes(app, db)
	exceptionHandler(app)
}

initRoutes()
const port = config.get('server.port')
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
