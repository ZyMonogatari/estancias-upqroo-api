var mysqlDao = require('./mysqlDao');

exports.login = function(req, res){
	mysqlDao.login(req.body.enrollment, req.body.pass).then(function(student){
		res.status(200).jsonp(student);
	});
}
exports.getTeachersData = function(req, res){
	mysqlDao.getTeachersData(req.params.carreer).then(function(teachers){
		res.status(200).jsonp(teachers);
	});
}