var Sequelize = require('sequelize');
var dbName = 'estanciasApi';
var user = 'root';
var pass = '';

var db = new Sequelize(dbName, user, pass, {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = db;