'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var teacher = db.define('teacher', {
	title: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}, 
	carreer: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = teacher;