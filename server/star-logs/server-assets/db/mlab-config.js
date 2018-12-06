var mongoose = require('mongoose')
var connectionString = 'mongodb://cptkirk1:cptkirk1@ds127843.mlab.com:27843/star-logs-vue'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})