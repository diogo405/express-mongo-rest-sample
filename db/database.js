let config = require('config');
let mongo = require('mongodb')

const getConnection = () => {
	return mongo.MongoClient.connect(config.get('db.url'), { useUnifiedTopology: true })
			.then(client => { return client.db('test') })
}

module.exports = getConnection