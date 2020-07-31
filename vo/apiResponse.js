class ApiResponse {
	constructor(params) {
		this.id = this.generateId()
		this.success = true
		this.payload = {}
		this.errors = []
	}

	addError(code, message) {
		this.errors.push({code: code, message: message})
		this.success = false
		this.payload = {}
	}

	generateId() { 
		let arr = '0123456789abcdefghijlmnopqrstuvxzkwyABCDEFGHIJLMNOPQRSTUVXZKWY'
        let ans = ''
        for (var i = 10; i > 0; i--) { 
            ans += arr[Math.floor(Math.random() * arr.length)]
        } 
        return ans 
    } 
}

module.exports = ApiResponse