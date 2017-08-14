'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var student = db.define('student', {
	name: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	secondLastName: {
		type: Sequelize.STRING
	},
	carreerIndex: {
		type: Sequelize.STRING
	},
	carreerName: {
		type: Sequelize.STRING
	},
	group : {
		type: Sequelize.STRING
	},
	enrollment: {
		type: Sequelize.INTEGER
	},
	phone: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	nss: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	cuart: {
		type: Sequelize.STRING
	},
	period: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = student;