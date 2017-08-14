var student = require("../models/student");
var administrative = require("../models/administrative");
var teacher = require("../models/teacher");
exports.getStudentData = function(enrollmentParam){
	return student.findOne({
  		where: {
    		enrollment: enrollmentParam
  		}
  	});
}

exports.login = function(enrollmentParam, pass){
  return student.findOne({
      where: {
        enrollment: enrollmentParam, 
        password: pass
      }
    });
}
exports.getAministrative = function(){
  return administrative.findAll();
}

exports.getTeachersData = function(carreer){
  return teacher.findAll({
    where: {
      carreer: carreer
    }
  });
}