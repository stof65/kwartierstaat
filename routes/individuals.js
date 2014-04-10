var ctrl = require('../app_server/controllers/individuals');

module.exports = function (app) { 
	app.get('/individuals', ctrl.getListOfIndividuals); 
	app.get('/individual', ctrl.getOneIndividual); 
	app.get('/individual/new', ctrl.addIndividual); 	
};






