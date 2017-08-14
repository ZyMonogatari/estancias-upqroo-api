'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var administrative = db.define('administrative', {
	name: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = administrative;