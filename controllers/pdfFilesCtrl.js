const pdfTemplater = require('tfk-template-to-pdf-node');
var mysqlDao = require('./mysqlDao');

exports.generateF03 = function(req, res){
	//console.log(req.body);
	//res.status(200).jsonp(req.body);
	var options = {
	  templateData: {
	    'studentName': req.body.studentName,
	    'studentLastName': req.body.studentLastName  + ' ' + require.studentSecondLastName,
	    'enterprice': req.body.enterprice,
	    'nameAssesorEnterprice': req.body.teacherName + ' ' +require.teacherLastName,
	    'charge': req.body.charge,
	    'nameProject': req.body.nameProject,
	    'objetiveProject': req.body.objetiveProject,
	    'descriptionProject1': req.body.descriptionProject1,
	    'descriptionProject2': req.body.descriptionProject2,
	    'descriptionProject3': req.body.descriptionProject3,
	    'descriptionProject4': req.body.descriptionProject4,
	    'descriptionProject5': req.body.descriptionProject5,
	    'descriptionProject6': req.body.descriptionProject6,
	    'descriptionProject7': req.body.descriptionProject7,
	    'descriptionProject8': req.body.descriptionProject8,
	    'descriptionProject9': req.body.descriptionProject9,
	    'description1': req.body.description1,
	    'description2': req.body.description2,
	    'description3': req.body.description3,
	    'description4': req.body.description4,
	    'description5': req.body.description5,
	    'description6': req.body.description6,
	    'description7': req.body.description7,
	    'description8': req.body.description8,
	    'description9': req.body.description9,
	    'learnActivity': req.body.learnActivity,
	    'learnResult': req.body.learnResult,
	    'evidence': req.body.evidence,
	    'evaluation': req.body.evaluation,
	    'asigment': req.body.asigment,
	    'didacticStrategies': req.body.didacticStrategies,
	    'topic': req.body.topic,
	    'carrera': req.body.careerName
	  },

	  templateFilepath: './public/templates/F-03.docx',
	  documentFilepath: './public/results/'+ req.body.enrollment +'F-03.pdf'
	}
	console.log(options.templateFilepath, options.documentFilepath);

	pdfTemplater(options);
}