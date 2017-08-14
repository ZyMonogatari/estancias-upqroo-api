var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var mysqlDao = require('./mysqlDao');
var fs = require('fs');
var path = require('path');
var msopdf = require('node-msoffice-pdf');

exports.generateF01 = function(req, res){
    /*plant.create(req.body).then(function(){
        res.status(200).send("agregado");
    });*/
    mysqlDao.getAministrative().then(function(admin){
        mysqlDao.getStudentData(req.params.matricula).then(function(student){

            console.log(__dirname);
            var date = getCurrentDate();
            var content = fs.readFileSync(path.resolve('./public/templates/F-01.docx'), 'binary');
            var zip = new JSZip(content);
            var doc = new Docxtemplater();
            doc.loadZip(zip);
            //set the templateVariables
            doc.setData({
                date: date.day + ' de ' + date.month + ' del ' + date.year,
                studentFirstName: student.dataValues.name,
                studentLastName: student.dataValues.lastName + " " + student.dataValues.secondLastName,
                studentId: student.dataValues.enrollment,
                currentPeriod: student.dataValues.period,
                cuartName: student.dataValues.cuart,
                carreer: student.dataValues.carreerName,
                hours: '120',
                currentVinculationDirector: admin[0].dataValues.lastName + " " + admin[0].dataValues.name
            });

            try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render()
            }
            catch (error) {
                var e = {
                    message: error.message,
                    name: error.name,
                    stack: error.stack,
                    properties: error.properties,
                }
                console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
            }

            var buf = doc.getZip()
                     .generate({type: 'nodebuffer'});

            // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
            fs.writeFileSync(path.resolve('./public/results/' + student.dataValues.enrollment + 'F-01.docx'), buf);
            res.status(200).send('http://localhost:8080/public/results/' + student.dataValues.enrollment + 'F-01.docx');
        });
    });
}
exports.generateF02 = function(req, res){
    mysqlDao.getAministrative().then(function(administrative){
        mysqlDao.getStudentData(req.params.matricula).then(function(student){
            var date = getCurrentDate();
            console.log(date.day);
            var content = fs
            .readFileSync(path.resolve(__dirname, '../public/templates/F-02.docx'), 'binary');
            var zip = new JSZip(content);
            var doc = new Docxtemplater();
            doc.loadZip(zip);
            //set the templateVariables
            console.log(administrative[0].dataValues);
            doc.setData({
                date: date.day + ' de ' + date.month + ' del ' + date.year,
                encargadoEstancias: administrative[0].dataValues.lastName + ' ' + administrative[0].dataValues.name,
                nombreAlumno: student.dataValues.lastName + ' ' + student.dataValues.secondLastName + ' ' + student.dataValues.name ,
                carreer: student.dataValues.carreerName
            });
            try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render()
            }
            catch (error) {
                var e = {
                    message: error.message,
                    name: error.name,
                    stack: error.stack,
                    properties: error.properties,
                }
                console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
            }

            var buf = doc.getZip()
                     .generate({type: 'nodebuffer'});

            // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
            fs.writeFileSync(path.resolve('./public/results/' +student.dataValues.enrollment + 'F-02.docx'), buf);
            res.status(200).send('http://localhost:8080/public/results/' + student.dataValues.enrollment + 'F-02.docx');
            
        });
    });
}
exports.generateF03 = function(req, res){
    var date = getCurrentDate();
    console.log(date.day);
    var content = fs
    .readFileSync(path.resolve(__dirname, '../public/templates/F-03.docx'), 'binary');
    var zip = new JSZip(content);
    var doc = new Docxtemplater();
    doc.loadZip(zip);
    //set the templateVariables
    doc.setData({
        'studentName': req.body.studentName,
        'studentLastName': req.body.studentLastName  + ' ' + req.body.studentSecondLastName,
        'group': req.body.group, 
        'enterprice': req.body.enterprice,
        'nameAssesorEnterprice': req.body.assesorName,
        'nameAssesorUP': req.body.teacherName + ' ' + req.body.teacherLastName,
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
        'week1': req.body.week1,
        'week2': req.body.week2,
        'week3': req.body.week3,
        'week4': req.body.week4,
        'week5': req.body.week5,
        'week6': req.body.week6,
        'week7': req.body.week7,
        'week8': req.body.week8,
        'week9': req.body.week9,
        'hour1': req.body.hour1,
        'hour2': req.body.hour2,
        'hour3': req.body.hour3,
        'hour4': req.body.hour4,
        'hour5': req.body.hour5,
        'hour6': req.body.hour6,
        'hour7': req.body.hour7,
        'hour8': req.body.hour8,
        'hour9': req.body.hour9,
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
    });
    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
    }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
                console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
            }

        var buf = doc.getZip()
            .generate({type: 'nodebuffer'});

        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve('./public/results/' + req.body.enrollment + 'F-03.docx'), buf);
    msopdf(null, function(error, office) { 

    if (error) {
      console.log("Init failed", error);
      return;
    }

   /*
     There is a queue on the background thread, so adding things is non-blocking.
   */

   office.word({input: './public/results/' + req.body.enrollment + 'F-03.docx', output: './public/results/'+ req.body.enrollment + 'F-03.pdf'}, function(error, pdf) {
      if (error) {
           /* 
               Sometimes things go wrong, re-trying usually gets the job done
               Could not get remoting to repiably not crash on my laptop
           */
           console.log("Woops", error);
       } else {
           console.log("Saved to", pdf);
           res.status(200).send('http://localhost:8080/public/results/' + req.body.enrollment + 'F-03.pdf');
       }
   });

   /*
     Word/PowerPoint/Excel remain open (for faster batch conversion)

     To clean them up, and to wait for the queue to finish processing
   */

   office.close(null, function(error) {
       if (error) {
           console.log("Woops", error);
       } else {
           console.log("Finished & closed");
       }
   });
});
}


exports.generateF04 = function(req, res){
    var date = getCurrentDate();
    console.log(date.day);
    var content = fs
    .readFileSync(path.resolve(__dirname, '../public/templates/F-04.docx'), 'binary');
    var zip = new JSZip(content);
    var doc = new Docxtemplater();
    doc.loadZip(zip);
    //set the templateVariables
    doc.setData({
        'studentFirstName': req.body.studentName,
        'studentLastName': req.body.studentLastName  + ' ' + req.body.studentSecondLastName,
        'phone' : req.body.studentPhone,
        'carrer': req.body.careerName,
        'studentId': req.body.enrollment,
        'email': req.body.email,
        'nss': req.body.nss,
        'enterprice': req.body.enterprice,
        'giro': req.body.giro,
        'type': req.body.enterpriceType,
        'addressEnterprice' : req.body.addressEnterprice,
        'rrhh' : req.body.rrhh,
        'rrhhPhone' : req.body.rrhhPhone,
        'rrhhExt' : req.body.rrhhExt,
        'rrhhEmail' : req.body.rrhhEmail,
        'titleAssesorEnterprice': req.body.titleAssesorEnterprice,
        'nameAssesorEnterprice' : req.body.nameAssesorEnterprice,
        'charge': req.body.charge,
        'phoneAssesorEnterprice': req.body.phoneAssesorEnterprice,
        'extAssesorEnterprice': req.body.extAssesorEnterprice,
        'emailAssesorEnterprice' : req.body.emailAssesorEnterprice,
        'titleAssesorAcademic': req.body.titleAssesorAcademic,
        'nameAssesorAcademic' : req.body.nameAssesorAcademic,
        'emailAssesorAcademic' : req.body.emailAssesorAcademic,
        'phoneAssesorAcademic': req.body.phoneAssesorAcademic,
        'projectName': req.body.projectName, 
        'estancia1': req.body.estancia1,
        'estancia2': req.body.estancia2
    });
    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
    }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
                console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
            }

        var buf = doc.getZip()
            .generate({type: 'nodebuffer'});

        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve('./public/results/' + req.body.enrollment + 'F-04.docx'), buf);
    msopdf(null, function(error, office) { 

    if (error) {
      console.log("Init failed", error);
      return;
    }

   /*
     There is a queue on the background thread, so adding things is non-blocking.
   */

   office.word({input: './public/results/' + req.body.enrollment + 'F-04.docx', output: './public/results/'+ req.body.enrollment + 'F-04.pdf'}, function(error, pdf) {
      if (error) {
           /* 
               Sometimes things go wrong, re-trying usually gets the job done
               Could not get remoting to repiably not crash on my laptop
           */
           console.log("Woops", error);
       } else {
           console.log("Saved to", pdf);
           res.status(200).send('http://localhost:8080/public/results/' + req.body.enrollment + 'F-04.pdf');
       }
   });

   /*
     Word/PowerPoint/Excel remain open (for faster batch conversion)

     To clean them up, and to wait for the queue to finish processing
   */

   office.close(null, function(error) {
       if (error) {
           console.log("Woops", error);
       } else {
           console.log("Finished & closed");
       }
   });
});
}


exports.generateF05 = function(req, res){
    mysqlDao.getAministrative().then(function(administrative){
        mysqlDao.getStudentData(req.params.matricula).then(function(student){
            var date = getCurrentDate();
            console.log(date.day);
            var content = fs
            .readFileSync(path.resolve(__dirname, '../public/templates/F-05.docx'), 'binary');
            var zip = new JSZip(content);
            var doc = new Docxtemplater();
            doc.loadZip(zip);
            //set the templateVariables
            console.log(administrative[0].dataValues);
            doc.setData({
                date: date.day + ' de ' + date.month + ' del ' + date.year,
                encargadoEstancias: administrative[0].dataValues.lastName + ' ' + administrative[0].dataValues.name,
                nombreAlumno: student.dataValues.lastName + ' ' + student.dataValues.secondLastName + ' ' + student.dataValues.name ,
                carreer: student.dataValues.carreerName
            });
            try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render()
            }
            catch (error) {
                var e = {
                    message: error.message,
                    name: error.name,
                    stack: error.stack,
                    properties: error.properties,
                }
                console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
            }

            var buf = doc.getZip()
                     .generate({type: 'nodebuffer'});

            // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
            fs.writeFileSync(path.resolve('./public/results/' + student.dataValues.enrollment + 'F-05.docx'), buf);
            res.status(200).send('http://localhost:8080/public/results/' + student.dataValues.enrollment + 'F-05.docx');
            
        });
    });
}


function getCurrentDate(){
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    var d = new Date();
    var month = monthNames[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var date = {
        day: day, 
        month: month,
        year: year
    }
    return date;
}