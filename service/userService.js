let mongo = require('mongodb')
let ApiError = require('../vo/apiError.js')

class UserService {

	constructor(db) {
		this.db = db
	}
		
	getUsers() {
		return this.db.collection('users').find().toArray()
    		.then(result => {return result})
	}

	getUser(id) {
		return this.db.collection('users').find({ _id: new mongo.ObjectID(id) }).toArray()
    		.then(result => { return result })
	}

	saveUser(user) {
		this.validateUser(user)
		return this.db.collection('users').insertOne(user)
			.then(result => { return result.insertedId })
	}

	validateUser(user) {
		if (!user || !user.name) {
			throw new ApiError(400, 'INVALID', 'Invalid params')
		}
		return true
	}

	deleteUser(id) {
		return this.db.collection('users').deleteOne({ _id: new mongo.ObjectID(id) })
			.then(result => { 
				if (result.deletedCount == 0) {
					throw new ApiError(404, 'NOT_FOUND', 'Not found')
				}
				return result 
			}) 
	}

	updateUser(id, user) {
		return this.db.collection('users')
			.updateOne({ _id: new mongo.ObjectID(id) }, { $set: user })
			.then(result => { 
				if (result.upsertedCount == 0) {
					throw new ApiError(404, 'NOT_FOUND', 'Not found')
				}
				return result 
			}) 	
	}
}

module.exports = UserService