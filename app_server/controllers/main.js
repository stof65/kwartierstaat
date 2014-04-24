var kwartier_model = require('../models/kwartieren');

var test = kwartier_model.Kwartier_FindByName('Kristof Verschaetse',function(){console.log('OK');});
// bovenstaande moet in de "gen3" functie komen !!!

/* GET home page */
exports.index = function(req, res){
  res.render('index', { layout:'layout', title: 'home page' });  // layout:'layout' is the default
};

/* GET blank template page without layout page */
exports.template_nolayout = function(req, res){
  res.render('template', { layout:false, title: 'blank page without layout' });
};

/* GET blank template page with layout page */
exports.template = function(req, res){
  res.render('template', { layout:'layout', title: 'blank page' });  // layout:'layout' is the default
};

/* GET three generations page */
exports.gen3 = function(req, res){
	if (req.query.root == 'Kristof Verschaetse') {
		res.render('gen3', {
			layout:'layout',
			title: '3 generaties',
			kwartier: kwartier_KV
			//kwartier: kwartier_model.Kwartier_FindByName('Kristof Verschaetse')
		})
	}	
	else if (req.query.root == 'Maurits Verschaetse') {
		res.render('gen3', {
			layout:'layout',
			title: '3 generaties',
			kwartier: kwartier_MV
		})
	}	
	else
		res.render('gen3', {
			layout:'layout',
			title: '3 generaties',
			kwartier: {
				i1: {name: req.query.root, birth: {place: 'onbekend', date: 'onbekend'}},
				i2: {name: '???'},
				i3: {name: '???'},
				i4: {name: '???'},
				i5: {name: '???'},
				i6: {name: '???'},
				i7: {name: '???'},
				i8: {name: '???'},
				i9: {name: '???'},
				i10: {name: '???'},
				i11: {name: '???'},
				i12: {name: '???'},
				i13: {name: '???'},
				i14: {name: '???'},
				i15: {name: '???'}		
			}
		})
};

kwartier_KV = {
	i1: {name: 'Kristof Verschaetse', birth: {place: 'Menen', date: '1965-07-07'}},
	i2: {name: 'Maurits Verschaetse'},
	i3: {name: 'Nadia Samyn'},
	i4: {name: 'Raphael Gerardus Leonardus Verschaetse'},
	i5: {name: 'Marie-Madeleine Ide'},
	i6: {name: 'Cyriel Camiel Samyn'},
	i7: {name: 'Maria Theresia Lagae'},
	i8: {name: 'Odilon Joseph Jules Verschaetse'},
	i9: {name: 'Cesaria Cornelia De Wilde'},
	i10: {name: 'Maurits August Ide'},
	i11: {name: 'Madeleine-Louise Verraes'},
	i12: {name: 'Petrus Joannes Samyn'},
	i13: {name: 'Louise Mathilde Van Meenen'},
	i14: {name: 'Constant Ferdinand Lagae'},
	i15: {name: 'Maria Ludovica Wastyn'}		
};

kwartier_MV = {
	i1: {name: 'Maurits Verschaetse', birth: {place: 'Menen', date: '1936-11-12'}},
	i2: {name: 'Raphael Gerardus Leonardus Verschaetse'},
	i3: {name: 'Marie-Madeleine Ide'},
	i4: {name: 'Odilon Joseph Jules Verschaetse'},
	i5: {name: 'Cesaria Cornelia De Wilde'},
	i6: {name: 'Maurits August Ide'},
	i7: {name: 'Madeleine-Louise Verraes'},
	i8: {name: 'Leonardus Verschaetse'},
	i9: {name: 'Barbara Ostyn'},
	i10: {name: '???'},
	i11: {name: '???'},
	i12: {name: '???'},
	i13: {name: '???'},
	i14: {name: '???'},
	i15: {name: '???'}		
};