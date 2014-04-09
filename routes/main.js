var ctrl = require('../app_server/controllers/main');

module.exports = function (app) { 
	app.get('/', ctrl.index); 
	app.get('/nolayout', ctrl.template_nolayout);
	app.get('/template', ctrl.template); 
	app.get('/gen3', ctrl.gen3); 	
};






