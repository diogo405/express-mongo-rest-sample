let config = require('../conf/config.js')
let mongo = require('mongodb')

const getConnection = () => {
	return mongo.MongoClient.connect(config.db.url, { useUnifiedTopology: true })
			.then(client => { return client.db('test') })
}

module.exports = getConnection