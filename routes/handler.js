let ApiResponse = require('../vo/apiResponse.js')

const handle = (app) => {
	app.use((err, req, res, next) => {
		let { status, code, message } = err
	 	console.error(err)
	 	let apiResponse = new ApiResponse()
	 	apiResponse.addError(code, message)
	  	res.status(status).send(apiResponse)
	})
}

module.exports = handle