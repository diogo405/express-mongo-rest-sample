let UserService = require('../service/userService.js')
let ApiResponse = require('../vo/apiResponse.js')

const routes = async (app, db) => {
	let userService = new UserService(db)

	app.get('/user', async (req, res) => {
		let users = await userService.getUsers()
		let response = new ApiResponse()
		response.payload.users = users
		res.send(response)
	})

	app.get('/user/:id', async (req, res) => {
		let user = await userService.getUser(req.params.id)
		let response = new ApiResponse()
		response.payload.user = user
		res.send(response)
	})

	app.post('/user', async (req, res) => {
		try {
			let userId = await userService.saveUser(req.body)
			let response = new ApiResponse()
			response.payload.user = {id: userId}
			res.send(response)
		} catch (e) {
			let response = new ApiResponse()
			response.addError(e.code, e.message)
			res.status(e.status).send(response)
		}
	})

	app.delete('/user/:id', async (req, res) => {
		try {
			await userService.deleteUser(req.params.id)
			res.send(new ApiResponse())
		} catch (e) {
			let response = new ApiResponse()
			response.addError(e.code, e.message)
			res.status(e.status).send(response)	
		}
	})

	app.put('/user/:id', async (req, res) => {
		try {
			await userService.updateUser(req.params.id, req.body)
			res.send(new ApiResponse())
		} catch (e) {
			let response = new ApiResponse()
			response.addError(e.code, e.message)
			res.status(e.status).send(response)	
		}
	})
}

module.exports = routes