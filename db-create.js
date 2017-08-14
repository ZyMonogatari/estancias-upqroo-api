'use strict';
var student = require('./models/student');
var administrative = require('./models/administrative');
var teacher = require('./models/teacher');


student.sync({force: true});
teacher.sync({force: true});
administrative.sync({force: true});