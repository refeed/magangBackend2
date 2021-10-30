var sqlite3 = require('sqlite3')

const db = new sqlite3.Database('gcs.db')

module.exports = db
