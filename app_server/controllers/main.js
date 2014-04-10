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
  res.render('gen3', {
	layout:'layout',
	title: '3 generaties',
	kwartier: {
		i1: {name: 'Kristof Verschaetse', birth: {place: 'Menen', date: '1965-07-07'}},
		i2: {name: 'Maurits Verschaetse'},
		i3: {name: 'Nadia Samyn'},
		i4: {name: 'Rafael Verschaetse'},
		i5: {name: 'Marie-Madeleine Ide'},
		i6: {name: 'Cyriel Samyn'},
		i7: {name: 'Maria Lagae'}		
	}
	});  
};